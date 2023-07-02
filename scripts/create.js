document.addEventListener("DOMContentLoaded", function () {
  var reminderArray = JSON.parse(localStorage.getItem("reminderArray")) || [];
  var backButton = document.getElementById("backButton");
  var addReminderButton = document.getElementById("addReminderButton");
  var reminderText = document.getElementById("reminderText");
  var clearButton = document.getElementById("clearButton");

  backButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  addReminderButton.addEventListener("click", function () {
    reminderArray.push(reminderText.value);
    reminderText.value = "";
    localStorage.setItem("reminderArray", JSON.stringify(reminderArray));
    alert("Reminder added!");
  });

  clearButton.addEventListener("click", function () {
    localStorage.removeItem("reminderArray");
    reminderArray = [];
    alert("Reminders cleared!");
  });
});