const db = require('mongoose');

async function connect() {

    await db.connect('mongodb+srv://tanhuy998:Huy71214@cluster0.hjvqr.mongodb.net/pizza?retryWrites=true&w=majority');

    const testSchema = db.Schema({
        id: Number,
        list: Array
    })

    console.log(db.baseCollection);

    const Test = db.model('test', testSchema);

    const obj = new Test({
        id: 12,
        list: [1,2,5,4,3],
    })

    //await obj.save();


    //console.log(obj)
}

connect();

console.log('connect')