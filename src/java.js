let saveButton = document.querySelector("#save-event");
let cancelButton = document.querySelector("#cancel-event");


let eventTitle = document.querySelector("#event-name");
let startDate = document.querySelector("#start-date");
let endDate = document.querySelector("#end-date");
let guestName = document.querySelector("#guest-emails");
let eventDescription = document.querySelector("#description");  

saveButton.addEventListener("click", function() {
    let event = {
        title: eventTitle.value,
        start: startDate.value,
        end: endDate.value,
        guest: guestName.value,
        description: eventDescription.value
    };
    console.log(event);
    alert("Event saved successfully!");
});

cancelButton.addEventListener("click", function() {
    eventTitle.value = "";
    startDate.value = "";
    endDate.value = "";
    guestName.value = "";
    eventDescription.value = "";
    alert("Event creation cancelled!");
});