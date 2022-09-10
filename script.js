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

function convert(obj) {
    return {
        x: obj.inner.x,
        y: obj.y,
        z: obj.inner.z,
        k: obj.foo2.k,
        p: obj.foo2.p,
    };
}
console.log(obj);
console.log(convert(obj));