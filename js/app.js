'use strict';




let username = prompt('please enter your name !');

alert('Nice to see you here ' + username);



let guess = prompt('Could you guess who i am ?');

guess = guess.toLowerCase();

if (guess === 'yes' || guess === 'y') {
    console.log(guess);
    alert('smart person');
}
else if (guess === 'no' || guess === 'n') {
    console.log(guess);
    alert('try to guess');

} else
    alert('please enter yes or no !' + '☹️');


    guess = guess.toLowerCase();

guess = prompt('Are you still studying ?');


if (guess === 'yes' || guess === 'y') {
    console.log(guess);
    alert('That\'s cool ' + username);
}
else if (guess === 'no' || guess === 'n') {
    console.log(guess);
    alert('It\'s fine ' + username);

} else
    alert('please enter yes or no !' + '☹️');


    guess = guess.toLowerCase();

guess = prompt('Are you curious about knowing who i am ?');

if (guess === 'yes' || guess === 'y') {
    console.log(guess);
    alert('Of course i know then why you here if not ');

}
else if (guess === 'no' || guess === 'n') {
    console.log(guess);
    alert('It\'s fine ' + username);

} else
    alert('please enter yes or no !' + '☹️');




    guess = guess.toLowerCase();


guess = prompt('If you would be in my shoe would you do this curiosity test to your visitors ?');

if (guess === 'yes' || guess === 'y') {
    console.log(guess);
    alert('you\'re my favorite person');

}
else if (guess === 'no' || guess === 'n') {
    console.log(guess);
    alert('you don\'t look like me ' + username);

} else
    alert('please enter yes or no !' + '☹️');


    guess = guess.toLowerCase();


guess = prompt('did you like my game?' + '🤔');

if (guess === 'yes' || guess === 'y') {
    console.log(guess);
    alert('Haha Yes that\'s what i thought' + '😉');

}
else if (guess === 'no' || guess === 'n') {
    console.log(guess);
    alert('You chose to continue, I\'m not responsible ' + '🤷‍♂️');

} else
    alert('please enter yes or no !' + '☹️');

alert('Welcome to my website again Mr/Mss. ' + username + '😄');
