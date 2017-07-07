$(document).ready(function() {
  $("button#submit").click(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var dateInput = $("#date").val();
    var whatToDoInput = $("#whatToDo").val();
    var timeInInput = $("#timeIn").val();
    var timeOutInput = $("#timeOut").val();

    $(".nameInput").text(nameInput);
    $(".dateInput").text(dateInput);
    $(".whatToDoInput").text(whatToDoInput);
    $(".timeInInput").text(timeInInput);
    $(".timeOutInput").text(timeOutInput);
    $("#receipt").show();
  });
});
