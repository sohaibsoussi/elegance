let i = 0;
let data = 20;
let body = document.querySelector('section');

while(i<data){
    let table = ['🍗','🍩','🍔','🍺','🥐','🍪','🍸','🥄','🍝','👌','👌','⭐','🥖','🍓','🌭','🥓'];
    let emoji = document.createElement('span');
    emoji.style.left = Math.floor(0.8*Math.random() * screen.width)+"px";
    emoji.innerHTML = table[Math.floor(Math.random()*15)];
    emoji.style.fontSize = Math.floor(Math.random()* (50 - 20) + 20)+"px";
    emoji.style.animationDelay = Math.random()* -20 +'s';
    emoji.style.animationDuration = Math.random()*(25 - 6) + 6 +'s';
    body.appendChild(emoji);
    i++;
}