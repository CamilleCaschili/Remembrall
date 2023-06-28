document.addEventListener("DOMContentLoaded", function () {
  var createButton = document.getElementById("createButton");
  var reminderList = document.getElementById("reminderList");
  var reminders = JSON.parse(localStorage.getItem("reminderArray")) || [];

  for (var i = 0; i < reminders.length; i++) {
    var reminder = reminders[i];
    var li = document.createElement("li");
    li.textContent = reminder;
    reminderList.appendChild(li);
  }

  createButton.addEventListener("click", function () {
    window.location.href = "../src/create.html";
  });
});
