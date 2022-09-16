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
    const scoreboard=document.getElementById("score");
    let i=0;

    const playerorder=x=>{
        if (i%2==0){
            playerturn="card-red"
        }
        else{
            playerturn="card-yellow"
        }
        x.className=playerturn;
        i=i+1;
    }
        const card1click = () =>{
           playerorder(card1)
        }
        
        card1.addEventListener("click",card1click)

        const card2click = () =>{
           playerorder(card2)
        }
        
        card2.addEventListener("click",card2click)

        const card3click = () =>{
            playerorder(card3)
         }
         
         card3.addEventListener("click",card3click)

         const card4click = () =>{
            playerorder(card4)
         }
         
         card4.addEventListener("click",card4click)

         const card5click = () =>{
            playerorder(card5)
         }
         
         card5.addEventListener("click",card5click)

         const card6click = () =>{
            playerorder(card6)
         }
         
         card6.addEventListener("click",card6click)

         const card7click = () =>{
            playerorder(card7)
         }
         
         card7.addEventListener("click",card7click)

         const card8click = () =>{
            playerorder(card8)
         }
         
         card8.addEventListener("click",card8click)

         const card9click = () =>{
            playerorder(card9)
         }
         
         card9.addEventListener("click",card9click)

        
    
})