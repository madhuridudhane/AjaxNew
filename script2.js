function Usercreate() {
     return new Promise(function (resolve, reject) {
          setTimeout(function () {
               resolve("User Create")
          }, 5000)
     })
}

function UserId() {
     return new Promise(function (resolve, reject) {
          setTimeout(function () {
               resolve("User Id")
          }, 3000)
     })
}

function UserInfo() {
     return new Promise(function (resolve, reject) {
          setTimeout(function () {
               resolve("User Info")
          }, 2000)
     })
}

// Usercreate()
// .then(function(str){
//      console.log(str)
//      return UserId()
// })
// .then(function(str2){
//      console.log(str2)
//      return UserInfo()
// })
// .then(function(str3){
//      console.log(str3)

// })
// .finally(function(){
//      console.log("always")
// })


async function Users() {
     let b1 = await Usercreate()
     console.log(b1)
     let b2 = await UserId()
     console.log(b2)
     let b3 = await UserInfo()
     console.log(b3)
}
Users() 