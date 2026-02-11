const form=document.querySelector("#form");
const eventsContainer=document.querySelector(".events-div");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const eventTitle=document.querySelector("#eventTitle").value;
    const eventDate=document.querySelector("#eventDate").value;
    const eventCategory=document.querySelector("#eventCategory").value;
    const Description=document.querySelector("#Description").value;
    console.log(eventTitle,eventDate,eventCategory,Description);

    const card=document.createElement("div");
    card.classList.add("card");
    card.innerHTML=`
        <button class="delete-btn">×</button>
        <h3>${eventTitle}</h3>
        <p><strong>Date:</strong> ${eventDate}</p>
        <p><strong>Category:</strong> ${eventCategory}</p>
        <p><strong>Description:</strong> ${Description}</p>
    `;
    eventsContainer.appendChild(card);
    
    const deleteBtn=card.querySelector(".delete-btn");
    deleteBtn.addEventListener("click",()=>{
        card.remove();
    });
    
    form.reset();
})

document.addEventListener("keydown", (event)=>{
    let pressed=event.key;
    document.querySelector(".dom-div").textContent=`You pressed: ${pressed}`;
})