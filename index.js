const renderProducts = (products) => {
    products.forEach((product) => {
        let id = document.createElement("h1");
        id.innerHTML = product.id;

        let title = document.createElement("h2");
        title.innerHTML = product.title;

        let description = document.createElement("p");
        description.innerHTML = product.description;

        let discount = document.createElement("h2");
        discount.innerHTML = product.discount;

        let rating = document.createElement("h6");
        rating.innerHTML = product.rating;

        let thumbnail = document.createElement("img");
        thumbnail.src = product.image;

        let div = document.createElement("div");
        div.append(id, title, description, thumbnail, rating, discount);
        document.getElementById("box").append(div);
    });
};

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => renderProducts(products))
    .catch((error) => console.log(error));
