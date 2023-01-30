const dbService = {};

class Model {

    #modelName;
    #db;

    constructor() {

        
    }

    Init() {

        this.#modelName = this.constructor.name;
        this.#db = dbService;
    }
}