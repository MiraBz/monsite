

document.addEventListener("DOMContentLoaded", function () {
    console.log("Le DOM est chargé.");

    // Sélectionner les éléments
    const noBtn = document.getElementById("nobtn");
    const yesbtn = document.getElementById("Yesbtn");
    const valentineDiv = document.getElementById("valentinediv");
    const confirmDiv = document.getElementById("confirmdiv");
    const confirmYes = document.getElementById("confirmYes");
    const confirmNo = document.getElementById("confirmNo");
    const textvalentin = document.getElementById('textvalentin');
    const valnetinqst = document.getElementById('valenimg');




     noBtn.addEventListener('click',()=>{
            //alert('i exist')
            const newwtext = ' ARE YOU SURE ?!! huh...'

            textvalentin.textContent = newwtext;
            textvalentin.style.color = 'red';
            
    
            valnetinqst.style.display='none'
            noBtn.style.display='none'
            yesbtn.style.display='none'


            const thinagain =document.createElement('button');
            thinagain.style.padding = '30px'
            thinagain.style.backgroundColor = 'white'
            thinagain.style.opacity ='5px'
            thinagain.style.borderRadius = '10px'
            thinagain.style.borderColor ='pink'
            thinagain.style.marginTop='150px'
            thinagain.style.marginRight='100px'
            thinagain.style.color='green'
            
            thinagain.textContent ='Let me think again'
            document.body.appendChild(thinagain);

            const quit =document.createElement('button');
            quit.style.padding = '30px'
            quit.style.backgroundColor = 'white'
            quit.style.opacity ='5px'
            quit.style.borderRadius = '10px'
            quit.style.borderColor ='pink'
            quit.style.marginTop='150px'
            quit.style.marginRight='100px'
            quit.style.color='red'

            
            quit.textContent ='I wanna leave'
            document.body.appendChild(quit);
    
             const newaimg =document.createElement('img');
    
             newaimg.src='enerve.jpg'
             newaimg.height ='500'
             newaimg.width ='500'
             newaimg.style.marginTop='200px'
             document.body.appendChild(newaimg);

             thinagain.addEventListener('click', ()=>{
                window.location.replace('continue.html')
            });
            quit.addEventListener('click', ()=>{
                window.location.replace('quit.html')
            });
            
            
    });
    yesbtn.addEventListener('click',()=>{
        //alert('i exist yes')
        const newtext = 'OMG, Here is your chocolate, Happy Valentine !'
        textvalentin.textContent = newtext;
        textvalentin.style.color = 'red';

        valnetinqst.style.display='none'
        noBtn.style.display='none'
        yesbtn.style.display='none'

         const newimg =document.createElement('img');

         newimg.src='chocolatvalentine.jpg'
         newimg.height ='500'
         newimg.width ='500'
         newimg.style.marginTop='200px'
         document.body.appendChild(newimg);

    });
    
   
});

