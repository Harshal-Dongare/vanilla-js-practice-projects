let products = {
    data: [
        {
            productName: "Regular White T-Shirt",
            category: "Topwear",
            price: "30",
            image: "white-shirt.jpg",
        },
        {
            productName: "Beige Short Skirt",
            category: "Bottomwear",
            price: "49",
            image: "short-skirt.jpg",
        },
        {
            productName: "Sporty SmartWatch",
            category: "Watch",
            price: "99",
            image: "sporty-smartwatch.jpg",
        },
        {
            productName: "Basic Knitted Top",
            category: "Topwear",
            price: "29",
            image: "knitted-top.jpeg",
        },
        {
            productName: "Black Leather Jacket",
            category: "Jacket",
            price: "129",
            image: "black-leather-jacket.jpg",
        },
        {
            productName: "Stylish Pink Trouser",
            category: "Bottomwear",
            price: "89",
            image: "pink-trousers.jpeg",
        },
        {
            productName: "Brown Men's Jacket",
            category: "Jacket",
            price: "189",
            image: "brown-jacket.jpg",
        },
        {
            productName: "Comfy Gray Pants",
            category: "Bottomwear",
            price: "49",
            image: "comfy-gray-pants.jpeg",
        },
    ],
};

for (let i of products.data) {
    // create card
    const card = document.createElement("div");

    //card should have category and should stay hidden initially
    card.classList.add("card", `${i.category}`, "hide");

    // image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    // image tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);

    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    // container for product name and price
    let container = document.createElement("div");
    container.classList.add("container");

    // product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    card.appendChild(container);

    // price
    let price = document.createElement("h4");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);

    document.getElementById("products").appendChild(card);
}

function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");

    buttons.forEach((button) => {
        if (value.toUpperCase() == button.innerText.toUpperCase()) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });

    //select all cards
    let elements = document.querySelectorAll(".card");

    // loop through all cards
    elements.forEach((element) => {
        if (value == "all") {
            element.classList.remove("hide");
        } else {
            //check category match
            if (element.classList.contains(value)) {
                // display elements based on category
                element.classList.remove("hide");
            } else {
                //hide other elements
                element.classList.add("hide");
            }
        }
    });
}

// search button click
document.getElementById("search-btn").addEventListener("click", () => {
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    console.log(elements);

    elements.forEach((element, index) => {
        if (element.innerText.includes(searchInput.toUpperCase())) {
            //includes() method returns true if a string contains a specified value
            cards[index].classList.remove("hide"); //removes the specified card
        } else {
            cards[index].classList.add("hide"); //adds the specified card
        }
    });
});

// Initially display all products
window.onload = () => {
    filterProduct("all");
};
