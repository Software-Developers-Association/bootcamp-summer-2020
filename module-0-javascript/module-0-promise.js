// Used for asynchronous tasks
let promise = new Promise(
    (resolve, reject) => {
        let number = 3;

        // Check if even...
        if(number % 2 === 0) {
            resolve('Is even');
        } else {
            reject('Is odd');
        }
    });

promise
.then((result) => {
    console.log(result);
})
.catch((result) => {
    console.log(result);
});