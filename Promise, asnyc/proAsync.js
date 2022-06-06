class newPromiseLike {
    // The async function works like a promise, 
    // it has a then, catch and finally
    async syncThen(number) {
        console.log(1);
        console.log(number);
    }
}

const prom = new newPromiseLike();
prom.syncThen(2).then(() => console.log(3));

console.log(4);