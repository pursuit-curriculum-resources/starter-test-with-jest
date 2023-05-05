function getFullName(contact) {
  const names = contact;
  return `${names.first} ${names.surname}`;
}

function getProductsPurchased(contact) {
  const purchased = contact.purchased;

  if (!purchased.length) {
    return "No products purchased.";
  }

  if (purchased.length === 1) {
    return purchased[0].name;
  }

  const result = [];
  for (let product of purchased) {
    result.push(product.name);
  }

  return result;
}

module.exports = {
  getFullName,
  getProductsPurchased,
};
