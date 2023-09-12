const myImage = document.querySelector("img");

myImage.onclick = ()  =>{
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "image/angula7.jpeg") {
         
        myImage.setAttribute("src","image/angula3.jpeg");
    } else {
        myImage.setAttribute("src", "image/angula7.jpeg");
    }
};

let myButton = document.querySelector("button");

let myHeading = document.querySelector("h1");

function setUserName() {

    const myName = prompt("Por favor, digite o seu nome: ");

localStorage.setItem("name", myName);

myHeading.textContent =`javascript é muito legal, ${myName}`


if (!localStorage.getItem("name")){

    setUserName();

    myHeading.textContent = `Angular é muito legal, ${storedName}`;
} else {
     
const storedName = localStorage.getItem("name");
myHeading.textContent = `Angular é muito legal, ${storedNam}`

}

};
 myButton.onclick = () => {

    setUserName();
 };