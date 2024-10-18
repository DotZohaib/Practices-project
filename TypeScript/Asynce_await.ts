
const arrowFunc = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("Operation failed!");
            }
        }, 2000);
    });
};


const func = async () => {
    let value = await new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Operation completed successfully!");
            } else {
                reject("Operation failed!");
            }
        }, 2000);
    });
    console.log(value);
}