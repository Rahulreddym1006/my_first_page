let greet = document.getElementById("greet");

let click = document.getElementById("email-btn");

if(click.addEventListener("click",()=>{
greet.style.display="block", 
greet.textContent="Thank you for contacting"

}));