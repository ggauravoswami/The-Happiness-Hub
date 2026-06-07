
function scrollToMood(){
document.getElementById('mood').scrollIntoView({behavior:'smooth'});
}

function checkMood(){
const mood=document.getElementById('moodSelect').value;
const result=document.getElementById('result');
const map={
'Stressed':'Try breathing + rain sounds.',
'Sad':'Read quotes and play a game.',
'Tired':'Watch nature scenery.',
'Angry':'Take deep breaths and relax.',
'Happy':'Keep spreading positivity!'
};
result.innerText=map[mood];
}

function emergencyCalm(){
alert('Everything is okay. Focus on your next breath.');
}

function advice(){
const tips=[
'Take one slow breath.',
'A short break can help.',
'Small progress is still progress.',
'Drink water and stretch.'
];
document.getElementById('adviceBox').innerText=tips[Math.floor(Math.random()*tips.length)];
}

function quote(){
const quotes=[
'Happiness is a choice.',
'Every day is a fresh start.',
'Be kind to yourself.',
'Joy grows when shared.'
];
document.getElementById('quoteBox').innerText=quotes[Math.floor(Math.random()*quotes.length)];
}

function saveGratitude(){
const text=document.getElementById('gratitudeInput').value;
if(!text) return;
let data=JSON.parse(localStorage.getItem('gratitude')||'[]');
data.push(text);
localStorage.setItem('gratitude',JSON.stringify(data));
loadGratitude();
document.getElementById('gratitudeInput').value='';
}

function loadGratitude(){
const ul=document.getElementById('gratitudeList');
ul.innerHTML='';
let data=JSON.parse(localStorage.getItem('gratitude')||'[]');
data.forEach(item=>{
let li=document.createElement('li');
li.textContent=item;
ul.appendChild(li);
});
}

function toggleTheme(){
document.body.classList.toggle('dark');
}

let score=0;
const area=document.getElementById('gameArea');
function createBubble(){
const b=document.createElement('div');
b.className='bubble';
b.style.left=Math.random()*300+'px';
b.style.top=Math.random()*200+'px';
b.onclick=()=>{
score++;
document.getElementById('score').innerText=score;
b.remove();
};
area.appendChild(b);
setTimeout(()=>b.remove(),4000);
}
setInterval(createBubble,1000);
window.onload=loadGratitude;
