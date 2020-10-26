//?__________USING CALLBACKS______________________

// console.log("Requesting data...")

// setTimeout(() => {
//   console.log("Preparing data...")

//   const backendData = {
//     server: "avs",
//     port: 2000,
//     status: "working",
//   }

//   setTimeout(() => {
//     backendData.modified = true
//     console.log("Data received", backendData)
//   }, 2000)

//   console.log(" data...")
// }, 2000)

//?_________USING PROMISES___________________________

// console.log("Requesting data...")

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     console.log("preparing data...")

//     const backendData = {
//       server: "avs",
//       port: 2000,
//       status: "working",
//     }

//     res(backendData)
//   }, 2000)
// })

// promise
//   .then((data) => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         data.modified = true
//         rej(data)
//       }, 2000)
//     })
//   })
//   .then((clientData) => console.log("3d then and data", clientData))
//   .catch((err) => console.error("This is error", err))

//?_________________MODULE 11________________________
//?-----------------Timeout and interval-------------
// setTimeout(() => console.log("4"), 0) //always after synch code, even if 0

// for (let i = 0; i < 100; i++) {
//   console.log(i)
// }
//* not earlier then set timeout time, but only after all sync code is executed
//* timer is executed by browser, BOM. Timeout and interval are methods of window obj

// const timerId = setInterval(() => {}, 500)
// console.log(timerId)

//* const timer is unique id of timer and interval which is used to delete this interval or timeout
//* to delete we use clearInterval:

// clearInterval(timerId)

// setTimeout(() => clearInterval(timerId), 500)

//?------------this in timeout---------------
// setTimeout(() => console.log(this), 500)

//* this is undefines, arrow doesnt have this
//* in usual functions this refers to window, as timeouts and intervals are methods of obj window
//* in usual func without settimeout and interval we will get the link to obj

// Obj.a.call(obj2)

//? --------------Date-----------------------
// const date = new Date() // Date is a class

// console.log(typeof date) //obj
// console.dir(date) //this info is part of obj window, browser takes those form local settings of computer (which can be syncronized with internet)
// console.log(navigator)
// console.log(date.getDate())
// console.log(date.getFullYear())
// console.log(date.getTime()) // milliseconds
// console.log(date.getHours())
// const date = new Date()
// const currentTime = date.getTime()
// console.log(date)
// const date2 = new Date(currentTime + 5000)
// console.log(date2)

//? Example of timer and how to clear timeout
// const date = new Date()
// const currentTime = date.getTime()
// console.log(date.getTime())
// const date2 = new Date(date.getTime() + 5000)
// const t = setInterval(() => {
//   if (date2 <= new Date()) {
//     alert("YES")
//     clearInterval(t)
//   } else {
//     console.log("not yet")
//   }
// }, 500)

const refs = {
  start: document.querySelector(".start"),
  value: document.querySelector(".value"),
  stop: document.querySelector(".stop"),
}

refs.value.textContent = 0

let timer

refs.start.addEventListener("click", () => {
  refs.start.disabled = true

  timer = setInterval(() => {
    let newValue = (+refs.value.textContent + 0.1).toFixed(1)
    refs.value.textContent = newValue
  }, 100)
})

refs.stop.addEventListener("click", () => {
  clearInterval(timer)
  if (refs.stop.innerHTML === "Reset") {
    refs.value.textContent = 0
  }
  refs.stop.innerHTML = "Reset"
  refs.start.disabled = false
})
