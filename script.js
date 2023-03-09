
let hr = document.querySelector(".hours");
let min = document.querySelector(".minutes");
let sec = document.querySelector(".seconds");
let format = document.querySelector(".format");

let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");

setInterval(() => {
    let d = new Date();
    let x=(d.getHours()<12)?"AM":"PM"
    hr.innerHTML = `${d.getHours()}: `
    min.innerHTML = `${d.getMinutes()}: `
    sec.innerHTML = `${d.getSeconds()}`
    format.innerHTML = `${x}`

    day.innerHTML = `${d.getDate()}/`
    month.innerHTML = `${d.getMonth()+1}/`
    year.innerHTML = `${d.getFullYear()}`
}, 1000)

// console.log(hr)
// console.log(min)
// console.log(sec)