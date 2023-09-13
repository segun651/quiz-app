  let questions = [
     {
        question : " Who won the ballon d'or in the year 2018.",
         option1 :  "A. Cristiano Ronaldo",
          option2 :  "B. Lionel Messi",
           option3 :  "C. Luka Modric",
            option4 :  "D. Eden Hazard",
            answer : "C. Luka Modric"
     },

          {
        question : " Who won the golden boot in 2010 world cup.",
         option1 :  "A. Diego Forlan",
          option2 :  "B. Lionel Messi",
           option3 :  "C. Andres Iniesta",
            option4 :  "D. Xavi Hernandez",
            answer : "A. Diego Forlan"
     },

               {
        question : " Which team  has the highest number of champions league.",
         option1 :  "A. Arsenal",
          option2 :  "B. Man utd",
           option3 :  "C. Liverpool",
            option4 :  "D. Real Madrid",
            answer : "D. Real Madrid"
     },
               {
        question : " Which team won the 1999 champions league",
         option1 :  "A. Barcelona",
          option2 :  "B. Arsenal",
           option3 :  "C. Real Madrid",
            option4 :  "D. Man utd",
            answer : "D. Man utd"
     },
               {
        question : " Which footballer has the record of most headed goals",
         option1 :  "A. Cristiano Ronaldo",
          option2 :  "B. Lionel Messi",
           option3 :  "C. Pedro",
            option4 :  "D. Eden Hazard",
            answer : "A. Cristiano Ronaldo"
     },
              {
        question : " Who scored the only goal in the 2014 world cup final.",
         option1 :  "A. Cristiano Ronaldo",
          option2 :  "B. Mario Gotze",
           option3 :  "C. Mascherano",
            option4 :  "D. Thomas Muller",
            answer : "B. Mario Gotze"
     },
               {
        question : " Which player scored the fastest hat-trick in the Premier League.",
         option1 :  "A. Cristiano Ronaldo",
          option2 :  "B. Sadio Mane",
           option3 :  "C. Luka Modric",
            option4 :  "D. Erling Haaland",
            answer : "B. Sadio Mane"
     },
               {
        question : " Which team won the first Premier League title.",
         option1 :  "A. Manchester United",
          option2 :  "B.Arsenal",
           option3 :  "C. Chelsea",
            option4 :  "D.Liverpool",
            answer: "A. Manchester United"

     },
               {
        question : " With 202 clean sheets, which goalkeeper has the best record in the Premier League.",
         option1 :  "A. David De Gea",
          option2 :  "B. Alison Becker",
           option3 :  "C. Petr Cech",
            option4 :  "D.Peter Schemchiel",
            answer: "C. Petr Cech"
     },
     {
        question : "Which country won the first ever World Cup in 1930.",
         option1 :  "A. Brazil",
          option2 :  "B. Argentina",
           option3 :  "C.France",
            option4 :  "D.Uruguay",
            answer: "D.Uruguay"
     },
     {
        question : "Which club is associated with 'Galacticos'.",
         option1 :  "A. Brazil",
          option2 :  "B.Real Madrid",
           option3 :  "C. Barcelona",
            option4 :  "D.AC Milan",
            answer: "B.Real Madrid"
     }, 
     {
       question : " With 365 goals, who holds the record for top Bundesliga goalscorer of all time.",
        option1 :  "A. Marco Reus",
         option2 :  "B. Robert Lewandowski",
          option3 :  "C. Gerd Muller",
           option4 :  "D.Thomas Muller",
           answer: "C. Gerd Muller"
    }, 
    {
       question : " Who is the only player to win the Champions League with three different clubs.",
        option1 :  "A. Ronaldinho",
         option2 :  "B. Steven Gerrad",
          option3 :  "C. Cristiano Ronaldo",
           option4 :  "D.Clarence Seedorf",
           answer: "D.Clarence Seedorf"
    }, 
    {
       question : "Which player holds the record for most Champions League winners' medals.",
        option1 :  "A. Francisco Gento",
         option2 :  "B.Cristiano Ronaldo",
          option3 :  "C. Lionel Messsi",
           option4 :  "D.Zinedine Zidane",
           answer : "A. Francisco Gento"
    }, 
    {
       question : "Ronaldo helped Portugal win the European Championship in which year.",
        option1 :  "A.2014",
         option2 :  "B. 2012",
          option3 :  "C. 2016",
           option4 :  "D.2009",
           answer:  "C. 2016"
    }, 
    {
       question : "Which manager was famously said to have given players 'the Hairdryer Treatment'",
        option1 :  "A.Sir Alex Ferguson",
         option2 :  "B. Sir Bobby Charlton",
          option3 :  "C. Pep Guardiola",
           option4 :  "D.Carlo Ancelloti",
           answer:   "A.Sir Alex Ferguson"
    }, 
    {
       question : "Which club is sometimes referred to as FC Hollywood",
        option1 :  "A.Arsenal",
         option2 :  "B.Al Hilal",
          option3 :  "C. Bayern Munich",
           option4 :  "D.Liverpool",
           answer:   "C. Bayern Munich"
    }, 
]
let scores = 0 
    
  let currentMenu =  0
  let question = document.getElementById("question")
  let Option1 = document.getElementById("Option1")
  let Option2 = document.getElementById("Option2")
  let Option3 = document.getElementById("Option3")
  let Option4 = document.getElementById("Option4")
   let score = document.getElementById("score")
    window.onload = ()=> {
      
         Loaded(currentMenu)
      
    
    }
   function Loaded() {
         let quest = questions[currentMenu]
         question.innerHTML = quest.question
          Option1.innerHTML = quest.option1
          Option2.innerHTML = quest.option2
          Option3.innerHTML = quest.option3
          Option4.innerHTML = quest.option4

         
       }
let namevalue = document.querySelector(".name")
 let storage =  JSON.parse(localStorage.getItem("values"))
       let scorevalue = document.querySelector(".scorevalue")
       let win = document.querySelector(".win") 
       let lose = document.querySelector(".lose")
       function Win() {
              win.style.transform = "translateY(0%)"
              scorevalue.innerHTML = `${scores}`
              namevalue.innerHTML = `${storage}`
          }
              function Lose() {
                lose.style.transform = "translateY(-0%)"
                scorevalue.innerHTML = `${scores}`
                namevalue.innerHTML = `${storage}`
              }    
          
   let modals = document.getElementsByTagName("li")
   for(i=0; i<modals.length; i++) {
   
   modals[i].addEventListener("click", filters)


   }

     

function filters(e) {
       
   if(e.target.innerHTML == questions[currentMenu].answer)   {

     green = e.target.style.backgroundColor  = "green"

            if (green) {
              scores += 5
              score.innerHTML = `${scores}`
              let sound = document.createElement("audio")
              sound.autoplay = true
              let source = document.createElement("source")
              source.src = "mixkit-classic-click-1117.wav"
              sound.appendChild(source)
            }
  setTimeout( ()=>{
       currentMenu++
       e.target.style.backgroundColor = "black"

                     if(currentMenu>questions.length-1) {
                        setTimeout(Win,1000)
                     }
                        Loaded(currentMenu)
  } ,500)
     
   }
   else {
       let sound = document.createElement("audio")
       sound.autoplay = true
       let source = document.createElement("source")
       source.src = "mixkit-negative-tone-interface-tap-2569.wav"
       sound.appendChild(source)
       e.target.style.backgroundColor = "red"
       setTimeout(Lose,300)
           
    console.log( e.target.style.backgroundColor 
    )
   }
   

  
}
 
 

   