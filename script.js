window.addEventListener('load', function(){
    const card1=document.getElementById("card-one");
    const card2=document.getElementById("card-two");
    const card3=document.getElementById("card-three");
    const card4=document.getElementById("card-four");
    const card5=document.getElementById("card-five");
    const card6=document.getElementById("card-six");
    const card7=document.getElementById("card-seven");
    const card8=document.getElementById("card-eight");
    const card9=document.getElementById("card-nine");
    const redscore=document.getElementById("score-red");
    const yellowscore=document.getElementById("score-yellow");
    let i=1;
    let redpoint=1;
    let yellowpoint=1;
    let card1pressed=0;//cheat prevention
    let card2pressed=0;
    let card3pressed=0;
    let card4pressed=0;
    let card5pressed=0;
    let card6pressed=0;
    let card7pressed=0;
    let card8pressed=0;
    let card9pressed=0;
    const reset =()=>{
        i=1;
        card1.className="card";
        card2.className="card";
        card3.className="card";
        card4.className="card";
        card5.className="card";
        card6.className="card";
        card7.className="card";
        card8.className="card";
        card9.className="card";
        card1pressed=0;
        card2pressed=0;
        card3pressed=0;
        card4pressed=0;
        card5pressed=0;
        card6pressed=0;
        card7pressed=0;
        card8pressed=0;
        card9pressed=0;
    }

    const playerorder=x=>{
        if (i%2==0){
            playerturn="yellow"
        }
        else{
            playerturn="red"
        }
        x.className=playerturn;
        i=i+1;
        if (i===10){
            setTimeout(() => reset(), 1000);
        }
        if (i>=4){
            if((card1.className==playerturn && card2.className==playerturn && card3.className==playerturn)
            ||(card4.className==playerturn && card5.className==playerturn && card6.className==playerturn)
            || (card7.className==playerturn && card8.className==playerturn && card9.className==playerturn)
            || (card1.className==playerturn && card4.className==playerturn && card7.className==playerturn)
            || (card2.className==playerturn && card5.className==playerturn && card8.className==playerturn)
            || (card3.className==playerturn && card6.className==playerturn && card9.className==playerturn)
            || (card1.className==playerturn && card5.className==playerturn && card9.className==playerturn)
            || (card7.className==playerturn && card5.className==playerturn && card3.className==playerturn)){
                if (playerturn=="red"){
                    redscore.innerHTML=`red: ${redpoint}`;
                    redpoint=redpoint+1;
                    setTimeout(() => reset(), 500);
                }
                else{yellowscore.innerHTML=`yellow ${yellowpoint}`;
                    yellowpoint=yellowpoint+1;
                    setTimeout(() => reset(), 500);
                }
                
        }}
    }
        const card1click = () =>{
            if (card1pressed==0){
            playerorder(card1)
            card1pressed=1}
        }
        
        card1.addEventListener("click",card1click)

        const card2click = () =>{
            if (card2pressed==0){
           playerorder(card2)
           card2pressed=1}
        }
        
        card2.addEventListener("click",card2click)

        const card3click = () =>{
            if (card3pressed==0){
            playerorder(card3)
            card3pressed=1}
         }
         
         card3.addEventListener("click",card3click)

         const card4click = () =>{
            if (card4pressed==0){
            playerorder(card4)
            card4pressed=1}
         }
         
         card4.addEventListener("click",card4click)

         const card5click = () =>{
            if (card5pressed==0){
            playerorder(card5)
            card5pressed=1}
         }
         
         card5.addEventListener("click",card5click)

         const card6click = () =>{
            if (card6pressed==0){
            playerorder(card6)
            card6pressed=1}
         }
         
         card6.addEventListener("click",card6click)

         const card7click = () =>{
            if (card7pressed==0){
            playerorder(card7)
            card7pressed=1}
         }
         
         card7.addEventListener("click",card7click)

         const card8click = () =>{
            if (card8pressed==0){
            playerorder(card8)
            card8pressed=1}
         }
         
         card8.addEventListener("click",card8click)

         const card9click = () =>{
            if (card9pressed==0){
            playerorder(card9)
            card9pressed=1}
         }
         
         card9.addEventListener("click",card9click)

        
    
})