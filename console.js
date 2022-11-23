
window.addEventListener("DOMContentLoaded", init);
// global error handler
window.addEventListener('error',()=>{
    console.log("saddly you have an error friend!");
})

// Run the init() function when the page has loaded
function init() {
    error_handler();
    TrackJS.track('Testing TrackJS!');
}

// validation error class
class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
  }
  

function error_handler(){
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        let output = document.querySelector('output');
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
        
        let operator = document.querySelector('#operator').value;
        try{
            output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
        }catch(err){
            throw err.message;
        }finally{
            if(isNaN(firstNum) || isNaN(secondNum)){
                output.innerHTML = "invalid input";
                throw new ValidationError;
            }
        }
    
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
    for(const btn of errorBtns){
        switch(btn.textContent) {
            case "Console Log":
              btn.addEventListener("click",()=>{
                console.log("Console Log Demo");
              })  
              break;
            case "Console Error":
              btn.addEventListener("click",()=>{
                console.error("Console Error Demo");
              })  
              break;
            case "Console Count":
              btn.addEventListener("click",()=>{
                console.count("Count Button");
              })  
              break;
            case "Console Warn":
              btn.addEventListener("click",()=>{
                console.warn("Console Warn Button");
              })  
              break;
            case "Console Assert":
              btn.addEventListener("click",()=>{
                console.assert(2===3, "{number 2, errorMsg: 'The number does not equal to 3'}");
              }) 
              break;
            case "Console Clear":
              btn.addEventListener("click",()=>{
                console.clear();
              }) 
              break;  
            case "Console Dir":
              btn.addEventListener("click",()=>{
                console.dir(btn);
              }) 
              break; 
            case "Console dirxml":
              btn.addEventListener("click",()=>{
                console.dirxml(btn);
              }) 
            break;
            case "Console Group Start":
              btn.addEventListener("click",()=>{
                console.group();
              }) 
            break;
            case "Console Group End":
              btn.addEventListener("click",()=>{
                console.groupEnd();
              }) 
            break;
            case "Console Table":
              btn.addEventListener("click",()=>{
                function Classes(name, num){
                    this.name = name;
                    this.num = num;
                  }
                  const cse110 = new Classes("Software Engineer", 110);
                  const cse130 = new Classes("Programming Language", 130);
                  const cse112 = new Classes("Advanced Software Engineer", 112);
                  
                  console.table([cse110, cse130, cse112]);
              }) 
            break;
            case "Start Timer":
              btn.addEventListener("click",()=>{
                console.time("Timer Button");
              }) 
            break;
            case "End Timer":
              btn.addEventListener("click",()=>{
                console.timeEnd("Timer Button");
              }) 
            break;
            case "Console Trace":
              btn.addEventListener("click",()=>{
                const handleButtonClick = () => { deep(); };
                const deep = () => { deeper(); };
                const deeper = () => { deepest(); };
                const deepest = () => { console.trace(); };
                handleButtonClick();
              }) 
            break;
            case "Trigger a Global Error":
              btn.addEventListener("click",()=>{
                ddd; // create error
              }) 
            break;
            default:
                console.log("button not exist");
        }
    }
}
