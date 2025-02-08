// Global variables
var resultParagraph = document.getElementById("result");
var random;
var range = 666;
var nextRandom = Math.floor(Math.random() * range + 1);



// Function to generate a random number
function generateRandom() {
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * range + 1);
    console.log(random);
    resultParagraph.innerHTML = random;
}

// Function for the higher button
function higher() {
    if ( nextRandom > random) {
        window.alert("✔Correct!");
      }
      else if (nextRandom < random) {
        window.alert("❌HAHAHAHA, you'er wrong!");
      }
      else {
        window.alert("🍀A coincidence happened! Lucky!");
      }
      generateRandom()
}

// Function for the lower button
function lower() {
    if (nextRandom < random) {
        window.alert("✔Correct!");
      }
      else if (nextRandom > random ) {
        window.alert("❌HAHAHAHA, you'er wrong!");
      }
      else {
        window.alert("🍀A coincidence happened! Lucky!");
      }
      generateRandom()
}

//Generate a number to start the game!
generateRandom(67);