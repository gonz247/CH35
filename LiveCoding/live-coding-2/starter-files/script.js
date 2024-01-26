//Gonzalo Piña
//me falto atencion al detalle ya que estaba usando = en lugar de => y tarde en darme cuenta
//no recordaba la syntaxis pero hice una busqueda rapida para recordar


// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

const answerSpace = document.getElementById("answer");
const answerButton = document.getElementById("button");
let answer;


 async function fetchAnswer() {
    
    fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => {
        answer = data.answer;
        answerSpace.innerHTML = answer;
    })

    setTimeout(() => {
        answerSpace.innerHTML = "";
      }, 3000);
    }

 answerButton.addEventListener("click", ()=>{
    fetchAnswer();
 })
