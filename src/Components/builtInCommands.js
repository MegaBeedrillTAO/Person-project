// import React, { Component } from 'react'
// import { connect } from 'react-redux'

// export class builtInCommands extends Component {
//     constructor(){
//         super();
//         this.state = {
//             commands: 

           export let builtIn = [
                {
                    commandCode: '!commands',
                    content: '!joke, !weather, !hello, !introduce, !settings'
                },
                {
                    commandCode: '!joke',
                    content: "I don't have any jokes yet."
                },
                {
                    commandCode: '!weather',
                    content: 'Look outside.'
                },
                {
                    commandCode: '!hello',
                    content: 'Hello there '
                },
                {
                    commandCode: '!introduce',
                    content: 'My name is Devvie it\'s short for Dev Mountain Personal Assistant.'
                }
            ]
//         }
//     }
    
//     render() {
        
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// const mapStateToProps = (reduxState) => ({
    
// })

// const mapDispatchToProps = {
    
// }
// export const builtIn = this.state.commands;
// export default connect(mapStateToProps, mapDispatchToProps)(builtInCommands)

