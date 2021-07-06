import "core-js/stable";
import "regenerator-runtime/runtime";
//一 回调函数拿数据
// function getTea(fn){
//     setTimeout(()=>{
//          fn('milkTea')
//     },1000)
// }


// function getHotpot(fn){
//     setTimeout(()=>{
//         fn('hotpot')
//    },1000)
// }

// function f1(x){
//     console.log(x);
// }
// getTea(f1)
// getHotpot(function(x){
//     console.log(x);
//     getTea(function(x){
//         console.log(x)
//     })
// })

//二 promise拿数据
// let p = new Promise(function (resolve) {
//     resolve('hello')
// })
// p.then(function (x) { console.log(x) })

function getTea() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('奶茶')
        }, 1000)
    })
}

function getHotpot(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('火锅')
        },1000)
    })
}

// getTea().then(x=>{
//     console.log(x)
//     return getHotpot()
// }).then(x=>{
//     console.log(x)
//     return getTea()
// }).then(console.log)

//三 通过async 函数 因为.then看起来也相当赘余
// async function eat(){
//     let hotpot=await getHotpot()
//     console.log(hotpot)
//     let tea = await getTea()
//     console.log(tea)
// }
// eat()
async function getData(){
    let hotpot = await getHotpot()
    console.log(hotpot)
    //await后面跟 promise对象 可以直接获取 resolve 传递出来的异步数据，赋值给 hotpot
    //就不需要用 then，使代码看起来更像是同步代码
    let tea = await getTea()
    console.log(tea)
}
getData()