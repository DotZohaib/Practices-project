let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise resolved');
    }, 1000);   

})

prom.then((data) => {
    console.log(data);
})

prom.catch((error) => {
    console.log(error);
})



// prom.finally(() => {
    // console.log('Promise finished');
    // })

// async function example() {
    // try {
        // let result = await prom;
        // console.log(result);
    // } catch (error) {
        // console.log(error);
    // }
    // finally {
        // console.log('Promise finished');
    // }
// }

// example();
