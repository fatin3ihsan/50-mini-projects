const btn = document.getElementsByClassName("btn")[0];
const bar = document.getElementsByClassName('input')[0];
const search = document.querySelector('.search');

// btn.addEventListener('click',() =>{
//     if(bar.style.display === "none"){
//         bar.style.display = "inline";
//     }else{
//         bar.style.display = "none";
//     }
// })

btn.addEventListener('click', () =>{
    search.classList.toggle("active");
    // input.focus();
})