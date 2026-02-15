import React, { useState } from 'react';
import CartoonImage from './assets/cartoon_image.png';


function Introduction(){

    const greetings = ["Hello there,", "Bonjour,", "Privet,", "Ciao,", "Nǐ hǎo,", "Konnichiwa,", "¡Hola!,"]


    //creates introText var. and sets initial value of the first element of greetings array
   

   const [introText, setIntroText] = useState(greetings[0]);

    //Creates index var. sets initial value to 0. This keeps track of which array item we are on in the list
   
    const [index, setIndex] = useState(0);

    
//Creates mouseHover event handler function
    function mouseHover() {

        //Creates a variable called nextIndex whose value is simply, index with an increment of 1
        
        const nextIndex = (index + 1) % greetings.length;
    
        
        //runs the setIndex useState function to update the value of index to be the value of nextIndex (which is index + 1)

        setIndex(nextIndex);
         
          //this is needed because it runs the useState function on index, 
         // so without running setIndex on nextIndex, then it will stop after the first time it increased the value of index to 1. so it will only change the text once

         /*runs the setIntroText useState function to update the value of introText with the value of (greetings[nextIndex])

         which is basically: greetings array, with index + 1, so when mouseHover is called, it just does greetings array + 1.
         */
         setIntroText(greetings[nextIndex]);
        
         
       
    }

    return (
            <div className="introduction">




        <div className="intro-child-1">
            <h2 className="intro-h2"><span id="Hello-there" onMouseOut={mouseHover}>{introText}</span> I'm Derek</h2>

            <p className="intro-p">
                I'd like to take a moment to introduce myself. I am an IT industry veteran based in Seattle, WA with vast experience
                in supporting fortune 500 and SMB IT infrastructure. I have been responsible for managing security and patching in various
                environments as well as acting as a key entity in SQL database management (facilitating creation, migrations and handling maintenance of SQL databases).
                <br />
                <br />
                After years of taking part in the software development process ensuring software quality and
                supporting the backend database side of things, I have shifted my focus toward the engineering side of the coin.
                <br />
                <br />
                With a background in programming languages like C++, Python, and C#, I spend my days writing code in Javascript making my webpages
                interactive. My goal is to leverage my experience to build innovative and efficient solutions.
            </p>
        </div>

        <div className="intro-child2"><img className="portrait" src={CartoonImage} alt="Cartoon image/ Portrait"/></div>


    </div>
    )
}

export default Introduction;