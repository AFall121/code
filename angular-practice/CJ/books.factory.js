angular
  .module('booksApp')
  .factory('BooksService', BooksService)


function BooksService($http) {
  return {
    getBooks: function () {
      return $http
        .get('https://galvanizereads.herokuapp.com/books')
        .then(result => {
          return result.data.data
        })
    }
  }
}