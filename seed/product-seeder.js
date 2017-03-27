const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
  new Product({
    imagePath: 'https://static.giantbomb.com/uploads/scale_small/12/128291/1837361-gothic__cdcovers_cc__front.jpg',
    title: 'Gothic Video Game',
    description: 'Awesome Game !!!',
    price: 20
  }), 
  new Product({
    imagePath: 'http://imgapi.nownews.com/?w=640&q=60&src=http%3A%2F%2Fs.nownews.com%2F32%2Ff3%2F32f3422ef496175cf5a8ccf5e4b95e37.jpg',
    title: 'Gothic Video Game',
    description: 'kgmkgk 0005e4wr bew0202 dede 20',
    price: 10
  }), 
  new Product({
    imagePath: 'http://www.kagulu.com/upload/cars/Yaris_2014.jpg',
    title: 'Gothic Video Game',
    description: '5412354154513210485451351',
    price: 33
  }), 
  new Product({
    imagePath: 'http://www.ricopay.com.tw/userfiles/phone/5_20151119163144.png',
    title: 'Gothic Video Game',
    description: '!!!!~~~~~!!!~~~~~~!!!!~~~~~~!!!!',
    price: 120
  }), 
  new Product({
    imagePath: 'http://ms.taes.tyc.edu.tw/taes3130/bag.bmp',
    title: 'Gothic Video Game',
    description: 'lovelovelovelovekjnsjkd ksadnuwjqnjx skmkswi fast mnksncuw serrt',
    price: 1
  }), 
  new Product({
    imagePath: 'https://upload.wikimedia.org/wikipedia/commons/9/99/W020100331475021717874.jpg',
    title: 'Gothic Video Game',
    description: 'quickquickquickquickquickquickquickquickquickquick',
    price: 79
  }), 
  new Product({
    imagePath: 'http://www3.mtps.kh.edu.tw/webcompetition/97/%E8%A8%B1%E5%9C%B0%E7%90%83%E4%B8%80%E5%80%8B%E4%B9%BE%E6%B7%A8%E7%9A%84%E6%9C%AA%E4%BE%86/601%E6%9E%97%E6%85%A7%E6%85%88.%E6%A5%8A%E6%B0%B8%E6%9A%84.%E9%BB%83%E9%87%87%E7%9B%88/pic/%E5%9C%B0%E7%90%831.jpg',
    title: 'Gothic Video Game',
    description: 'jdsnkmvmekwm dkevioed ekwkkimweclp~~~',
    price: 45
  })
];

var done = 0
for(var i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if(done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
};
