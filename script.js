// JavaScript source code

const helloThere = document.getElementById('Hello-there');  //function called helloThere whose value is that of the html element called 'Hello-there'

const colors = ['red', 'green', 'light-blue', 'purple', 'orange']; //array of colors 

helloThere.addEventListener('mouseover', function () {      //calling the helloThere funct. with the .addeventListenver function


                                                        // The params of the addEventListener are 'mouseover' and another function

                                                          
    const randomIndex = Math.floor(Math.random() * colors.length);    //creating var. called randomIndex and value set to the Math.floor method etc.
    const randomColor = colors[randomIndex];
    this.style.color = randomColor;
});




const getQuote = document.getElementByID('Get-quote');

getQuote.addEventListener('mouseclick', function () {

    fetch('quoteurllink')
})