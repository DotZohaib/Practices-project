// map method using array

let Arr: number[] = [1, 2, 3, 4, 5];
let Arr2: number[] = Arr.map((x) => x * 2);
console.log(Arr2);

// filter method using array

let Arr3: number[] = [1, 2, 3, 4, 5];
let Arr4: number[] = Arr3.filter((x) => x % 2 == 0);
console.log(Arr4)

// reduce method using array

let Arr5: number[] = [1, 2, 3, 4, 5];
let Arr6: number = Arr5.reduce((x, y) => x + y); 
console.log(Arr6)





// let func: number[] = [1, 2, 3, 4, 5];
// let func2: number[] = func.map((a) => a ** 2)
// console.log(func2);

// let filt: number[] = [767,67657,1, 2,4875,5676,67686, 3, 4, 5];
// let filt2: number[] = filt.filter((z)=> z <= 5)
// console.log(filt2);


// let redu: number [] = [456,5656,76,8,789,89,54,45,54,43,7,87,0];
// let red: number = redu.reduce((g,h) => g - h )
// console.log(red);



let eachFun: number[] = [0, 1, 2, 3, 4, 5, 6, 7];

let Some = eachFun.map((value: number, index: number, array: number[]) => {
    return value > index ? index : value;
});

console.log(Some);


// let eachFun: number[] = [0, 1, 2, 3, 4, 5, 6, 7];

// let Some: number[] = [];

// eachFun.forEach((value: number, index: number) => {
//     Some.push(value > index ? index : value);
// });

// console.log(Some);

