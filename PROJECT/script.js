const form=document.querySelector("#form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const eventTitle=document.querySelector("#eventTitle").value;
    const eventDate=document.querySelector("#eventDate").value;
    const eventCategory=document.querySelector("#eventCategory").value;
    const Description=document.querySelector("#Description").value;
    console.log(eventTitle,eventDate,eventCategory,Description);
})