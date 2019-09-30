import React from 'react'
import Axios from 'axios'

class EditFields extends React.Component {
   constructor(){
       super();
       this.state = {
           langs: []
       }
   }
   
   componentDidMount(){
        Axios.get('/languages').then(response => this.setState({langs: response.data[0]}))
       
   }
   
    render(){
        return (
            <div className='editFields'>
                {this.props.type === 'normal' ? 
                <><section>{this.props.content}</section>
                <input  onChange={this.props.function} type={this.props.inputType}/> </> :
                this.props.type === 'drop' ?
                
                <select style={{ margin: '1rem 0' }} onChange={this.props.function}>
    
                <option>
                    Select a language
                </option>
                
                {this.state.langs.map((lang,i) => (
                <option key={i} value={lang.code} >{lang.name} </option>
               ))}
                
                </select>
                 :
                null
                }
                
            </div>
        )
     }
    
}

export default EditFields;
