const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const start = document.getElementById('start');
const puntos = document.getElementById('puntos');
let random;
let alive = true;
let continueGame = false;
let forcount = 0;
let counter = [];
let points = 0;
let click = 0;

function setRandom() {
    random = Math.floor(Math.random() * (5 - 1) + 1);
}

function ani(element) {
    element.animate([
        {opacity: '1'},
        {opacity: '0.5'}
    ], {
        duration: 500,
    })
}

function execute() {
    if (alive) {
        setRandom();
        for (let i = 0; i < counter.length; i++) {
            const element = counter[i];
            if (element === 1) {
                continueGame = false;
                setTimeout(() => {ani(one);}, (i * 1000))
            }
            else if (element === 2) {
                continueGame = false;
                setTimeout(() => {ani(two);}, (i * 1000))
            }
            else if (element === 3) {
                continueGame = false;
                setTimeout(() => {ani(three);}, (i * 1000))
            }
            else if (element === 4) {
                continueGame = false;
                setTimeout(() => {ani(four);}, (i * 1000))
            }
            forcount++
        }
        if (random === 1 && forcount === counter.length) {
            forcount = 0;
            setTimeout(() => {continueGame = true; ani(one);}, ((counter.length) * 1000));
            counter.push(random);
        }
        else if (random === 2 && forcount === counter.length) {
            forcount = 0;
            setTimeout(() => {continueGame = true; ani(two);}, ((counter.length) * 1000));
            counter.push(random);
        }
        else if (random === 3 && forcount === counter.length) {
            forcount = 0;
            setTimeout(() => {continueGame = true; ani(three);}, ((counter.length) * 1000));
            counter.push(random);
        }
        else if (random === 4 && forcount === counter.length) {
            forcount = 0;
            setTimeout(() => {continueGame = true; ani(four);}, ((counter.length) * 1000));
            counter.push(random);
        }
    }
}
if (alive) {
    one.onclick = () => {
        if (counter[click] === 1 && alive && continueGame) {
            points++;
            puntos.innerHTML = 'tus puntos son: ' + points;
            var next = click + 1;
            if (next === counter.length) {
                continueGame = false;
                setTimeout(() => {execute();}, 1000);
                click = 0;
            } else {
                click++;
            }
        } else {
            alive = false;
            puntos.innerHTML = 'perdiste'
        }
    }

    two.onclick = () => {
        if (counter[click] === 2 && alive && continueGame) {
            points++;
            puntos.innerHTML = 'tus puntos son: ' + points;
            var next = click + 1;
            if (next === counter.length) {
                continueGame = false;
                setTimeout(() => {execute();}, 1000);
                click = 0;
            } else {
                click++
            }
        } else {
            alive = false;
            puntos.innerHTML = 'perdiste'
        }
    }

    three.onclick = () => {
        if (counter[click] === 3 && alive && continueGame) {
            points++;
            puntos.innerHTML = 'tus puntos son: ' + points;
            var next = click + 1;
            if (next === counter.length) {
                continueGame = false;
                setTimeout(() => {execute();}, 1000);
                click = 0;
            } else {
                click++
            }
        } else {
            alive = false;
            puntos.innerHTML = 'perdiste'
        }
    }

    four.onclick = () => {
        if (counter[click] === 4 && alive && continueGame) {
            points++;
            puntos.innerHTML = 'tus puntos son: ' + points;
            var next = click + 1;
            if (next === counter.length) {
                continueGame = false;
                setTimeout(() => {execute();}, 1000);
                click = 0;
            } else {
                click++
            }
        } else {
            alive = false;
            puntos.innerHTML = 'perdiste'
        }
    }
}

start.onclick = () => {
    counter = [];
    points = 0;
    click = 0;
    alive = true;
    continueGame = false;
    execute()
}