const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");

if(bar){
  bar.addEventListner("click",()=>{
    nav.classList.add("active");
  })
}
