
// invoke the instance of SpeechRecognition

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = false;

// instatiate socket.io
const socket = io();
// listen for the click event to initiate the speech recognition 

document.querySelector('button').addEventListener('click'), () =>{
    recognition.start()
}

// retrieve what was said as text 
 recognition.addEventListener('result', (e) => {

    let last = e.results.length - 1;
    let text = e.results[last][0].transcript;

    socket.emit('chat message ', text)
    console.log('Confidence:' + e.results[0][0].confidence);
 })


// will need to make a work around for outdate api for api.io 
