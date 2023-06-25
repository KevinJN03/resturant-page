import {createHome, loadHome} from "./home";
import loadContact from "./contact";
import loadMenu from "./menu";
import './style.css';
createHome()

const contactBtn = document.getElementById("contact-btn");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");

contactBtn.addEventListener("click", function() {
    selectMenu(2)
    loadContact()
})

homeBtn.addEventListener("click", function() {
    
    selectMenu(0)
    loadHome()
})

menuBtn.addEventListener("click", function(){

    selectMenu(1)
    loadMenu()
})


function selectMenu(index) {
    const btn = document.querySelectorAll(".btn");

    for(let i = 0; i < btn.length; i++){
        if(i != index){
             btn[i].classList.remove("active")  
        }
        else {
           
           btn[i].classList.add("active")
        } 
    }

}

