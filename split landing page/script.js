const play = document.querySelector(".playstation");
const xbox = document.querySelector(".x-box");

play.addEventListener("mouseenter", () => {
    xbox.style.width = "70%"
    play.style.width = "150%";
})

xbox.addEventListener("mouseenter", () => {
    play.style.width = '50%';
    xbox.style.width ="150%";
})

const middle = () =>{
    play.style.width = "50%";
    xbox.style.width = "50%";
}

play.addEventListener("mouseleave", middle);
xbox.addEventListener("mouseleave", middle);