const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000
const dbConnect = require('./config/db')
const userRouter = require('./routes/user.routes')
const cors = require('cors');
const path = require('path');

const _dirname = path.resolve();

dotenv.config({
    path: '.env',
})
dbConnect();

const corsOptions = {
    origin : 'https://netflix2-0-7hla.onrender.com',
    credentials: true
}
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api/v1/users', userRouter)

app.use(express.static(path.join(_dirname, '/frontend/dist')));
app.get('*', (req, res)=>{
    res.sendFile(path.join(_dirname, '/frontend/dist/index.html'));
});

app.get('/', (req,  res)=>{
    res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})