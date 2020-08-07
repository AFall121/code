angular
  .module('booksApp')
  .controller('BooksController', BooksController)
// .component('book', {
//   tempalteUrl: 'book.html'
// })

function BooksController(BooksService) {
  const vm = this
  // console.log(this)// this =>BooksController
  vm.count = 0;
  vm.books = []

  BooksService.getBooks().then(books => {
    vm.books = books
    console.log(books)
  })
  vm.decreaseCount = decreaseCount;
  // 箭头函数形式
  vm.increaseCount = () => {
    vm.count += 1
  }
  // 函数声明形式
  function decreaseCount() {
    if (vm.count === 0) return;
    vm.count -= 1;
  }


}