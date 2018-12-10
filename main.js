// document.addEventListener("DOMContentLoaded", function(e) {
let clicks = 0;

function myFunction() {
  let limit = Number(document.getElementById("myText").value);
  document.getElementById("demo").innerHTML = "Limit set to " + limit;
}

//Count Up and Down

function clickUp() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
  checkLimit();
}

function clickDown() {
  clicks -= 1;
  document.getElementById("clicks").innerHTML = clicks;
  checkLimit();
}

function checkLimit() {
  document.getElementById("clicks").innerHTML = clicks;
  let limit = Number(document.getElementById("myText").value);
  if (clicks >= limit) {
    console.log("true");
    document.getElementById("alert").innerHTML = "You've reached your goal of " + limit;
  }
}

// });
