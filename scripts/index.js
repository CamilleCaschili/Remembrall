document.addEventListener("DOMContentLoaded", function () {
  var createButton = document.getElementById("createButton");
  var reminderList = document.getElementById("reminderList");
  var reminders = JSON.parse(localStorage.getItem("reminderArray")) || [];

  if (reminders) {
    for (var i = 0; i < reminders.length; i++) {
      var reminder = reminders[i];
      var card = document.createElement("div");
      card.classList.add("card");
      var title = document.createElement("h2");
      title.textContent = reminder.title;
      var date = document.createElement("p");
      date.textContent = reminder.date;
      card.appendChild(title);
      card.appendChild(date);
      reminderList.appendChild(card);
    }
  }

  createButton.addEventListener("click", function () {
    window.location.href = "../src/create.html";
  });
});
