const randomNumber = Math.floor(Math.random() * 100);

if (randomNumber % 2 === 0) {
  console.log(`${randomNumber} :Это четное число`);
} else {
  console.log(`${randomNumber} :Это нечетное число`);
}