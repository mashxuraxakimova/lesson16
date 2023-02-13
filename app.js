console.log("js is started");

let arr = [20, 30, 15]

    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }

    for(let n of arr){
        console.log(n);
    }

arr.forEach((k)=> {
    console.log(k);
})
 arr.push("end") //array ni ohiriga data qoshish
 arr.unshift("start") //arrayni boshiga data qoshish
 arr.pop() //array ni ohiridan olib tashlaydi
 arr.shift() //arrayni boshidan olib tashlaydi

console.log(arr);

let salary = [500, 150, 200]
let newSalary = []

salary.forEach((s)=>{
    newSalary.push (s+50)
})
console.log(newSalary);
salary.forEach((s)=>{
    newSalary.push (s+(s*0.1))
})
console.log(newSalary);

let names = ["Abror", "Ibrohim", "Ismoil"]
let mr = []

names.forEach((n)=>{
    mr.push(n+"xon")
})

console.log(mr);

// let sonlar = [15, -6, 8, -3, 10]
// let musbat = []
// sonlar.forEach((n)=>{
//     if(n > 0){
//         musbat.push(n)
//     }

// })
// console.log(musbat);

let sonlar = [15, -6, 8, -3, 10]
let musbat = []
sonlar.forEach((n)=>{
    if(n > 0){
        musbat.push(n)
    }else{
        musbat.push(n*-1)
    }

})
console.log(musbat);



