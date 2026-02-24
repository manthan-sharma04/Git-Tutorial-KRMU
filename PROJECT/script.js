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
const clearbtn=document.querySelector("#clearEvents");
clearbtn.addEventListener("click",()=>{
    const cards=document.querySelectorAll(".card");
    cards.forEach(card=>card.remove());
})

const sampleBtn=document.querySelector("#sampleEvents");
sampleBtn.addEventListener("click",()=>{
    const sampleEvents=[
        {title:"Techy 2026",date:"2026-03-15",category:"Conference",description:"Annual tech conference featuring keynote speakers and workshops."},
        {title:"JavaScript Workshop",date:"2026-04-10",category:"Workshop",description:"Hands-on workshop covering modern JavaScript frameworks."},
        {title:"Community Meetup",date:"2026-05-20",category:"Meetup",description:"Monthly community meetup for local developers."}
    ];
    sampleEvents.forEach(ev=>{
        const card=document.createElement("div");
        card.classList.add("card");
        card.innerHTML=`
            <button class="delete-btn">×</button>
            <h3>${ev.title}</h3>
            <p><strong>Date:</strong> ${ev.date}</p>
            <p><strong>Category:</strong> ${ev.category}</p>
            <p><strong>Description:</strong> ${ev.description}</p>
        `;
        eventsContainer.appendChild(card);
        card.querySelector(".delete-btn").addEventListener("click",()=>card.remove());
    });
})
document.addEventListener("keydown", (event)=>{
    let pressed=event.key;
    document.querySelector(".dom-div").textContent=`You pressed: ${pressed}`;
})
