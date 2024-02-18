
//synchronous code
function add1() {
     console.log("I am add1")
}
function add2() {
     console.log("I am add2")
}
add1()
add2()


// function addition1() {
//      setTimeout(function () {
//           console.log("addition1")
//      }, 3000)
// }
// function addition2() {
//      setTimeout(function () {
//           console.log("addition2")
//      }, 2000)
// }
// addition1()
// addition2()


// function addition1() {
//      setTimeout(function () {
//           console.log("addition1")
//      }, 3000)
// }
// function addition2() {
//      setTimeout(function () {
//           console.log("addition2")
//      }, 2000)
// }
// addition1()
// addition2()


// function getInfo(){
//      setTimeout(function(){
//           console.log("Multiple Users")

//      },3000)

//      setTimeout(function(){
//           console.log("Single User")

//      },2000)

//      setTimeout(function(){
//           console.log("render info")

//      },1000)
// }
// getInfo()


// function getInfo() {
//      setTimeout(function () {
//           console.log("Multiple Users")
//           setTimeout(function () {
//                console.log("Single User")
//                setTimeout(function () {
//                     console.log("render info")
//                }, 3000)

//           }, 2000)

//      }, 1000)
// }
// getInfo()

// let pro = new Promise(function (resolve, reject) {
//      let a = 10
//      let b = 10
//      if (a == b) {
//           resolve("hello")
//      }
//      else {
//           reject("bye")
//      }
// })
// pro.
//      then(function (str) {
//           console.log(str)
//      })
//      .catch(function (str) {
//           console.log(str)
//      })

// let pro2 = new Promise(function (resolve, reject) {
//      let a = 10
//      let b = 10
//      if (a == b) {
//           resolve("hello")
//      }
//      else {
//           reject("bye")
//      }
// })

// pro2.then(function (str) {
//      console.log(str)
// }, function (str) {
//      console.log(str)
// })


let pro3 = new Promise(function (resolve, reject) {
     let name = "Madhuri"
     if (name.startsWith("M")) {
          resolve("Good")
     }
     else {
          reject("No")
     }
})
// pro3
//      .then(function (str) {
//           console.log(str)
//      })
//      .catch(function (str) {
//           console.log(str)
//      })
//      .finally(function () {
//           console.log("I am execute always")
//      })

// pro3
//      .then(function (str) {
//           console.log(str)
//           return "Hi"
//      })
//      .then(function(str){
//           console.log(str)
//      })
//      .catch(function (str) {
//           console.log(str)
//      })
//      .finally(function () {
//           console.log("I am execute always")
//      })


// function users() {
//      setTimeout(function () {
//           console.log("userList")
//           setTimeout(function () {
//                console.log("singleUser")
//                setTimeout(function () {
//                     console.log("showInfo")

//                }, 1000)
//           }, 2000)

//      }, 3000)


// }
// users()

function CreateUsers() {
     return new Promise(function (resolve, reject) {
          setTimeout(function () {
               resolve("getUsers")
          }, 3000)

     })
}
function singleUser() {
     return new Promise(function (resolve, reject) {
          setTimeout(function () {
               resolve("getsingleUser")
          }, 2000)

     })
}
function Info() {
     return new Promise(function (resolve, reject) {
          setTimeout(function () {
               resolve("getInfo")
          }, 1000)

     })
}

CreateUsers()
.then(function(str){
     console.log(str)
     return singleUser()
})
.then(function(str){
     console.log(str)
     return Info()
})
.then(function(str){
     console.log(str)
})
.catch(function(str){
     console.log(str)
})
.finally(function(){
     console.log("always")
})


