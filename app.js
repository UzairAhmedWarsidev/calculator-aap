var display = document.getElementById("display");


function appendToDisplay(input){
    display.value += input;


}

function clearDisplay(){
    display.value = ""

}


function calculate(){

    try{
        display.value = eval(display.value);

    }
    catch(error){
        display.value = "Error";

    }

}

// function deletechar() {
//     var input = document.getElementById("inputField");
//     input.value = input.value.slice(0, -1);
//   }

// function deletechar() {
//    var input =  display.value = slice(0, -1);

//    input.value



    // display.value = input.value.slice(0, -1);
    // input.value = input.value.slice(0, -1);
  

  function deletechar() {
    var input = display.value;
    display.value = input.slice(0, -1);
  }

//   function square() {
//     var input = display.value;
//     input.value = input.value * input.value;
//   }
  

function square() {
    var input = document.getElementById('display'); 
    input.value = input.value * input.value; }



    function squareRoot() {
        var input = document.getElementById('display'); // Assuming there is an element with id 'display'
        input.value = Math.sqrt(input.value); // Calculate the square root
    }
    