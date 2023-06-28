let products = [
    {
        id: 1,
        company: "Nike",
        name: "Nike Causal GFX Shoe",
        price: 2345,
        image: "img/img/product1/1.jpg",
        all_images: [
            "img/img/product1/1.jpg",
            "img/img/product1/2.jpg",
            "img/img/product1/3.jpg",
            "img/img/product1/4.jpg",
        ]
    },
    {
        id: 2,
        company: "Nike",
        name: "Nike Causal GTX Shoe",
        price: 3455,
        image: "img/img/product2/1.jpg",
        all_images: [
            "img/img/product2/1.jpg",
            "img/img/product2/2.jpg",
            "img/img/product2/3.jpg",
            "img/img/product2/4.jpg",
        ]
    },
    {
        id: 3,
        company: "Nike",
        name: "Nike Causal SDF Shoe",
        price: 2140,
        image: "img/img/product3/1.jpg",
        all_images: [
            "img/img/product3/1.jpg",
            "img/img/product3/2.jpg",
            "img/img/product3/3.jpg",
            "img/img/product3/4.jpg",
        ]
    },
    {
        id: 4,
        company: "Mast & Harbor",
        name: "Mast urus-31 Shoe",
        price: 5900,
        image: "img/img/product4/1.jpg",
        all_images: [
            "img/img/product4/1.jpg",
            "img/img/product4/2.jpg",
            "img/img/product4/3.jpg",
            "img/img/product4/4.jpg",
        ]
    },
] 

let container = document.querySelector(".pro-container")


products.map(product => {
    let pro = document.createElement("div");
    pro.classList.add("pro")
    let img = document.createElement("img")
    img.setAttribute("src", product.image);
    img.setAttribute("width", "100%")
    let des = document.createElement("div");
    des.classList.add("des");



    let company = document.createElement("span");
    company.innerText = product.company;

    let productName = document.createElement("h5");
    productName.innerText = product.name;

    let star = document.createElement("div")
    star.classList.add("star");

    for(let i = 0; i < 5; i++) {
        let starI = document.createElement("i");
        starI.classList.add("fa-sharp");
        starI.classList.add("fa-solid");
        starI.classList.add(`fa-${i+1}`);
        star.appendChild(starI);
    }

    
    let price = document.createElement("h4")
    price.innerText = "Rs. " + product.price + "/-";
    
    let a2cwrapper = document.createElement("a");
    let addToCart = document.createElement("i")
    addToCart.classList.add("fa-solid");
    addToCart.classList.add("fa-cart-shopping");
    addToCart.classList.add("cart");
    a2cwrapper.appendChild(addToCart)
    
    pro.appendChild(img);
    
    des.appendChild(company);
    des.appendChild(productName);
    des.appendChild(star)
    des.appendChild(price);

    pro.appendChild(des);
    pro.appendChild(a2cwrapper);

    pro.addEventListener("click", (e) => {
        localStorage.setItem("current", JSON.stringify(product));
        window.location = "/sproduct.html"
    })

    container.appendChild(pro);
})