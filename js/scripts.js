const games = document.getElementById('game-container');

const gameDiv = games.children;
const buyMulti = document.getElementById('MultiButtons');
const buyMultiList = document.getElementById('buyMulti');
const multiButtons = buyMultiList.children;
let activeMulti = 1;
const buttons = document.getElementsByTagName('button');
const lemonadeDiv = gameDiv[0];
const slushieDiv = gameDiv[1];
const coffeeDiv = gameDiv[2];
const owned = document.getElementsByClassName('owned');
const earnings = document.getElementsByClassName('earnings');
const multiplier = document.getElementsByClassName('multiplier');
const cost = document.getElementsByClassName('cost');
const time = document.getElementsByClassName('time');
let cash = 20;
const totalCash = document.getElementById('total-money');
totalCash.innerText = cash;



games.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        const bus = e.target.className;
        if (bus === "lemonade") {
            lemonade.buyBusiness(activeMulti);
            changeCosts(activeMulti);
        } else if (bus === "slushie") {
            slushie.buyBusiness(activeMulti);
            changeCosts(activeMulti);
        } else if (bus === "coffee") {
            coffee.buyBusiness(activeMulti);
            changeCosts(activeMulti);
        }        
    }
});

buyMulti.addEventListener('click', e => {
    for (let i = 0; i < multiButtons.length; i++) {
        multiButtons[i].id = "";
    }
    if(e.target.tagName === 'LI') {
        e.target.id = "active";
        activeMulti = parseInt(e.target.firstChild.innerText);
        changeCosts(activeMulti);
    } else if (e.target.tagName === 'A') {
        e.target.parentElement.id = "active";
        activeMulti = parseInt(e.target.innerText);   
        changeCosts(activeMulti);     
    }
});













//Lemonade

lemonade = new Business();
lemonade.id = 0;
lemonade.base = 1;
lemonade.baseTime = 1;
lemonade.countTime = lemonade.baseTime;
lemonade.costBase = 10;
lemonade.costCurrent = lemonade.costBase;
lemonade.costNewBase = Math.ceil(lemonade.costBase * 1.02); //11

owned[lemonade.id].innerText = lemonade.owned;
earnings[lemonade.id].innerText = lemonade.earnings;
multiplier[lemonade.id].innerText = lemonade.multiplier;
time[lemonade.id].innerText = lemonade.countTime;
cost[lemonade.id].innerText = lemonade.costBase;

//Slushie

slushie = new Business();
slushie.id = 1;
slushie.base = 20;
slushie.baseTime = 8;
slushie.countTime = slushie.baseTime;
slushie.costBase= 400;
slushie.costCurrent = slushie.costBase;
slushie.costNewBase = Math.ceil(slushie.costBase * 1.02); //408

owned[slushie.id].innerText = slushie.owned;
earnings[slushie.id].innerText = slushie.earnings;
multiplier[slushie.id].innerText = slushie.multiplier;
time[slushie.id].innerText = slushie.countTime;
cost[slushie.id].innerText = slushie.costBase;


//Coffee

coffee = new Business();
coffee.id = 2;
coffee.base = 400;
coffee.baseTime = 12;
coffee.countTime = coffee.baseTime;
coffee.costBase= 8000;
coffee.costCurrent = coffee.costBase;
coffee.costNewBase = Math.ceil(coffee.costBase * 1.02); //8160

owned[coffee.id].innerText = coffee.owned;
earnings[coffee.id].innerText = coffee.earnings;
multiplier[coffee.id].innerText = coffee.multiplier;
time[coffee.id].innerText = coffee.countTime;
cost[coffee.id].innerText = coffee.costBase;

// Functions
function changeCosts (multi) {
    lemonade.changeCost(multi);
    slushie.changeCost(multi);
    coffee.changeCost(multi);
}

function buyButton () {
    for (let i = 0; i < gameDiv.length; i++) {
        let bus = gameDiv[i].id;
        buttons[i].className = "";
        
        if (bus === "lemonade") {   
            if (lemonade.costCurrent <= cash) {
                buttons[0].className = "lemonade";
            } else {
                buttons[0].className = "lemonade not-active";
            }
        } else if (bus === "slushie") {
            if (slushie.costCurrent <= cash) {
                buttons[1].className = "slushie";
            } else {
                buttons[1].className = "slushie not-active";
            }
        } else if (bus === "coffee") {
            if (coffee.costCurrent <= cash) {
                buttons[2].className = "coffee";
            } else {
                buttons[2].className = "coffee not-active";
            }
        } 
    }
}
buyButton();

function updateScreen () {

    time[lemonade.id].innerText = lemonade.countTime;
    time[slushie.id].innerText = slushie.countTime;
    time[coffee.id].innerText = coffee.countTime;
    earnings[lemonade.id].innerText = lemonade.earnings;
    earnings[slushie.id].innerText = slushie.earnings;
    earnings[coffee.id].innerText = coffee.earnings;
    cost[lemonade.id].innerText = lemonade.costCurrent;
    cost[slushie.id].innerText = slushie.costCurrent;
    cost[coffee.id].innerText = coffee.costCurrent;
    
buyButton();
    
}

function incrementBus () {
    lemonade.earn();
    slushie.earn();
    coffee.earn();
    lemonade.increment();
    slushie.increment();
    coffee.increment();
}

// window.setInterval(lemonade.increment, 1000);
window.setInterval(incrementBus,1000);
window.setInterval(updateScreen, 1);
