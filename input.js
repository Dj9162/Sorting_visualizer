

function generateRandomArray(length, min, max) {
    let randomArray = [];
    for (var i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
    return randomArray;
}



function animateSoundBars() {
  let soundBars = document.getElementsByClassName('innerDiv');
  for (let i = 0; i < soundBars.length; i++) {
    let delay = i * 10;
    animateIndividualSoundBar(soundBars[i], delay);
  }
}

function animateIndividualSoundBar(soundBar, delay) {
  let min=20,max=300;
  setInterval(() => {
    let height = Math.floor(Math.random() * (max - min + 1)) + min; // Generate a random height for the sound bar
    soundBar.style.height = `${height}px`;
  }, 50 + delay); // Adjust the interval timing as needed
}

function createBars(arr){
  let parentDivbox2 = document.getElementById('box2');
    while (parentDivbox2.firstChild) {
      parentDivbox2.removeChild(parentDivbox2.firstChild);
    }
    for (let i = 0; i < arr.length; i++) {
      let innerDiv = document.createElement('div');
      innerDiv.style.height = `${arr[i] * 2}px`;
      innerDiv.style.backgroundColor = '#00FF00';
      innerDiv.setAttribute('id', `elem${i}`);
      innerDiv.classList.add("innerDiv");
      parentDivbox2.appendChild(innerDiv);
    }
}



export {generateRandomArray};
export{createBars};
export {animateSoundBars};