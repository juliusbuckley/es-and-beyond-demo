'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/****************
*Utility Methods*
*****************/

/***************************************************************************************
* Static method calls are made directly on the class and are not callable on instances *
* of the class. Static methods are often used to create utility functions. -MDN        *
****************************************************************************************/

var QuoteAPI = function () {
  function QuoteAPI() {
    _classCallCheck(this, QuoteAPI);
  }

  _createClass(QuoteAPI, null, [{
    key: 'getHistory',
    value: function getHistory(url, status) {
      var quotes = ['quote_1', 'quote_2', 'quote_3', 'quote_4'];

      if (status) {
        return Promise.resolve(quotes);
      }
      return Promise.reject('401 Unauthorized');
    }
  }]);

  return QuoteAPI;
}();

var UserAPI = function () {
  function UserAPI() {
    _classCallCheck(this, UserAPI);
  }

  _createClass(UserAPI, null, [{
    key: 'authenticateUser',
    value: function authenticateUser(username) {
      return Promise.resolve(username + ' has been authenticated');
    }
  }]);

  return UserAPI;
}();

var PetsAPI = function () {
  function PetsAPI() {
    _classCallCheck(this, PetsAPI);
  }

  _createClass(PetsAPI, null, [{
    key: 'getDogs',
    value: function getDogs() {
      return Promise.resolve(['Skip', 'Fido']);
    }
  }, {
    key: 'getCats',
    value: function getCats() {
      return Promise.resolve(['Princess', 'Luna']);
    }
  }]);

  return PetsAPI;
}();

// export full class ES5
// module.exports = QuoteAPI; 

// export static method ES5
// module.exports = QuoteAPI.getHistory; 

// export multiple classes ES5


module.exports = {
  QuoteAPI: QuoteAPI,
  UserAPI: UserAPI,
  PetsAPI: PetsAPI
};

// export one class ES6
// export default QuoteAPI; 

// export multiple classes ES6
// export { QuoteAPI, UserAPI };