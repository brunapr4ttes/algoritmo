function calculatePromotionalPrice(description, price) {
    // Calculate the total price for two units of the medication
    const total = price * 2;
  
    // Get the centavos (fractional part) of the total price
    const fractionalPart = total % 1;
  
    // Calculate the discount by rounding down the fractional part to the nearest centavo
    const discount = Math.floor(fractionalPart * 100) / 100;
  
    // Calculate the promotional price by subtracting the discount from the total price
    const promotionalPrice = total - discount;
  
    return promotionalPrice;
  }
  
  // Test the function with sample input
  const description = prompt("Enter the medication description:");
  const price = parseFloat(prompt("Enter the price of one unit of the medication:"));
  
  const promotionalPrice = calculatePromotionalPrice(description, price);
  console.log(`Promotional Price for ${description}: R$${promotionalPrice.toFixed(2)}`);
  