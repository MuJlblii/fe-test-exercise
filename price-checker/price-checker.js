const priceCheck = (products, productPrices, productSold, soldPrice) => {
    let errors = 0;
    const productObj = products.reduce((acc, el, index) => {
        return {...acc, [el]: productPrices[index]}
    }, {});
    productSold.forEach((el, ind) => {
        productObj[el] === soldPrice[ind] ? errors : ++errors;
    })
    return errors;
}

console.log(priceCheck(
	products=['rice', 'sugar', 'wheat', 'cheese'],
	productPrices=[16.89, 56.92, 20.89, 345.99],
	productSold=['rice', 'cheese'],
	soldPrice=[18.99, 400.89]
));

console.log(priceCheck(
    products = ['eggs', 'milk', 'cheese'],
    productPrices = [2.89, 3.29, 5.79],
    productSold = ['eggs', 'eggs', 'cheese', 'milk'],
    soldPrice = [2.89, 2.99, 5.97, 3.29]
    
))