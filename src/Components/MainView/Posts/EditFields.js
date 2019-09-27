import React from 'react'
import Axios from 'axios'

export default  function EditFields(props) {
   
   let langs = [{name: '', code: ''}]
   async function getLang(){
       langs = await Axios.get('/languages').then(response => response.data);

   }
   getLang();
        
     
    return (
        <div className='editFields'>
            {props.type === 'normal' ? 
            <><section>{props.content}</section>
            <input  onChange={props.function}/> </> :
            props.type === 'drop' ?
            
            <select style={{ margin: '1rem 0' }} onChange={props.function}>

            <option>
                Select a language
            </option>
            
            {langs.map((lang,i) => (
            <option key={i} value={lang.code} >{lang.name} </option>
           ))}
            
            </select>
             :
            null
            }
            
        </div>
    )
}
