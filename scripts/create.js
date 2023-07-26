document.addEventListener("DOMContentLoaded", function () {
  var reminderArray = JSON.parse(localStorage.getItem("reminderArray")) || [];
  var backButton = document.getElementById("backButton");
  var addReminderButton = document.getElementById("addReminderButton");
  var clearButton = document.getElementById("clearButton");
  var titleReminder = document.getElementById("titleReminder");
  var dateTimeReminder = document.getElementById("dateTimeInput");

  backButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  addReminderButton.addEventListener("click", function () {
    var reminder = {
      title: titleReminder.value,
      date: dateTimeReminder.value
    };
    if (reminder.title != "" && reminder.date != "") {
      reminderArray.push(reminder);
      titleReminder.value = "";
      dateTimeReminder.value = "";
      localStorage.setItem("reminderArray", JSON.stringify(reminderArray));
      alert("Reminder added!");
    } else {
      alert("Please fill out all fields.");
    };
  });

  clearButton.addEventListener("click", function () {
    localStorage.removeItem("reminderArray");
    reminderArray = [];
    alert("Reminders cleared!");
  });
});