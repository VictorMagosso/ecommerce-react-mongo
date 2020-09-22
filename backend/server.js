import express from 'express';
import data from './data';
import config from './config';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute';

dotenv.config()
 
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));
const port = 5000;

const app = express();

app.use('/api/users', userRoute);
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id == productId)

    try {
        if (product)
        res.send(product)
    } catch (error) {
        throw res.status(404).send({msg: 'O produto não foi encontrado! :('})
    }
});

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.listen(port, () => console.log(`Listening on port ${port}`))