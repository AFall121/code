// 准备数据
let user = {
    name: '雨无声梦调',
    age: 17,
    protag: '风居住的街道，雨无声\丶梦调。'
}
// 伪造一个用户
let user2 = {
    name: 'Camilla Lubowitz',
    age: 20,
    protag: 'Where there\'s a will,there\'s a way'
}
//html
let html =document.documentElement
//body
let body =document.body
console.log(body)
// 获得用户名
let username = document.querySelector('span[name="username"]')
username.innerText = user.name

console.log(username)