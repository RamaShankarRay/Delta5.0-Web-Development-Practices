let form = document.querySelector("form");
let outputScreen = document.querySelector("div");

form.elements[1].addEventListener("click", function(event) {
    event.preventDefault();
    let n = form.elements[0].value;

    outputScreen.innerHTML = ""; // Clears previous output before adding new content
if(n==0){
    alert("Please enter a valid number not a zero");
    return;
}
    for (let i = 1; i <= 10; i++) {
        let p = document.createElement("p");
        p.innerText = ` ${n} * ${i} = ${n * i}` ;
        outputScreen.appendChild(p); // Using appendChild for clarity
    }
});