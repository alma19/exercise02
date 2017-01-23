console.info('Welcome to the dessert maker v1.0.');

var currentFruit = null;
var currentDessert = null;


var images = {
  fruits: {
    apple: 'img/Apple.jpg',
    orange: 'img/Orange.jpg',
    banana: 'img/Banana.jpg',
  },
  desserts: {
    icecream: 'img/IceCream.jpg',
    cake: 'img/Cake.jpg',
    pie: 'img/Pie.jpg',
  },
  mixes: {
    apple: {
      icecream: 'img/AppleIceCream.jpg',
      cake: 'img/AppleCake.jpg',
      pie: 'img/ApplePie.jpg',
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

var fruit = document.querySelector('.Holder--fruit');
var dessert = document.querySelector('.Holder-dessert');
var result = document.querySelector('.Holder--result');

var reset = document.querySelector('.Reset');



apple.addEventListener('click', function() {

  document.getElementById('fruit').innerHTML = '<img src=" ' + images.fruits.apple + '"/>';
  currentFruit = "apple";
  dessertMix();
});

orange.addEventListener('click', function(e) {
  document.getElementById('fruit').innerHTML = '<img src=" ' + images.fruits.orange + '"/>';
  currentFruit = "orange";
  dessertMix();
});

banana.addEventListener('click', function(e) {
  document.getElementById('fruit').innerHTML = '<img src=" ' + images.fruits.banana + '"/>';
  currentFruit = "banana";
  dessertMix();
});

icecream.addEventListener('click', function() {

  document.getElementById('dessert').innerHTML = '<img src=" ' + images.desserts.icecream + '"/>';
   currentDessert = "icecream";
  dessertMix();
});

cake.addEventListener('click', function() {
  document.getElementById('dessert').innerHTML = '<img src=" ' + images.desserts.cake + '"/>';
  currentDessert = "cake";
  dessertMix();
});

pie.addEventListener('click', function() {
  document.getElementById('dessert').innerHTML = '<img src=" ' + images.desserts.pie + '"/>';
  currentDessert = "pie";
  dessertMix();
});


reset.addEventListener('click', function(){
  document.getElementById('fruit').innerHTML = '<img src=""/>'
  document.getElementById('dessert').innerHTML = '<img src=""/>'
  document.getElementById('result').innerHTML = '<img src=""/>'
});



 function dessertMix() {
 if ( currentFruit !==null  && currentDessert !== null) {
    document.getElementById('result').innerHTML = '<img src="' + images.mixes[currentFruit][currentDessert] + '"/>';
 }};
