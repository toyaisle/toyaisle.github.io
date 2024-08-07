document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://fakestoreapi.com/products';

    fetch(API_URL)
        .then(response => response.json())
        .then(products => {
            const productGrid = document.getElementById('product-grid');

            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';

                const productImage = document.createElement('img');
                productImage.src = product.image;
                productImage.alt = product.title;

                const productTitle = document.createElement('h3');
                productTitle.textContent = product.title;

                const productDescription = document.createElement('p');
                productDescription.textContent = product.description;

                const productPrice = document.createElement('p');
                productPrice.textContent = `$${product.price}`;

                const buyButton = document.createElement('button');
                buyButton.textContent = 'Buy Now';

                productCard.append(productImage, productTitle, productDescription, productPrice, buyButton);
                productGrid.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
