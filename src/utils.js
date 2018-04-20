/****************
*Utility Methods*
****************/

/***************************************************************************************
* Static method calls are made directly on the class and are not callable on instances *
* of the class. Static methods are often used to create utility functions. -MDN        *
***************************************************************************************/

class QuoteAPI {
  static getHistory(url, status) {
    const quotes = ['quote_1', 'quote_2', 'quote_3', 'quote_4'];

    if (status) {
      return Promise.resolve(quotes);
    }
    return Promise.reject('401 Unauthorized');
  }
}

class UserAPI {
  static authenticateUser(username) {
    return Promise.resolve(`${username} has been authenticated`);
  }
}

class PetsAPI {
  static getDogs() {
    return Promise.resolve(['Skip', 'Fido']);
  }
  static getCats() {
    return Promise.resolve(['Princess', 'Max']);
  }
}

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