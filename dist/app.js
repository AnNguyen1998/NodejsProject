"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_routes_1 = __importDefault(require("./routes/book.routes"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, database_1.default)();
app.use('/api/books', book_routes_1.default);
app.get('/', (req, res) => {
    res.send('Welcome!!!');
});
app.listen(port, () => {
    console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
