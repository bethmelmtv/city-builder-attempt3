// import functions and grab DOM elements
const waterDropDown = document.getElementById('waterDropDown');
const castleDropdown = document.getElementById('castleDropDown');
const skylineDropdown = document.getElementById('skylineDropdown');

/*const waterCountEl = document.getElementById('waterCount');
const skyLineCountEl = document.getElementById('skylineCount');
const castleCountEl = document.getElementById('castleCount');*/

const countStatusMessage = document.querySelector('.count-status-message');

const waterImg = document.getElementById('waterImg');
const skylineImg = document.getElementById('skylineImg');
const castleImg = document.getElementById('castleImg');

const sloganButton = document.getElementById('slogan-button');
const sloganInput = document.getElementById('slogan-input');

const slogansEl = document.querySelector('.slogans');

 
const cityNameDisplay = document.getElementById('user-city-name');
/*const welcomeToMessage = document.querySelector('.welcomeToMessage');*/
/*const userCityName = document.getElementById('user-city-name');*/

const WelcomeMessage = document.getElementById('Welcome-Message');

// let state
let waterCount = 0;
let skyLineCount = 0;
let castleCount = 0;
let slogans = [];

//is line 16-18 referring to html elements in 69 and 70?

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


/*cityNameDisplay.addEventListener('change', () => {
    let cityChosen = userCityName.value;
    cityNameDisplay.textContent = `Welcome to ${cityChosen}`;
}); */


cityNameDisplay.addEventListener('change', () => {
  // as a city is being typed into the city name, update the welcome message
    const chosenCity = cityNameDisplay.value;
    WelcomeMessage.textContent = `Welcome to ${chosenCity}`;
});


//water dropdown


waterDropDown.addEventListener('change', () => {
    const water = waterDropDown.value; // gets the value of which water image
  //when select water drop is selected, change water picture 
    waterImg.src = `./assets/water-${water}.jpg`;
    waterCount ++;
    displayCountStats(); 
});


castleDropdown.addEventListener('change', () => {
    const castle = castleDropdown.value;
    castleImg.src = `./assets/castle-${castle}.jpg`;
    castleCount ++;
    displayCountStats(); 
});

skylineDropdown.addEventListener('change', () => {
    const skyline = skylineDropdown.value;
    skylineImg.src = `./assets/skyline-${skyline}.jpg`;
    skyLineCount ++;
    displayCountStats(); 
});


sloganButton.addEventListener('click', () => {
    const newSlogan = sloganInput.value;
    slogans.push(newSlogan);
    displaySlogans();
    sloganInput.value = '';
});


function displaySlogans() {
    slogansEl.textContent = '';
    for (let slogan of slogans) {
        const pTag = document.createElement('p');
        pTag.classList.add('slogan');
        pTag.textContent = slogan;
        slogansEl.append(pTag);
    }
}

function displayCountStats() {
    countStatusMessage.textContent = `You changed the water ${waterCount} times, the skyline
    times ${skyLineCount} and the castle image ${castleCount} times.`;
}


//pushing