import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getSettings} from '../../Ducks/Reducers/settingsReducer';
import Commands from './Posts/Commands';
import builtIn from '../builtInCommands';



export class MainView extends Component {
    constructor(){
        super();
        this.state = {
            posts: [],
            reply: '',
            input: '',
            wait: false
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

     createReply = () => {
        //if (this.state.wait){
       for (let i = 0; i < builtIn.length; i++){
           if (this.state.input === builtIn[i].commandCode){
               this.setState({
                   // reply: builtIn[i].content,
                    posts: [...this.state.posts,
                        {content: builtIn[i].content,
                        type: 'reply'}
                    ],
                    input: '',
                    wait: false
                })
                console.log(this.state.posts);
                return;
           }
           
       }
       
        this.setState({
            //reply: "I don't know that command",
            posts: [...this.state.posts,
                {content: "I don't know that command",
                type: 'reply'}
            ],
            input: '',
            wait: false
        })
        console.log(this.state.posts);
        //}
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
        language: reduxState.settingsReducer.language
    }
};

export default connect(mapStateToProps,{
    getSettings
})(MainView)
