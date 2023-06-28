let product = JSON.parse(localStorage.getItem("current"));
let proDetails = document.querySelector("#prodetails")

let singleProImage = document.createElement("div");
singleProImage.classList.add("single-pro-image")

let proImage = document.createElement("img");
proImage.classList.add("pro-image")
proImage.setAttribute("src", product.image);
proImage.setAttribute("width", "100%");
singleProImage.appendChild(proImage);


let smallImgGroup = document.createElement("div");
smallImgGroup.classList.add("small-img-group")
product.all_images.map((i) => {
    let smallImgCol = document.createElement("div");
    smallImgCol.classList.add("small-img-col")
    let img = document.createElement("img");
    img.setAttribute("src", i);
    img.setAttribute("width", "100%");
    img.classList.add("small-img");
    smallImgCol.appendChild(img);

    smallImgCol.addEventListener("click", (e) => {
        let temp = document.querySelector(".pro-image");
        temp.setAttribute("src", e.target.src);
    })

    smallImgGroup.appendChild(smallImgCol);
})

singleProImage.appendChild(smallImgGroup);

proDetails.appendChild(singleProImage);

let singleProDetails = document.createElement("div")
singleProDetails.classList.add("single-pro-details");

let category = document.createElement("h6")
category.innerText = "Home / Sneakers";

singleProDetails.appendChild(category)

let productName = document.createElement("h4");
productName.innerText = product.name;

singleProDetails.appendChild(productName);

let priceElement = document.createElement("h2");
priceElement.innerText = "Rs. " + product.price + "/-"
singleProDetails.appendChild(priceElement);


let select = document.createElement("select");

let selectSize = document.createElement("option");
selectSize.innerText = "Select Size";
select.appendChild(selectSize);

let size7 = document.createElement("option");
size7.innerText = 7;
select.appendChild(size7)
let size8 = document.createElement("option");
size8.innerText = 8;
select.appendChild(size8)
let size9 = document.createElement("option");
size9.innerText = 9;
select.appendChild(size9)
let size10 = document.createElement("option");
size10.innerText = 10;
select.appendChild(size10)

singleProDetails.appendChild(select)

let input = document.createElement("input");
input.setAttribute("type", "number");
input.setAttribute("value", "1");
singleProDetails.appendChild(input);

let btn = document.createElement("button");
btn.classList.add("normal")
btn.classList.add("addToCart");
btn.innerText = "Add To Cart"

btn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location = "/cart.html";
})

singleProDetails.appendChild(btn);
proDetails.appendChild(singleProDetails);