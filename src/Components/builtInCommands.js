import Axios from 'axios';


export async function joker(){
    
    let joke =  await Axios.get('https://official-joke-api.appspot.com/jokes/random').then(response => response.data);
}

export const builtIn = [
    {
        commandCode: '!commands',
        content: '!joke, !weather, !hello, !introduce'
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

