console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;

var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg'
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg'
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg'
    },
    orange: {
      icecream: 'img/OrangeIceCream.jpg',
      cake: 'img/OrangeCake.jpg',
      pie: 'img/OrangePie.jpg'
    },
    banana: {
      icecream: 'img/BananaIceCream.jpg',
      cake: 'img/BananaCake.jpg',
      pie: 'img/BananaPie.jpg'
    }
  }
};

var apple = document.querySelector('.Fruit--apple');
var orange = document.querySelector('.Fruit--orange');
var banana = document.querySelector('.Fruit--banana');

var icecream = document.querySelector('.Dessert--icecream');
var cake = document.querySelector('.Dessert--cake');
var pie = document.querySelector('.Dessert--pie');

var fruit = document.querySelector('Holder--fruit');
var dessert = document.querySelector('Holder-dessert');
// var result = document. querySelector('Holder--result');


apple.addEventListener('click', function(e) {

  document.getElementById('fruit').innerHTML = '<img src="img/Apple.jpg"/>'
  currentFruit = apple;
  console.log(currentFruit);
});

orange.addEventListener('click', function(e) {
  document.getElementById('fruit').innerHTML = '<img src="img/Orange.jpg"/>'
  currentFruit = orange;
  console.log(currentFruit);
});

banana.addEventListener('click', function(e) {
  document.getElementById('fruit').innerHTML = '<img src="img/Banana.jpg"/>'
  currentFruit = banana;
  console.log(currentFruit);
});

icecream.addEventListener('click', function(e) {
  document.getElementById('dessert').innerHTML = '<img src="img/IceCream.jpg"/>'
  currentDessert = icecream;
});

cake.addEventListener('click', function() {
  document.getElementById('dessert').innerHTML = '<img src="img/Cake.jpg"/>'
  currentDessert = cake;
});

pie.addEventListener('click', function(e) {
  document.getElementById('dessert').innerHTML = '<img src="img/Pie.jpg"/>'
  currentDessert = pie;
});

// function myFunction(e){
//  if ( currentFruit === currentDessert){
//    document.getElementById('result').innerHTML = '<img src="img/AppleIceCream.jpg"/>'
//    console.log("this worked");
//    console.log(e);
// };
// }
