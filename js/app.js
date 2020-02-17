'use strict';
alert('welcome to my page ! Are you ready to know more about me?')
var whoYouAre = prompt ('First can you told me what is your name');
// console.log(whoYouAre);
alert('Hello ' + whoYouAre + ' happy to talk with you!' + ' Lets start!');

var study = prompt (' Do you think that I studied photography at the university?').toUpperCase();
// console.log(study);

if (study === 'YES' || study === 'Y' ) {
alert('No I did not ! I studied computer engineering');
}

else if (study === 'NO' || study === 'N')
{
alert('I wish i did ! This is a great hobby for me Photography is a beautiful passion , I hope you love to shoot and loves the beauty of pictures, especially nature pictures ');
alert('Iam going to put some pictures of myself shot here for some places, I hope you like it')
}
else {
alert('You skip first qustion');
}

var love = prompt (' do you think that i love Reading ?').toUpperCase();
// console.log(love);

if (love === 'YES' || love === 'Y') {
alert('Oh thats right i love reading very much');
}

else if (love === 'NO' || love ==='N')
{
alert('Why do you think that ! Iam reading lover ');

}
else {
alert('You skip second qustion');
}


var book= prompt (' do you think that i love the scientific books more than novels ?').toUpperCase();
// console.log(book);

if (book === 'YES' || book === 'Y') {
alert('of course not ! I feel bored quickly');
}

else if (book === 'NO' || book === 'N')
{
alert(' Yes, the novels are great, but you have to choose them carefully to be as good as you want. There will be some novels that I have read and liked.');

}
else {
alert('You skip third qustion');
}

var grade= prompt (' do you think that i had graduate easily ?').toUpperCase();
// console.log(grade);

if (grade === 'YES' || grade === 'Y') {
alert('of course not ! I suffered until that day');

}

else if (grade === 'NO' || grade === 'N')
{
alert(' right. that was hard!');

}
else {
alert('You skip fourth qustion');
}

alert('I hope you did not suffer to graduate like me');

var film= prompt (' do you think that i love Arabic movies more than English?').toUpperCase();
// console.log(film);

if (film === 'YES' || film === 'Y') {
alert('It is hard to find beautiful Arabic movies, so I dont like them more than english movies The best Arabic movies comedies movies Like Ahmed Helmys films');

}

else if (film === 'NO' || film === 'N')
{
alert(' Not all movies, but there are really great movies');

}
else {
alert('You skip fifth qustion');
}

alert ('It was a beautiful time, wasnt it? Thank you for your time ' + whoYouAre )