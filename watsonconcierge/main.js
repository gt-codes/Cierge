function openConcierge() {
  window.location = "hotel_selection.html";
}
function backToHotelSelection() {
  window.location = "hotel_selection.html";
}
function goHome() {
  window.location = "home.html";
}

var hotelSelected = false;

$("#hotel-list li").click(function() {
  document.getElementById('selectHotelBtn').style.borderColor = "#4189FF";
  document.getElementById('selectHotelBtn').style.color = "#4189FF";
  hotelSelected = true;
});

function findReservationScreen() {
  if(hotelSelected == true) {
    window.location = "find_reservation.html";
  } else {
    alert("Please select a hotel before moving on.");
  }
}

function validateReservationID() {
  reservation = document.getElementById('reservationID');
  reservation.value = reservation.value.toUpperCase();
  if(reservation.value != "IBM2018") {
    reservation.className += "formInvalid";
    reservation.style.borderColor = "red";
    reservation.style.color = "red";
    alert("Invalid Reservation ID. Please try again.");
  } else {
    var icon = document.createElement("img");
    icon.src = "images/home.png";
    icon.alt = "Home";
    icon.id = "home_icon";

    reservation.style.className += "formValid";
    reservation.style.borderColor = "#1FCC08";
    reservation.style.color = "#1FCC08";
    document.getElementById('findReservation').innerHTML = "Home";
    document.getElementById('findReservation').appendChild(icon);
    document.getElementById('findReservation').id = "goHome";
    // document.getElementById('goHome').onclick = "goHome()";
    $("#goHome")[0].onclick = null;
    $("#goHome").click(function() { goHome() });
  }
}


function resetInput() {
  document.getElementById("reservationID").style.className = "";
  document.getElementById("reservationID").style.borderColor = "#525456";
  document.getElementById("reservationID").style.color = "#525456";
}

$("#reservationID").keyup(function(event){
  event.preventDefault();
  if (event.keyCode == 13) {
    validateReservationID();
  } else {
    resetInput();
    return;
  }
});
