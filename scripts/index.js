document.addEventListener("DOMContentLoaded", function () {
  let reminders = []

  var clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", function () {
    localStorage.clear();
    reminders = [];
  });
  
  var addButton = document.getElementById("addButton");
  addButton.addEventListener("click", function () {
    reminders.push("test2"); // Push a new item into the array
    localStorage.setItem("reminder", JSON.stringify(reminders)); // Store the last item in localStorage
  });

  var getButton = document.getElementById("getButton");
  getButton.addEventListener("click", function () {
    var data = JSON.parse(localStorage.getItem("reminder")); // Get the last item from localStorage
    alert(data);
  });

  var createButton = document.getElementById("createButton");
  createButton.addEventListener("click", function () {
    window.location.href = "../src/create.html";
  });
});
