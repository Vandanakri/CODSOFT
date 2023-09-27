let result = document.getElementById("inputext");
let clear = document.querySelector(".clear");
let dataDelete = document.querySelector(".dataDelete");
let number = document.querySelectorAll("data")

let data  = (number)  => {
  result.value += number;
}

let Result = () => {
  try {
    result.value = eval(result.value)
  }
  catch(err) {
    alert("Please enter a valid input")
  }
}

function deleteFn() {
  result.value = result.value.slice(0, -1);
}

function clearFn() {
  result.value = "";
}

clear.addEventListener("click", clearFn);
dataDelete.addEventListener("click", deleteFn)

