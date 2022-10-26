const adAnnihilator = document.querySelectorAll('.adv');
const books = document.querySelectorAll('.book');
const newElem = document.createElement('li');
const chapterTwo = books[0].querySelectorAll('li');
const chapterFive = books[5].querySelectorAll('li');
const chapterSix = books[2].querySelectorAll('li');
const correctorText = books[4].querySelector('a');

document.body.style.backgroundImage = "url('./image/adv.jpg')";

newElem.textContent = 'Глава 8: За пределами ES6';

chapterSix[8].after(newElem);

adAnnihilator[0].remove();

books[1].after(books[0], books[4], books[3], books[5], books[2]);

chapterTwo[3].after(chapterTwo[6], chapterTwo[8], chapterTwo[4], chapterTwo[5],
    chapterTwo[7], chapterTwo[9], chapterTwo[2], chapterTwo[10]);
chapterFive[9].after(chapterFive[3], chapterFive[4], chapterFive[2], chapterFive[6],
    chapterFive[7], chapterFive[5], chapterFive[8], chapterFive[10]);

correctorText.innerText = 'Книга 3. this и Прототипы Объектов';