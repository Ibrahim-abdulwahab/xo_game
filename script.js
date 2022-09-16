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

        
    
})