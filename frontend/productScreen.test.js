import productDetails from './src/Pages/ProductScreen/productScreen';

describe('Esteira de testes - produto', () => {
    it('const {product}', () => {
        expect(productDetails).not.toBe(undefined);
    });
});

// //ou modelo abaixo, o que é menos descritivo
// test('adds 1 + 2 to equal 3', () => {
//     expect(soma(1,2)).toBe(3);
// });