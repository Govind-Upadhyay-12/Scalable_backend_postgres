import express from 'express';
import router from './routes/Auth-route.js';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.json());
app.use(express.json());
app.use("/api",router);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
 