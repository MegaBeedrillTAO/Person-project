const {Translate} = require('@google-cloud/translate')

const translate = new Translate();

export default function Speak(text, lang){
  var synthesis = window.speechSynthesis;

  let langCode = '';
  if (lang === 'English' || lang === 'english'){
    langCode = 'en';
  }
  else if (lang === 'Spanish' || lang === 'spanish'){
    langCode = 'es'
  }
  var voice = synthesis.getVoices().filter(function(voice) {
    return voice.lang === 'en';
  })[0];
  
  let stuff = translate.translate(text, 'es');
  console.log(stuff);

  var utterance = new SpeechSynthesisUtterance(stuff);
  utterance.voice = voice;
  utterance.pitch = 1.5;
  utterance.rate = 1;
  utterance.volume = 0.8;
  synthesis.speak(utterance);

}