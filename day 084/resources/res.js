const myPromiseFunction = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {resolve("Hello"),2000})
    })
}

myPromiseFunction().then((result) =>console.log(result)).catch()


