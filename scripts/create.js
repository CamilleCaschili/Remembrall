document.addEventListener("DOMContentLoaded", function () {
var backButton = document.getElementById("backButton");
var addReminderButton = document.getElementById("addReminderButton");
var reminderText = document.getElementById("reminderText");
var reminderArray = [];

  backButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  addReminderButton.addEventListener("click", function () {
    reminderArray.push(reminderText.value);
    reminderText.value = "";
    localStorage.setItem("reminderArray", JSON.stringify(reminderArray));
    alert("Reminder added!");
  });
});