let mode=document.querySelector(".mode");
let back_color=document.querySelector(".shopping");
let boxs=document.querySelectorAll(".box");
let curr_color="light";

const change_color=()=>{
    if(curr_color==="light")
    {
        curr_color="dark_back";
        back_color.classList.add("dark_back");
        boxs.forEach(box =>{
            box.classList.add("dark_box");
        });
    }
    else
    {
        curr_color="light";
        back_color.classList.remove("dark_back");
        boxs.forEach(box =>{
            box.classList.remove("dark_box");
        });
    }
}

mode.addEventListener("click",change_color);