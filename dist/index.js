"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const movieRoutes_1 = __importDefault(require("./routes/movieRoutes"));
const dbName = 'moviesDB';
const uri = `mongodb://localhost:27017/${dbName}`;
const port = 9000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/movies', movieRoutes_1.default);
app.listen(port, () => {
    mongoose_1.default.connect(uri).then(() => console.log('Connected! to mongo'));
    console.log(`Server started on ${port}`);
});
