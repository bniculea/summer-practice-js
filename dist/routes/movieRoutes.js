"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const movie_1 = __importDefault(require("../models/movie"));
const mongoose_1 = __importDefault(require("mongoose"));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const movies = yield movie_1.default.find();
    res.status(200).send(movies);
}));
router.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const movie = new movie_1.default(req.body);
        const result = yield movie.save();
        res.status(201).send(result);
    }
    catch (err) {
        next(err);
    }
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const movie = yield movie_1.default.findById(id);
        if (!movie) {
            res.status(404).send();
        }
        else {
            res.status(200).send(movie);
        }
    }
    catch (err) {
        if (err instanceof mongoose_1.default.Error.CastError) {
            res.status(404).send();
        }
    }
}));
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        yield movie_1.default.findByIdAndDelete(id);
        res.status(204).send();
    }
    catch (err) {
        if (err instanceof mongoose_1.default.Error.CastError) {
            res.status(204).send();
        }
    }
}));
router.patch('/', (req, res) => {
    res.status(405).send();
});
exports.default = router;
