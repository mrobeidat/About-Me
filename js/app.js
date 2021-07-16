'use strict';




let username = prompt('please enter your name !');

alert('Nice to see you here ' + username);

let score = 0;


function q1() {


    let guess = prompt('is my middle name hasan?');
    guess = guess.toLowerCase();


    if (guess === 'yes' || guess === 'y') {
        console.log(guess);
        alert('smart person');
        score += 1;
    }
    else if (guess === 'no' || guess === 'n') {
        console.log(guess);
        alert('try to guess');
    } else {
        alert('please enter yes or no !' + '☹️');
    }

}

// q1();
console.log(q1);



function q2() {



    guess = prompt('am i 24 year old?');
    guess = guess.toLowerCase();


    if (guess === 'yes' || guess === 'y') {
        console.log(guess);
        alert('Great !' + username);
        score += 1;
    }
    else if (guess === 'no' || guess === 'n') {
        console.log(guess);
        alert('It\'s fine ' + username);

    } else {
        alert('please enter yes or no !' + '☹️');
    }



}


// q2();
console.log(q2);


function q3() {

    guess = prompt('Do you think i have a special skills?');
    guess = guess.toLowerCase();


    if (guess === 'yes' || guess === 'y') {
        console.log(guess);
        alert('That\'s right');
        score += 1;
    }
    else if (guess === 'no' || guess === 'n') {
        console.log(guess);
        alert('Wrong answer' + username);

    } else {
        alert('please enter yes or no !' + '☹️');
    }


}

// q3();
console.log(q3);


function q4() {

    guess = prompt('do you think i\'m a gymer?');
    guess = guess.toLowerCase();


    if (guess === 'yes' || guess === 'y') {
        console.log(guess);
        alert('You are very good at this');
        score += 1;
    }
    else if (guess === 'no' || guess === 'n') {
        console.log(guess);
        alert('Wrong guessing ' + username);

    } else {
        alert('please enter yes or no !' + '☹️');
    }

}


// q4();
console.log(q4);




function q5() {

    guess = prompt('Am i an anti sociable person?' + '🤔');

    guess = guess.toLowerCase();


    if (guess === 'yes' || guess === 'y') {

        console.log(guess);
        alert('Wrong answer' + '🤷‍♂️');

    }
    else if (guess === 'no' || guess === 'n') {
        console.log(guess);
        alert('Yes That\'s right !' + '😉');
        score += 1;
    } else {
        alert('please enter yes or no !' + '☹️');
    }

}


// q5();
console.log(q5);


// question6
function q6() {
    for (let i = 1; i <= 4; i++) {
        let num = prompt('guess the number from 1 to 10');
        num = Number(num);
        // 7

        if (num === 5) {
            alert('good job');
            score += 1;
            break;

        }
        else if (num > 5) {
            alert('too high');
        }
        else if (num < 5) {
            alert('too low');
        }
        else {
            alert('please enter a number !');
        }

    }

}



// q6();
console.log(q6);



// question7
function q7() {

    let car = ['mercedes', 'tesla', 'bmw', 'gmc'];
    // console.log(car.length);
    // car[0]

    let answeredCorrectly = false;

    // bigLoop:for (let i = 1; i <= 6; i++) {
    for (let i = 1; i <= 6; i++) {
        let guessCar = prompt('what is my fav car');
        for (let j = 0; j < car.length; j++) {

            if (guessCar == car[j]) {
                alert('correct answer');
                score += 1;
                // 
                answeredCorrectly = true;
                // break bigLoop

            }

        }
        if (answeredCorrectly == true) {
            break;
        }
        else {

            alert('try again');
        }
    }
}

// q7();
console.log(q7);

alert('here are all the correct answers ' + car);
// alert('glad to see you in my website ' + username);
// string interpolation
alert(`glad to see you in my website ${username}, you have a score of ${score}/7`);


