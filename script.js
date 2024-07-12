let scrollContainer = document.querySelector(".images");
let backbtn = document.getElementById("back");
let forthbtn = document.getElementById("forth");

forthbtn.addEventListener("click" , () => {
    scrollContainer.scrollLeft += 800;
});
backbtn.addEventListener("click" , () => {
    scrollContainer.scrollLeft -= 800;
});