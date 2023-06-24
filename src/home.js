import clear from "./clear";
import chef from "./Image/chef.jpg";
function createHome(){
    const body = document.querySelector("body")
    const h1 = document.createElement("h1")

    h1.textContent = "SweetSlice" ;
    const homeBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    homeBtn.textContent = "Home";
    contactBtn.textContent = "Contact";
    menuBtn.textContent = "Menu"
    homeBtn.classList.add("btn")
    homeBtn.setAttribute("id", "home-btn")
    contactBtn.classList.add("btn")
    contactBtn.setAttribute("id", "contact-btn")
    menuBtn.classList.add("btn")
    menuBtn.setAttribute("id", "menu-btn")
    


    

const header = document.createElement("header")
header.setAttribute("id", "header");


const btnContainer = document.createElement("div");
btnContainer.setAttribute("id", "btn-container");
btnContainer.append(homeBtn, menuBtn, contactBtn)
header.append(h1, btnContainer)

    body.append(header, loadHome())
    return body
}


function loadHome(){
    const divContent = document.querySelector("#content");
    clear()
    const h2 = document.createElement("h2");
    h2.textContent = 'Savor the Perfect Blend of Pizza and Dessert Delights!'
    const h3  = document.createElement("h3");
    h3.textContent = "Crafted with unwavering passion since 2001";

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
   
    img.src = chef ;
    img.alt = "photo of chef with curly hair"
    
   
    const h3text = document.createElement("h3")
    h3text.textContent = "Order online or visit us!"
    imgContainer.append(img)
    divContent.append(h2,h3, imgContainer, h3text);
    return divContent
}



export {createHome, loadHome}