const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

function createNewObj(obj){
    let newObject = {};
    return fillObject({},obj);
}

function fillObject(newObject, obj){
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            let innerObj = obj[key];
            fillObject(newObject, innerObj);
        } else{
            newObject[key] = obj[key];
        }
    }
    return newObject;
}

console.log(obj)
console.log( createNewObj(obj) );