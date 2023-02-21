const button1 = document.createElement('button')
const button2 = document.createElement('button')
const button3 = document.createElement('button')
const container = document.getElementById("container")
container.appendChild(button1)
container.appendChild(button2)
container.appendChild(button3)

container.style.backgroundColor = "grey";
container.style.width = "60%";
container.style.padding = "1em"
container.style.margin = "auto";
container.style.display = "flex";
container.style.justifyContent = "space-between";

button1.innerHTML = 'hey';
button1.style.width = '20em';
button1.style.height = '10em';
button1.style.backgroundColor = 'green';

button2.innerHTML = 'hey';
button2.style.width = '20em';
button2.style.height = '10em';
button2.style.backgroundColor = 'red';

button3.innerHTML = 'hey';
button3.style.width = '20em';
button3.style.height = '10em';
button3.style.backgroundColor = 'blue';

button1.addEventListener('click', function(){
    document.body.style.backgroundColor = "green";
})
button2.addEventListener('click', function(){
    document.body.style.backgroundColor = "red";
})
button3.addEventListener('click', function(){
    document.body.style.backgroundColor = "blue";
})