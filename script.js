document.addEventListener("DOMContentLoaded",()=>{


// BOOK BUTTON

const bookBtn=
document.getElementById(
"bookBtn"
);


bookBtn.onclick=()=>{


const date=
document.querySelector(
'input[type="date"]'
).value;


const guests=
document.querySelector(
'input[type="number"]'
).value;


const location=
document.querySelector(
'input[type="text"]'
).value;



if(
date===""||
guests===""||
location===""
){

alert(
"Please fill all booking details 😄"
);

return;

}



// Popup Create

const popup=

document.createElement(
"div"
);


popup.classList.add(
"popup"
);


popup.innerHTML=`

<div class="popup-card">

<h1>

🎉 Booking Confirmed

</h1>

<p>

📅 Date:
${date}

</p>

<p>

👥 Guests:
${guests}

</p>

<p>

📍 Location:
${location}

</p>

<p>

Our VIJAY EVENTS team
will contact you shortly

</p>

<button id="closePopup">

Close

</button>

</div>

`;

document.body.appendChild(
popup
);



document
.getElementById(
"closePopup"
)

.onclick=()=>{

popup.remove();

};


};




// HALL BUTTONS

const hallButtons=

document.querySelectorAll(
".hall-card button"
);


hallButtons.forEach(

(btn)=>{


btn.onclick=()=>{


alert(

"Hall Details Loading... 🏛️"

);


};


}

);



});
const bookButton =
document.querySelector(
".booking-box button"
);

bookButton.onclick=()=>{

const popup=
document.getElementById(
"successPopup"
);

popup.style.display="flex";

};


function closePopup(){

document.getElementById(
"successPopup"
)

.style.display="none";

}
// COUNTER ANIMATION

const counters=
document.querySelectorAll(
".counter"
);

counters.forEach(counter=>{

const update=()=>{

const target=
+counter.getAttribute(
"data-target"
);

const current=
+counter.innerText;

const increment=
target/100;


if(current<target){

counter.innerText=
Math.ceil(
current+increment
);

setTimeout(
update,
30
);

}

else{

counter.innerText=
target+"+";

}

};

update();

});
// REVIEWS AUTO CHANGE

const reviews=[

'⭐⭐⭐⭐⭐ Excellent decoration and service',

'⭐⭐⭐⭐⭐ Beautiful hall and amazing staff',

'⭐⭐⭐⭐⭐ Perfect place for weddings',

'⭐⭐⭐⭐⭐ Luxury experience'

];

let index=0;

setInterval(()=>{

document.getElementById(
"reviewText"
).innerHTML=reviews[index];

index++;

if(index>=reviews.length){

index=0;

}

},3000);




// CHATBOT
// CHATBOT

const chatIcon = document.getElementById("chatIcon");
const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const chatMessages = document.querySelector(".chat-messages");
const chatInput = document.getElementById("chatInput");


// OPEN/CLOSE CHAT

chatIcon.onclick = ()=>{

chatBox.style.display =

chatBox.style.display==="block"

? "none"

: "block";

};



// SEND MESSAGE

sendBtn.onclick = ()=>{

let userMsg = chatInput.value.toLowerCase();

if(userMsg==="") return;


// USER MESSAGE

chatMessages.innerHTML +=

`<p>🙋 You: ${userMsg}</p>`;


let botReply="🤖 Sorry, I didn't understand.";


// BOT ANSWERS

if(userMsg.includes("price")){

botReply="🤖 Our packages start from ₹30,000.";

}

else if(userMsg.includes("hall")){

botReply="🤖 We have Royal Hall, Diamond Hall and Golden Palace.";

}

else if(userMsg.includes("contact")){

botReply="🤖 Contact: +91 9876543210";

}

else if(userMsg.includes("booking")){

botReply="🤖 Click Book Now and fill your details.";

}

else if(userMsg.includes("location")){

botReply="🤖 We are located in Andhra Pradesh.";

}

else if(userMsg.includes("hello") || userMsg.includes("hi")){

botReply="🤖 Hello 👋 Welcome to VIJAY EVENTS";

}


// BOT REPLY DELAY

setTimeout(()=>{

chatMessages.innerHTML +=

`<p>${botReply}</p>`;

chatMessages.scrollTop =

chatMessages.scrollHeight;

},500);


chatInput.value="";

};

// THEME TOGGLE

const themeBtn=
document.getElementById(
"themeToggle"
);

themeBtn.onclick=()=>{

document.body.classList.toggle(
"dark-mode"
);

themeBtn.innerHTML=

document.body.classList.contains(
"dark-mode"
)

?

"☀️"

:

"🌙";

};



// SCROLL REVEAL

const observer=

new IntersectionObserver(

(entries)=>{

entries.forEach(

entry=>{

if(
entry.isIntersecting
){

entry.target.classList.add(
"show"
);

}

});

}

);


document
.querySelectorAll(
".hall-card,.counter-card,.review-card"
)

.forEach(el=>{

el.classList.add(
"hidden"
);

observer.observe(
el
);

});




// CONFETTI

function createConfetti(){

for(let i=0;i<40;i++){

let confetti=
document.createElement(
"div"
);

confetti.className=
"confetti";

confetti.style.left=

Math.random()*100
+"vw";

confetti.style.animationDuration=

Math.random()*3+2
+"s";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},5000);

}

}



// BOOK BUTTON CONFETTI

document
.querySelector(
".booking-box button"
)

.addEventListener(
"click",
createConfetti
);
// GALLERY LIGHTBOX

const images=
document.querySelectorAll(
"#gallery img"
);

const lightbox=
document.getElementById(
"lightbox"
);

const lightboxImg=
document.getElementById(
"lightboxImg"
);

images.forEach(img=>{

img.onclick=()=>{

lightbox.style.display=
"flex";

lightboxImg.src=
img.src;

};

});


document
.getElementById(
"closeLightbox"
)

.onclick=()=>{

lightbox.style.display=
"none";

};




// CURSOR GLOW

const glow=

document.querySelector(
".cursor-glow"
);

document.addEventListener(
"mousemove",

(e)=>{

glow.style.left=
e.clientX+"px";

glow.style.top=
e.clientY+"px";

}
);
// LOADING SCREEN

window.addEventListener("load",()=>{

setTimeout(()=>{

document.querySelector(
".loader"
).style.display="none";

},2000);

});