const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const close = document.createElement('img');
close.src = "./style/close.png";
close.style.height = "30px";
close.style.width = "30px";
close.style.position = "fixed";
close.style.top = "24px";
close.style.right = "40px";
close.style.zIndex = "1000";
close.style.cursor = "pointer"


const images = document.querySelectorAll('.the3pic img ');
images.forEach(image =>{
    image.addEventListener('click',e =>{
        lightbox.classList.add("active");
        const img = document.createElement('img');
        img.src = image.src;
        img.style.borderRadius = "5px";
        img.style.objectFit = "cover";
        img.style.border = "1.5Px solid #D9BC8A";
        img.style.boxShadow = "12px 12px 32px -7px rgba(0,0,0,0.69)"; 
        while(lightbox.firstChild){
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
        lightbox.appendChild(close);
        close.addEventListener('click',e=>{
            if(e.target !== e.currentTarget)
                return
            lightbox.classList.remove("active");
        })
        
    });
});

