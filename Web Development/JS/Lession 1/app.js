let num = parseInt(prompt("Enter a number:"));
let table = document.querySelector('.table');

for (let i = 1; i <= 10; i++) {
    let p = document.createElement('button');
    p.innerText = `${num} * ${i} = ${num * i}`;
    table.append(p);
}