const sometingWillHappen = () => {
    return new Promise((resolver, reject) =>{
        if (true){
            resolver('Hey!');
        }else{
            reject('Whoops!');
        }
    });
};
sometingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err));

const sometingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True');
            }, 2000)
        } else{
            const error = new Error ('Whooops!!');
            reject(error);
        }
    });
}

sometingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err));


Promise.all([sometingWillHappen(), sometingWillHappen2()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch (err => {
        console.error(err);
    });