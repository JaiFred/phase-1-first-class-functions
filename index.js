
function receivesAFunction(callback){
   callback();
}

function returnsANamedFunction() {
    return function aNamedFunction(){};
}

function returnsAnAnonymousFunction() {
    return () => 
        console.log('Ya')
};