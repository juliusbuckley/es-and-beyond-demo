'use strict';
/**************************
*Import with destructuring*
**************************/

// require full class ES5
const QuoteAPI = require('./utils').QuoteAPI; 
const UserAPI = require('./utils').UserAPI;
const PetsAPI = require('./utils').PetsAPI;

// require static method ES5
// const getHistory = require('./utils'); 

// require full class with static method ES5
// const getHistory = require('./utils.js').getHistory; 

// import full class ES6
// import QuoteAPI from './utils';

// destructure static method ES6
// import { QuoteAPI, UserAPI, PetsAPI } from './utils';

/********
*Classes*
********/

// ES5
function Mammals_ES5() {
  this.breathes = true;
  this.vertebrae = true;
  this.tail = true;
  this.blood = 'endothermic';
}

function Dolphin_ES5() {
  // call constructor of superclass to initialize superclass members
  Mammals_ES5.call(this);
  this.legs = 0;
  this.habitat = 'water';
  this.mood = 'playful';
  this.intelligence = 'smart';
}

Dolphin_ES5.swim = function () {
  console.log('splash');
}

// Object.create allows us to establish a delegation relationship between two objects
// There's no mechanism to establish delegation after creating an object
// object delegation === live relationship.
Dolphin_ES5.prototype = Object.create(Mammals_ES5.prototype);

// constructor property points back to the function on which prototype object is a property
Dolphin_ES5.prototype.constructor = Dolphin_ES5;
// console.log(Dolphin_ES5.prototype);

var dolph = new Dolphin_ES5();

// ES6
class Mammals {
  constructor() {
    this.breathes = true;
    this.vertebrae = true;
    this.tail = true;
    this.blood = 'endothermic';
  }
}

class Dolphin extends Mammals {
  constructor() {
    super();
    this.legs = 0;
    this.habitat = 'water';
    this.mood = 'playful';
    this.intelligence = 'smart';
  }
  swim() {
    console.log('splash');
  }
}

class Dog extends Mammals {
  constructor(numLegs) {
    super();
    this.legs = numLegs || 4;
    this.noise = true;
    this.fed = false;
  }
  bark() {
    console.log('Woof!');
  }
  eat() {
    this.fed = true;
  }
}

 class Corgi extends Dog {
  constructor(name) {
    super();
    this.size = 'medium';
    this.tail = 'short';
    this.fur = 'sleek';
    this.name = name;
  }
  bark() {
    Dog.prototype.bark.call(this);
    console.log('wagging tail');
  }
 }

class Pomeranian extends Dog {
  constructor(name) {
    super();
    this.size = 'small';
    this.fur = 'fluffy';
    this.tail = 'short';
    this.name = name;
  }
  bark() {
    console.log('Yip!');
  }
}

const spot = new Pomeranian('spot');
const luger = new Corgi('luger');
// object that created spot
// console.log(spot.constructor); 
// console.log(spot);
// spot.bark();
// luger.bark()

/************************
*Block scoping let/const*
************************/

// ES5 (what is the result?)
function counter(n) {
  for (var i = 0; i <= n; i++) {
    setTimeout(function() {
      console.log(i), 1000
    });
  }
};

// ES5
function counter_ES5(n) {
  for (var i = 0; i <= n; i++) {
    (function(iClosureScope) {
      setTimeout(function() {
        console.log(iClosureScope), 1000
      });
    })(i)
  }
}

// ES6
const counter_ES6 = n => {
  for (let i = 0; i <= n; i++) {
    setTimeout(() => console.log(i), 1000);
  }
};

// counter(3);
// counter_ES5(3);
// counter_ES6(3);

const calculatePrizeMoney = double => {
  const amount = -10;
  
  if (double) {
    const amount = 10000;
  }

  {
    const amount = 5000;

    {
      const amount = 30;
    }
  }

  return amount;

}

// console.log(calculatePrizeMoney(true))

/****************
*Arrow functions*
****************/

// ES5
// var _this = this

// $('.btn').click(function(event){
//   _this.sendData()
// })


// ES6 (This maintains same value as contect of function)
// $('.btn').click(event => {
//   this.sendData()
// })

/**************
*Destructuring*
**************/

const parseInput = group => {
  const { userID, groupID } = group;
  console.log(userID);
  console.log(groupID);
}

const groupData = {
  userID: '1492',
  groupID: '98765'
};

// parseInput(groupData);

/******************
*Template Literals*
******************/

// ES5
function getQuotesHistory(id) {
  var url = 'http://localhost:3000/api/group/' + id + '/history';

  QuoteAPI.getHistory(url, true)
    .then(function (res) {
      console.log('Success: ' + url);
      return res;
    })
    .catch(function (e) {
      console.error('Error: ' + e);
      return e;
    });
}

// ES6
const getQuotesHistory_ES6 = id => {
  const url = `http://localhost:3000/api/group/${id}/history`;

  QuoteAPI.getHistory(url, true)
    .then(res => {
      console.log(`Success: ${url}`);
      return res;
    })
    .catch(e => {
      console.error(`Error: ${e}`);
      return e;
    });
};

// getQuotesHistory('4LG778J');
// getQuotesHistory_ES6('4LG778J');

/*******************
*Multi-line strings*
*******************/

// ES5
function generateProposalMessage() {
  var message = 'Spicy jalapeno bacon ipsum dolor,\n\t'
    + 'Prosciutto cupim aliqua officia dolore,\n\t'
    + 'Bresaola filet mignon boudin veniam,\n\t'
    + 'Sint ullamco pork loin dolore,\n\t'
    + 'Aliquip pork non enim, ut shoulder.\n\t';

  return message;
}

// ES6
const generateProposalMessage_ES6 = () => {
  const message = `Spicy jalapeno bacon ipsum dolor,
  Prosciutto cupim aliqua officia dolore
  Bresaola filet mignon boudin veniam,
  Sint ullamco pork loin dolore,
  Aliquip pork non enim, ut shoulder.`;

  return message;
};

// console.log(generateProposalMessage());
// console.log(generateProposalMessage_ES6());

/*******************
*Default parameters*
*******************/

// ES5
function greetUser(title, message) {
  var title = title || 'Hello!\n';
  var message = message || 'Welcome to Quote Pad!';
  console.log(title + message);
}

// ES6
const greetUser_ES6 = (title = 'Hello!\n', message = 'Welcome to Quote Pad!') => {
  console.log(title + message);
};

// greetUser();
// greetUser_ES6();

/*****
*Rest*
*****/

// ES5
function getPalette(colors) {
  var results = [];

  for (var i = 0; i < arguments.length; i++) {
    results.push(arguments[i]);
  }

  return results;
}

// ES6
const getPalette_ES6 = (...colors) => {
  const results = [];

  for (var i = 0; i < colors.length; i++) {
    results.push(colors[i]);
  }

  return results;
};

// console.log(getPalette('red', 'orange', 'green'));
// console.log(getPalette_ES6('blue', 'indiego', 'violet', 'purple'));

/*******
*Spread*
*******/

// ES5
function findMax(numbers) {
  return Math.max.apply(null, numbers);
}

// ES6
const findMax_ES6 = numbers => Math.max(...numbers);

// console.log(findMax([3, 5, -1, 20, 94, 30, 100, 123]));
// console.log(findMax_ES6([3, 5, -1, 20, 94, 30, 100, 123]));

/*****
*Maps*
******/

// ES6
const createMap = () => {
  const map = new Map();
  map.set('name', 'User1');
  map.set('day', 'Monday');
  map.set('time', '1:30');
  console.log(map.get('name'));
};

// createMap()

/*****
*Sets*
******/

// ES5
function removeDuplicates(arr) {
  var map = {};
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    map[num] = true;
  }

  for (var key in map) {
    result.push(Number(key));
  }

  return result;
}

// ES6
const removeDuplicates_ES6 = arr => [...new Set(arr)];

// ES5
function getDuplicates(arr) {
  var results = [];
  var map = {};
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    map[num] ? map[num]++ : map[num] = 1;
  }
  for (var key in map) {
    if (map[key] > 1) {
      results.push(Number(key));
    }
  }
  return results;
}

// ES6
const getDuplicates_ES6 = arr => {
  const set = new Set();
  const dupSet = new Set();
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (!set.has(num)) {
      set.add(num);
    } else {
      dupSet.add(num);
    }
  }
  return [...dupSet];
}

const arrData = [1, 1, 3, 3, 8];
// console.log(removeDuplicates(arrData));
// console.log(removeDuplicates_ES6(arrData));
// console.log(getDuplicates(arrData));
// console.log(getDuplicates_ES6(arrData));

/*********
*for...of*
*********/

// ES6
const iterate = nums => {
  for (const value of nums) {
    console.log(value);
  }
};

iterate([10, 20, 30]);



/************************
*Exponentiation operator*
************************/

// ES5
function getExponentiation(base, exponent) {
  return Math.pow(base, exponent);
}

// ES6
const getExponentiation_ES6 = (base, exponent) => base**exponent;

console.assert(getExponentiation(3, 4) === 81);
console.assert(getExponentiation_ES6(3, 4) === 81);


/******************************
*Destructuring with async/await*
******************************/

// ES6
const buildPetShop = async () => {
  // console.log('Awaiting Pets...');
  const [cats, dogs] = await Promise.all([PetsAPI.getCats(), PetsAPI.getDogs()]);
  // console.log('Pets arrived...')
  console.log(`cats: ${cats}`);
  console.log(`dogs: ${dogs}`);
  return [cats, dogs];
};

// buildPetShop();
