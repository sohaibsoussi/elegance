
// const change1 = document.getElementById('link1');
// change1.addEventListener("click",()=>{
// location.replace("index.html");
// });
// const change2 = document.getElementById('link2');
// change2.addEventListener("click",()=>{
// location.replace("carte.html")
// });
// const change3 = document.getElementById('link3');
// change3.addEventListener("click",()=>{
// location.replace("contact.html")
// });
function toggleMenu(){
    var menuToggle = document.querySelector(".toggle");
    var navigation = document.querySelector(".navigation");
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}