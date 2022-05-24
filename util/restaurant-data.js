const path = require('path');
const fs = require('fs');

function getStoredRestaurants() {
	const filePath = path.join(__dirname, '..', 'data', 'restaurants.json');

	const fileData = fs.readFileSync(filePath);
	const storedRestaurants = JSON.parse(fileData);

	return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
	fs.writeFileSync(filePath, JSON.stringify(restaurants));
}

module.exports = {
	getStoredRestaurants: getStoredRestaurants,
	storeRestaurants: storeRestaurants,
};
