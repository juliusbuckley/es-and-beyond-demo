'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**************************
*Import with destructuring*
**************************/

// require full class ES5
var QuoteAPI = require('./utils').QuoteAPI;
var UserAPI = require('./utils').UserAPI;
var PetsAPI = require('./utils').PetsAPI;

// require static method ES5
// const getHistory = require('./utils'); 

// require full class with static method ES5
// const getHistory = require('./utils.js').getHistory; 

// import full class ES6
// import QuoteAPI from './utils';

// destructure static method ES6
// import { QuoteAPI, UserAPI, PetsAPI } from './utils';

/*******************
*Default parameters*
********************/

// ES5
function greetUser(title, message) {
  var title = title || 'Hello!\n';
  var message = message || 'Welcome to Quote Pad!';
  console.log(title + message);
}

// ES6
var greetUser_ES6 = function greetUser_ES6() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello!\n';
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Welcome to Quote Pad!';

  console.log(title + message);
};

// greetUser();
// greetUser_ES6();

/******************
*Template Literals*
*******************/

// ES5
function getQuotesHistory(id) {
  var url = 'http://localhost:3000/api/group/' + id + '/history';

  QuoteAPI.getHistory(url, true).then(function (res) {
    console.log('Success: ' + url);
    return res;
  }).catch(function (e) {
    console.error('Error: ' + e);
    return e;
  });
}

// ES6
var getQuotesHistory_ES6 = function getQuotesHistory_ES6(id) {
  var url = 'http://localhost:3000/api/group/' + id + '/history';

  QuoteAPI.getHistory(url, true).then(function (res) {
    console.log('Success: ' + url);
    return res;
  }).catch(function (e) {
    console.error('Error: ' + e);
    return e;
  });
};

// getQuotesHistory('4LG778J');
// getQuotesHistory_ES6('4LG778J');

/*******************
*Multi-line strings*
********************/

// ES5
function generateProposalMessage() {
  var message = 'Spicy jalapeno bacon ipsum dolor,\n\t' + 'Prosciutto cupim aliqua officia dolore,\n\t' + 'Bresaola filet mignon boudin veniam,\n\t' + 'Sint ullamco pork loin dolore,\n\t' + 'Aliquip pork non enim, ut shoulder.\n\t';

  return message;
}

// ES6
var generateProposalMessage_ES6 = function generateProposalMessage_ES6() {
  var message = 'Spicy jalapeno bacon ipsum dolor,\n  Prosciutto cupim aliqua officia dolore\n  Bresaola filet mignon boudin veniam,\n  Sint ullamco pork loin dolore,\n  Aliquip pork non enim, ut shoulder.';

  return message;
};

// console.log(generateProposalMessage());
// console.log(generateProposalMessage_ES6());

/*************
*Destructring*
*************/

// ES6
var buildPetShop = function buildPetShop() {
  var _Promise$all = Promise.all([PetsAPI.getCats(), PetsAPI.getDogs()]),
      _Promise$all2 = _slicedToArray(_Promise$all, 2),
      cats = _Promise$all2[0],
      dogs = _Promise$all2[1];

  console.log('cats: ' + cats);
  console.log('dogs: ' + dogs);
};

buildPetShop();