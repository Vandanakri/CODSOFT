var numbers = document.querySelectorAll("num")
let result = document.getElementById("input");
let clearIt = document.querySelector(".clear")

let data = (number) => {
  result.value += number
}
let Result = () => {
  try {
    result.value = eval(result.value)
  }
  catch(err) {
    alert("Please enter a valid input")
  }
}

function clearNum(){
result.value = "";
}

clearIt.addEventListener("click", clearNum);