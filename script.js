document.addEventListener("DOMContentLoaded", function () {

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const targetId = this.getAttribute("href");

const targetSection = document.querySelector(targetId);

if(targetSection){

window.scrollTo({
top: targetSection.offsetTop - 80,
behavior: "smooth"
});

}

});

});

});

/* HEADER SCROLL EFFECT */

window.addEventListener("scroll", () => {

const header = document.querySelector("header");

if(window.scrollY > 50){

header.style.padding = "0px";
header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

}else{

header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.08)";

}

});

/* FADE IN ANIMATION */

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

const hiddenElements = document.querySelectorAll(
".service-card, .review-card, .founder-card, .trust-card, .why-card, .faq-item"
);

hiddenElements.forEach((el)=>{

el.classList.add("hidden");

observer.observe(el);

});

/* COUNTER ANIMATION */

const counters = document.querySelectorAll(".trust-card h3");

counters.forEach(counter=>{

const updateCounter = ()=>{

const targetText = counter.innerText;

if(targetText.includes("%")){

let current = 0;
const target = 100;

const interval = setInterval(()=>{

current++;

counter.innerText = current + "%";

if(current >= target){

clearInterval(interval);

}

},20);

}

};

updateCounter();

});/* CONTACT FORM */

const form = document.querySelector("form");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.querySelector('input[type="text"]').value;

const phone =
document.querySelector('input[type="tel"]').value;

const email =
document.querySelector('input[type="email"]').value;

const message =
document.querySelector("textarea").value;

const whatsappMessage =
`Hello Marwar Infotech,

Name: ${name}
Phone: ${phone}
Email: ${email}

Project Details:
${message}`;

const whatsappURL =
`https://wa.me/917691867621?text=${encodeURIComponent(whatsappMessage)}`;

window.open(whatsappURL, "_blank");

});

}

/* ACTIVE MENU */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", ()=>{

let current = "";

sections.forEach(section=>{

const sectionTop = section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current = section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});

console.log("Marwar Infotech Website Loaded Successfully 🚀");
