let span = document.getElementsByTagName("span");
let i;
let header = document.getElementsByClassName("heading");
let portfolio = document.getElementById("portfolio");

header = header[0];
let k;
span = Array.from(span);
console.log(span[0]);
window.addEventListener("scroll",function (){
    if (scrollY<30){
        header.style = `height: ${70-scrollY}px;`;
        k = 70-scrollY;
    }
    else {
        header.style = `height: ${k}px;`;
    }

});
j=1;
i=0;
    setInterval(() => {
        if (i==span.length){
            i = 0;
        }
        span[i].style = `background-image: conic-gradient(from ${j}deg,red,blue,green);`;
        
        i++;
        j= j+1;
    }, 0.01);
    let time = 1;
    setInterval(() => {
        
        portfolio.style = `background-image: url('./images/img${time}.jpg'); background-size: cover;
        background-position: center center;`;
        time++;
       
        if (time==4){
            time = 1;
        }
       
    }, 5000);
