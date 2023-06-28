let cart = JSON.parse(localStorage.getItem("cart"));
let itemList = document.querySelector("#itemList")

const computeTotal = () => {
    let subTotals = document.querySelectorAll(".subtotal");
    let total = 0;
    subTotals.forEach((x) => {
        total += Number(x.innerText.slice(3, -2));
        // console.log(x.innerText.slice(3, -2));
    })
    // return total;
    console.log(total)
    document.querySelector("#cart-subtotal").innerText = "Rs. " +  total + "/-";
    document.querySelector("#cart-total").innerText = "Rs. " +  total + "/-";
}


if (cart !== []) {
    for (let i = 0; i < cart.length; i++) {
        let tr = document.createElement("tr");

        // image
        let img = document.createElement("img");
        let tdImage = document.createElement("td");
        img.setAttribute("src", cart[i].image);
        tdImage.appendChild(img);
        tr.appendChild(tdImage);

        // name
        let tdName = document.createElement("td");
        tdName.innerText = cart[i].name;
        tr.appendChild(tdName);

        //price
        let tdPrice = document.createElement("td");
        tdPrice.innerText = "Rs. " + cart[i].price + "/-"
        tr.appendChild(tdPrice);

        //input
        let tdIp = document.createElement("td");
        let ip = document.createElement("input");

        ip.addEventListener("change", (e) => {
            if(e.target.value < 1) {
                e.target.value = 1;
            }
        })

        ip.setAttribute("type", "number");
        ip.setAttribute("value", "1");
        tdIp.appendChild(ip);
        tr.appendChild(tdIp);

        ip.addEventListener("change", (e) => {
            document.querySelector(`.total-${i}`).innerText = "Rs. " + cart[i].price * e.target.value + "/-";
            computeTotal();
        })

        //total
        let tdTotal = document.createElement("td");
        tdTotal.innerText = "Rs. " + cart[i].price + "/-";
        tdTotal.classList.add(`total-${i}`)
        tdTotal.classList.add("subtotal")
        tr.appendChild(tdTotal);

        //remove
        let icon = document.createElement("i");
        icon.classList.add("fa-regular");
        icon.classList.add("fa-circle-xmark");
        let anchor = document.createElement("a");
        anchor.appendChild(icon);
        let tdCross = document.createElement("td");
        tdCross.appendChild(anchor);

        tdCross.addEventListener("click", (e) => {
            let newCart = cart.filter(x => {
                return x !== cart[i];
            })
            localStorage.setItem("cart", JSON.stringify(newCart));
            window.location.reload()
        })
        
        tr.appendChild(tdCross);

        itemList.appendChild(tr);
    }
}

// let total = 0;
// for (let i = 0; i < cart.length; i++) {
//     console.log(cart[i])
//     total += cart[i].price;
// }


computeTotal();


{/* <tr>
    <td><img src="img/products/f1.jpg" alt=""></td>
    <td>Nike Sport Shoe</td>
    <td>Rs. 2300/-</td>
    <td><input type="number" value="1"></td>
    <td>Rs. 2300/-</td>
    <td><a href="#"><i class="fa-regular fa-circle-xmark"></i></a></td>
</tr> */}