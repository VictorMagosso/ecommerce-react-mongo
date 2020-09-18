import express from 'express';
import data from './data';
const port = 5000;

const app = express();

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId)

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