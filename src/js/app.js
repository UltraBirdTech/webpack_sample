import additionalCalculator from './modules/additional-calculator';
import taxCalculator from './modules/tax-calculator';

var item1Price = 400;
var item2Price = 600;

var totalPrice = additionalCalculator(item1Price, item2Price);

var tax = 1.8;

var priceIncludeTax = taxCalculator(totalPrice, tax);

console.log (priceIncludeTax);
