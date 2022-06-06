const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close");
const navbar = document.querySelector(".navbar");

menuBtn.onclick = ()=>{
    navbar.classList.add("active");
}
closeBtn.onclick = ()=>{
    navbar.classList.remove("active");
}

let mainImg = document.querySelector("#mainImg");
const smallImg = document.querySelectorAll(".small-img");

const products = document.querySelectorAll(".product .box");

products.forEach(product => {
    product.setAttribute("onclick", "goLocation(this)");
});

// let arr = ["img/products/f1.jpg", "img/products/f2.jpg", "img/products/f3.jpg", "img/products/f4.jpg", "img/products/f5.jpg", "img/products/f6.jpg", "img/products/f7.jpg", "img/products/f8.jpg",
// "img/products/n1.jpg","img/products/n2.jpg", "img/products/n3.jpg", "img/products/n4.jpg", "img/products/n5.jpg", "img/products/n6.jpg", "img/products/n7.jpg", "img/products/n8.jpg"];

let productImg;

function goLocation(ele){
    window.location.href = "product.html";
    productImg = ele.querySelector("img").src;
}

// window.onload = ()=>{
//     if(mainImg){
//         console.log(productImg);
//         // for(let i =0; i< arr.length; i++){
//         //     if(arr[i] == productImg){
//         //         mainImg.src = arr[i];
//         //     }
//         // }
//     }
// }

smallImg.forEach(img => {
    img.setAttribute("onclick", "changeImg(this)");
});

function changeImg(ele){
    mainImg.src = ele.src;
}