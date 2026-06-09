const images = document.querySelectorAll(".gallery img");

images.forEach(img => {

img.addEventListener("click", ()=>{

let popup = document.createElement("div");

popup.style.position="fixed";
popup.style.top="0";
popup.style.left="0";
popup.style.width="100%";
popup.style.height="100%";
popup.style.background="rgba(0,0,0,.9)";
popup.style.display="flex";
popup.style.justifyContent="center";
popup.style.alignItems="center";

popup.innerHTML=`
<img src="${img.src}"
style="max-width:90%;max-height:90%;border-radius:15px">
`;

popup.onclick=()=>{
popup.remove();
}

document.body.appendChild(popup);

});

});
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});

/* Tutup menu setelah diklik */

const menuLinks = document.querySelectorAll("#menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});
