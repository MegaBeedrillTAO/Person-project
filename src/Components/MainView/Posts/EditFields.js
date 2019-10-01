import React from 'react'
import Axios from 'axios'

class EditFields extends React.Component {
   constructor(){
       super();
       this.state = {
           langs: [],
           countries: []
       }
   }
   
   componentDidMount(){
        Axios.get('/languages').then(response => this.setState({langs: response.data[0]}));
        Axios.get('/countries').then(response => this.setState({countries: response.data}));
       
   }
   
    render(){
        return (
            <div className='editFields'>
                {this.props.type === 'normal' ? 
                <div className='edit-input'><section>{this.props.content}</section>
                <input  onChange={this.props.function} type={this.props.inputType}/> </div> :
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
                this.props.type === 'countries' ?
                <select style={{ margin: '1rem 0' }} onChange={this.props.function}>
    
                <option>
                    Select a Country
                </option>
                
                {this.state.countries.map((country,i) => (
                <option key={i} value={country.alpha2Code.toLowerCase()} >{country.name} </option>
               ))}
                
                </select>:

                null
                }
                
            </div>
        )
     }
    
}

export default EditFields;
