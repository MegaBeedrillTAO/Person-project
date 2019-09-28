import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getSettings} from '../../Ducks/Reducers/settingsReducer';
import Commands from './Posts/Commands';
import {builtIn} from '../builtInCommands';
import textToSpeech from './textToSpeech';
import Axios from 'axios';
import {createJoke} from '../../Ducks/Reducers/appReducer';



export class MainView extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            reply: '',
            input: ''
        }
    }

    handleInput = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    submitCommand = () => {
        this.setState({
            posts: [...this.state.posts,
                {content: this.state.input,
                type: 'command'}
            ],
            wait: true
        }, this.createReply)
        
    }
    getTranslate = async (text, target) =>{
       return await Axios.post('/translate', {
            text: text,
            target: target
        }).then(response => response.data)
    }
    //const translate = getTranslate(builtIn[i].content, this.props.language)
     createReply = async () => {
       for (let i = 0; i < builtIn.length; i++){
           if (this.state.input === builtIn[i].commandCode){
                const translate = await Axios.post('/translate', {
                    text: builtIn[i].content,
                    target: this.props.language
                }).then(response => response.data)
            
               if (this.state.input === '!hello'){
                let greeting = translate + this.props.name
                textToSpeech(greeting);
               }
               else{
                    textToSpeech(translate);
               }
               
               this.setState({
                    posts: [...this.state.posts,
                        {content: translate,
                        type: 'reply'}
                    ],
                    input: ''
                })
                
                return;
           }
           
       }

        const what = await Axios.post('/translate', {
            text: "I don't know that command",
            target: this.props.language
        }).then(response => response.data)
        textToSpeech(what);
        this.setState({
            posts: [...this.state.posts,
                {content: "I don't know that command",
                type: 'reply'}
            ],
            input: ''
        })
        
       this.props.createJoke();
       console.log(this.props.joke);
    }
    
    render() {
        
        if(this.props.showRedirect) {
            this.props.getSettings();
        }
         
        const content = this.state.posts.map((el, i) => (
            
            <Commands
                key={i}
                content={el.content}
                color= {this.props.chat_bubble_color}
                type={el.type}
            />
            
            
        ))
        
        return (

            <div className='mainView'>
               <main>
                    <section className='display' style={{border: `20px ${this.props.container_color} solid`, backgroundColor: `${this.props.background_color}` }} >
                        {content}
                    </section>
                    <section className='inputArea'>
                        <input onChange={this.handleInput} value={this.state.input}/>
                        <button onClick={this.submitCommand}>Submit</button>
                        
                    </section>
               </main>
                
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return {
        showRedirect: reduxState.userReducer.showRedirect,
        name: reduxState.settingsReducer.name,
        background_color: reduxState.settingsReducer.background_color,
        container_color: reduxState.settingsReducer.container_color,
        chat_bubble_color: reduxState.settingsReducer.chat_bubble_color,
        language: reduxState.settingsReducer.language,
        joke: reduxState.appReducer.joke
        
    }
};

export default connect(mapStateToProps,{
    getSettings,
    createJoke
})(MainView)
