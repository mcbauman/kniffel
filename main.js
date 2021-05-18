// Würfelfelder
    //Variable
        let count = 0;
        const actWurf = document.getElementById("Wurf");
        let wurfel1 = document.getElementById("Wurfel1");
        let wurfel2 = document.getElementById("Wurfel2");
        let wurfel3 = document.getElementById("Wurfel3");
        let wurfel4 = document.getElementById("Wurfel4");
        let wurfel5 = document.getElementById("Wurfel5");
        const cb1 = document.getElementById("WurfSichern1");
        const cb2 = document.getElementById("WurfSichern2");
        const cb3 = document.getElementById("WurfSichern3");
        const cb4 = document.getElementById("WurfSichern4");
        const cb5 = document.getElementById("WurfSichern5");

        var val1 = 0;
        var val2 = 0;
        var val3 = 0;
        var val4 = 0;
        var val5 = 0;
        let array = [];

        let w1;
        let w2;
        let w3;
        let w4;
        let w5;
        let w6;

    //Würfeln Funktion
        actWurf.addEventListener("click", function(){
        if(count>2){alert("Bitte erst setzten");}else{
        if(cb1.checked){}else{val1 = (Math.ceil(Math.random()*6));};
        if(cb2.checked){}else{val2 = (Math.ceil(Math.random()*6));};
        if(cb3.checked){}else{val3 = (Math.ceil(Math.random()*6));};
        if(cb4.checked){}else{val4 = (Math.ceil(Math.random()*6));};
        if(cb5.checked){}else{val5 = (Math.ceil(Math.random()*6));};
        count++;
        array=[val1, val2, val3, val4, val5];}

        

    //Ergebnis zeigen
        wurfel1.textContent = val1;
        wurfel2.textContent = val2;
        wurfel3.textContent = val3;
        wurfel4.textContent = val4;
        wurfel5.textContent = val5;
        return(array);
        });

// Ergebnistabelle gleiche Nummern
    //variablen
        let einer = document.getElementById("wertEiner");
        let zweier = document.getElementById("wertZweier");
        let dreier = document.getElementById("wertDreier");
        let vierer = document.getElementById("wertVierer");
        let fuenfer = document.getElementById("wertFuenfer");
        let sechser = document.getElementById("wertSechser");
        

        const set1 = document.getElementById("setze1");
        const set2 = document.getElementById("setze2");
        const set3 = document.getElementById("setze3");
        const set4 = document.getElementById("setze4");
        const set5 = document.getElementById("setze5");
        const set6 = document.getElementById("setze6");
        var sumValEx=0
    // const array = [val1, val2, val3, val4, val5, val6]

    //Unter-Funktion

    function unset(){
        cb1.checked=false;
        cb2.checked=false;
        cb3.checked=false;
        cb4.checked=false;
        cb5.checked=false;
        wurfel1.textContent="-";
        wurfel2.textContent="-";
        wurfel3.textContent="-";
        wurfel4.textContent="-";
        wurfel5.textContent="-";
        count=0;
        val1=0;val2=0;val3=0;val4=0;val5=0;
        array=[0,0,0,0,0];
    }

    //Funktionen

     set1.addEventListener("click", function(){
        if(w1>=0){alert("nicht Schummeltn! Einer hast Du schon")}else{
        sumValEx=0;
        let n=1;
        if(val1==n){sumValEx +=n}else{sumValEx};
        if(val2==n){sumValEx +=n}else{sumValEx};
        if(val3==n){sumValEx +=n}else{sumValEx};
        if(val4==n){sumValEx +=n}else{sumValEx};
        if(val5==n){sumValEx +=n}else{sumValEx};
         einer.textContent = sumValEx;
         w1 = sumValEx;
        if(sumValEx<(n*3)){einer.style.color = "lightcoral";}
        else if(sumValEx==(n*3)){einer.style.color="white";}
        else if(sumValEx >= (n*4)){einer.style.color="lightgreen";}
        ;
        unset();
     }});

    set2.addEventListener("click", function(){
        if(w2>=0){alert("nicht Schummeltn! Zweier hast Du schon")}else{
        sumValEx=0;
        let n=2;
        if(val1==n){sumValEx +=n}else{sumValEx};
        if(val2==n){sumValEx +=n}else{sumValEx};
        if(val3==n){sumValEx +=n}else{sumValEx};
        if(val4==n){sumValEx +=n}else{sumValEx};
        if(val5==n){sumValEx +=n}else{sumValEx};
         zweier.textContent = sumValEx;
         w2 = sumValEx;
         if(sumValEx<(n*3)){zweier.style.color = "lightcoral";}
         else if(sumValEx==(n*3)){zweier.style.color="white";}
         else if(sumValEx >= (n*4)){zweier.style.color="lightgreen";}
         unset();
    }});

     set3.addEventListener("click", function(){
        if(w3>=0){alert("nicht Schummeltn! Dreier hast Du schon")}else{
        sumValEx=0;
        let n=3
        if(val1==n){sumValEx +=n}else{sumValEx};
        if(val2==n){sumValEx +=n}else{sumValEx};
        if(val3==n){sumValEx +=n}else{sumValEx};
        if(val4==n){sumValEx +=n}else{sumValEx};
        if(val5==n){sumValEx +=n}else{sumValEx};
         dreier.textContent = sumValEx;
         w3 = sumValEx;
         if(sumValEx<(n*3)){dreier.style.color = "lightcoral";}
         else if(sumValEx==(n*3)){dreier.style.color="white";}
         else if(sumValEx >= (n*4)){dreier.style.color="lightgreen";}
         unset();
     }});

     set4.addEventListener("click", function(){
        if(w4>=0){alert("nicht Schummeltn! Vierer hast Du schon")}else{
        sumValEx=0;
        let n=4;
        if(val1==n){sumValEx +=n}else{sumValEx};
        if(val2==n){sumValEx +=n}else{sumValEx};
        if(val3==n){sumValEx +=n}else{sumValEx};
        if(val4==n){sumValEx +=n}else{sumValEx};
        if(val5==n){sumValEx +=n}else{sumValEx};
         vierer.textContent = sumValEx;
         w4 = sumValEx;
         if(sumValEx<(n*3)){vierer.style.color = "lightcoral";}
         else if(sumValEx==(n*3)){vierer.style.color="white";}
         else if(sumValEx >= (n*4)){vierer.style.color="lightgreen";}
         unset();
     }});

     set5.addEventListener("click", function(){
        if(w5>=0){alert("nicht Schummeltn! Fünfer hast Du schon")}else{
        sumValEx=0;
        let n=5;
        if(val1==n){sumValEx +=n}else{sumValEx};
        if(val2==n){sumValEx +=n}else{sumValEx};
        if(val3==n){sumValEx +=n}else{sumValEx};
        if(val4==n){sumValEx +=n}else{sumValEx};
        if(val5==n){sumValEx +=n}else{sumValEx};
         fuenfer.textContent = sumValEx;
         w5 = sumValEx;
         if(sumValEx<(n*3)){fuenfer.style.color = "lightcoral";}
         else if(sumValEx==(n*3)){fuenfer.style.color="white";}
         else if(sumValEx >= (n*4)){fuenfer.style.color="lightgreen";}
         unset();
     }});

     set6.addEventListener("click", function(){
        if(w6>=0){alert("nicht Schummeltn! Sechser hast Du schon")}else{
        sumValEx=0;
        let n=6;
        if(val1==n){sumValEx +=n}else{sumValEx};
        if(val2==n){sumValEx +=n}else{sumValEx};
        if(val3==n){sumValEx +=n}else{sumValEx};
        if(val4==n){sumValEx +=n}else{sumValEx};
        if(val5==n){sumValEx +=n}else{sumValEx};
         sechser.textContent = sumValEx;
         w6 = sumValEx;
         if(sumValEx<(n*3)){sechser.style.color = "lightcoral";}
         else if(sumValEx==(n*3)){sechser.style.color="white";}
         else if(sumValEx >= (n*4)){sechser.style.color="lightgreen";}
         unset();
     }});

// Ergebnistabelle besondere Konstellationen
     //Variablen
        let p3 = document.getElementById("wert3Pasch");
        let p4 = document.getElementById("wert4Pasch");
        let klStr = document.getElementById("wertKlStr");
        let grStr = document.getElementById("wertGrStr");
        let fH = document.getElementById("wertFH");
        let Kniffel = document.getElementById("wertKniffel");
        let chance = document.getElementById("wertChance");

        const set3p = document.getElementById("setze3p");
        const skip3p = document.getElementById("streiche3p");
        const set4p = document.getElementById("setze4p");
        const skip4p = document.getElementById("streiche4p");
        const setKlStr = document.getElementById("setzeKlStr");
        const setGrStr = document.getElementById("setzeGrStr");
        const setFH = document.getElementById("setzeFH");
        const skipFH = document.getElementById("streicheFH");
        const setKniffel = document.getElementById("setzeKniffel");
        const setChance = document.getElementById("setzeChance");

        let w3p;
        let w4p;
        let wks;
        let wgs;
        let wfh;
        let wk;
        let wc;

     //Funktionen
     set3p.addEventListener("click", function(){
        if(w3p>=0){alert("nicht Schummeltn! 3er-Pasch hast Du schon")}else{
        sumValEx=val1+val2+val3+val4+val5;
         p3.textContent = sumValEx;
         w3p=sumValEx;
        if(sumValEx>20){p3.style.color="lightgreen";}
        else if(sumValEx<10){p3.style.color="lightcoral";}
        else{p3.style.color="white";};
        unset();
     }});

    skip3p.addEventListener("click", function(){
        sumValEx=0;
            p3.textContent = sumValEx;
            w3p=sumValEx;
            if(sumValEx>20){p3.style.color="lightgreen";}
            else if(sumValEx<10){p3.style.color="lightcoral";}
            else{p3.style.color="white";};
            unset();
        });

    set4p.addEventListener("click", function(){
        if(w4p>=0){alert("nicht Schummeltn! 4er-Pasch hast Du schon")}else{
        sumValEx=val1+val2+val3+val4+val5;
            p4.textContent = sumValEx;
            w4p=sumValEx;
            if(sumValEx>20){p4.style.color="lightgreen";}
            else if(sumValEx<10){p4.style.color="lightcoral";}
            else{p4.style.color="white";};
            unset();
    }});

    skip4p.addEventListener("click", function(){
        sumValEx=0;
            p4.textContent = sumValEx;
            w4p=sumValEx;
            if(sumValEx>20){p4.style.color="lightgreen";}
            else if(sumValEx<10){p4.style.color="lightcoral";}
            else{p4.style.color="white";};
            unset();
        });

    setKlStr.addEventListener("click", function(){
        if(wks>=0){alert("nicht Schummeltn! Kleine Straße hast Du schon")}else{
        if(array.includes(3)&&array.includes(4)&&(array.includes(2)&&array.includes(5)||array.includes(1)&&array.includes(2)||array.includes(5)&&array.includes(6)))
        {sumValEx=30;}else{sumValEx=0};

        klStr.textContent = sumValEx;
        wks=sumValEx;
        if(sumValEx>20){klStr.style.color="lightgreen";}
        else if(sumValEx<10){klStr.style.color="lightcoral";}
        else{klStr.style.color="white";};
        unset();
            
    }});

    setGrStr.addEventListener("click", function(){
        if(wgs>=0){alert("nicht Schummeltn! große Straße hast Du schon")}else{
        if(array.includes(2)&&array.includes(3)&&array.includes(4)&&array.includes(5)&&(array.includes(1)||array.includes(6))){sumValEx=40}else{sumValEx=0};

        grStr.textContent = sumValEx;
        wgs=sumValEx;
        if(sumValEx>20){grStr.style.color="lightgreen";}
        else if(sumValEx<10){grStr.style.color="lightcoral";}
        else{grStr.style.color="white";};
        unset();
    }});

    setFH.addEventListener("click", function(){
        if(wfh>=0){alert("nicht Schummeltn! Fullhouse hast Du schon")}else{
        sumValEx=25;
            fH.textContent = sumValEx;
            wfh=sumValEx;
            if(sumValEx>20){fH.style.color="lightgreen";}
            else if(sumValEx<10){fH.style.color="lightcoral";}
            else{fH.style.color="white";};
            unset();
    }});

    skipFH.addEventListener("click", function(){
        sumValEx=0;
            fH.textContent = sumValEx;
            wfh=sumValEx;
            if(sumValEx>20){fH.style.color="lightgreen";}
            else if(sumValEx<10){fH.style.color="lightcoral";}
            else{fH.style.color="white";};
            unset();
        });

     setKniffel.addEventListener("click", function(){
        if(wk>=0){alert("nicht Schummeltn! Kniffel hast Du schon")}else{
        sumValEx=0;
        if(val1==val2&&val2==val3&&val3==val4&&val4==val5&&val1>0){sumValEx=50}else{sumValEx=0};
         Kniffel.textContent = sumValEx;
         wk=sumValEx;
         if(sumValEx>20){Kniffel.style.color="lightgreen";}
            else if(sumValEx<10){Kniffel.style.color="lightcoral";}
            else{Kniffel.style.color="white";};
            unset();
     }});

    setChance.addEventListener("click", function(){
        if(wc>=0){alert("nicht Schummeltn! Chance hast Du schon")}else{
        sumValEx=val1+val2+val3+val4+val5;
            chance.textContent = sumValEx;
            wc=sumValEx;
            if(sumValEx>20){chance.style.color="lightgreen";}
            else if(sumValEx<10){chance.style.color="lightcoral";}
            else{chance.style.color="white";};
            unset();
    }});

//Ergebnis Berechnen
    //Variablen

    const calculate1 = document.getElementById("calculate1");
    const calculate2 = document.getElementById("calculate2");
    let punkteOben = document.getElementById("punkteOben");
    let punkteUnten = document.getElementById("punkteUnten");
    let bonus = document.getElementById("bonus");
    let summeOben = document.getElementById("summeOben");
    let summeObenK = document.getElementById("punkteObenKopie");
    let summeUnten = document.getElementById("summeUnten");
    let pOC;
    let sOC;
    let pUC;
    let sUC;

    //Function

    calculate1.addEventListener("click", function(){
        pOC = w1+w2+w3+w4+w5+w6;
        punkteOben.textContent =pOC;
        if(pOC>=63){bonus.textContent=35;sOC=pOC+35;}else{bonus.textContent=0; sOC=pOC}
        summeOben.textContent=sOC;
    });

    calculate2.addEventListener("click", function(){
        pUC=w3p+w4p+wks+wgs+wfh+wk+wc;
        punkteUnten.textContent=pUC;
        sUC=pUC+sOC;
        summeObenK.textContent=sOC;
        summeUnten.textContent=sUC;
        });


//Testarea

// function countN(arr){
// let count1=0;
// for (var i=0; i<5; i++){
//     if(array[i] ==arr)
//     count1++;
//     return count1;
// }}


// const array2 = [1,2,3,4,5];
// var array3 = [];
//     var countN=0;
//     for(var n=1;n<7;n++){
//         for(var i=0; i<5;i++){
//             array3.push()

//            if(array2[i]==n){countN++}
//            array3.push(countN[n])};
//     };
// console.log(array2);
// console.log(countN);
// console.log(array3);

// let countN=0;
// let array3=[];
// const array2 = [1,2,1,4,1];
// for(var n=1; n<7; n++){
// for(var i=0; i<5;i++){
//     if(array2[i]==n)
//     countN++;}
// array3.push(countN[n])};
// console.log(array3);

// let countN=0;
// let array3=[];
// const array2 = [1,2,1,4,1];
// for(var n=1; n<7; n++){
// for(var i=0; i<5;i++){
// if(array2[i]==n)
// array3.push(countN[n]++)
// }};
// console.log(array3)
