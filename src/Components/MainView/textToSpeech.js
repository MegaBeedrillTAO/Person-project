var synthesis = window.speechSynthesis;

var voice = synthesis.getVoices().filter(function(voice) {
    return voice.lang === 'en';
  })[0];



export default function Speak(text){
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.pitch = 1.5;
    utterance.rate = 1.25;
    utterance.volume = 0.8;
    synthesis.speak(utterance);

}