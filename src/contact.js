import clear from "./clear";


function loadContact() {
    const divContent = document.querySelector("#content");
    clear()
    const location = document.createElement("p");
    location.textContent = "1024 Oakwood Ave San Diego, CA 22434";
    const workingHours = document.createElement("p");
    workingHours.innerHTML = "Mon-Thurs:8am-8pm<br>Fri-Sun:8am-11pm";
    const telephone = document.createElement("p");
    telephone.innerHTML = `<a href="tel:+12228885555">(222)-888 5555</a>`



    divContent.append(location, workingHours, telephone)
   

    return divContent
}

export default loadContact