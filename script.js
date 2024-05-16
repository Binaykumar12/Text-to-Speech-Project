// const textEL = document.getElementById('text');
// const speakEL = document.getElementById('speak');
// const volumeEL = document.getElementById('volume');
// const rateEL = document.getElementById('rate');

// speakEL.addEventListener('click', speakText);

// function speakText() {
//     // Stop any speaking in progress
//     window.speechSynthesis.cancel();

//     const text = textEL.value;
//     const utterance = new SpeechSynthesisUtterance(text);
    
//     // Set volume and rate
//     utterance.volume = parseFloat(volumeEL.value);
//     utterance.rate = parseFloat(rateEL.value);

//     window.speechSynthesis.speak(utterance);
// }
const [textEL, speakEL, volumeEL, rateEL] = ['text', 'speak', 'volume', 'rate'].map(id => document.getElementById(id));

speakEL.addEventListener('click', () => {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(textEL.value);
    utterance.volume = parseFloat(volumeEL.value);
    utterance.rate = parseFloat(rateEL.value);
    window.speechSynthesis.speak(utterance);
});
