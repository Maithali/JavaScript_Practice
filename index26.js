//asynchronus and await
async function f1(){
    return Promise.resolve(1)
}
f1().then (console.log("success"));
//await
async function f(){
    let promise = new Promise((resolve,reject)=> {
        setTimeout(() => resolve("done"),1000)
    });
    let result = await promise;
    console.log(`success - the result is ${result}`);
}
f();




const getTimeClock = () => {
    return new Date().getHours()
    +":"
    +new Date().getMinutes()
    +":"
    +new Date().getSeconds()
};

function getSyncMsg(){
    return "HI";
}
function getHellofromPromise(){
    return Promise.resolve
    ("Hello promise");
}
function getHolaWithDelay(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){resolve
            ("HOLA");
        },4000);
    });
}

async function caller(){
    const msgHello = await
    getSyncMsg();
    console.log(getTimeClock(),msgHello);

    const msgfrmPromise = await
    getHellofromPromise();
    console.log(getTimeClock(),msgfrmPromise);

    const msgHola = await
    getHolaWithDelay();
    console.log(getTimeClock(),msgHola);
}
caller();