$(document).ready(function () {
  //local storagedan değerleri çekmek için
  var ticket_a = localStorage.getItem("a");
  var ticket_b = localStorage.getItem("b");
  var ticket_c = localStorage.getItem("c");
  var DepartureDate = localStorage.getItem("DepartureDate");
  var ReturnDate = localStorage.getItem("ReturnDate");
  var CrusiningFrom = localStorage.getItem("CrusiningFrom");
  var CrusiningTo = localStorage.getItem("CrusiningTo");
  var subTotal_vip = localStorage.getItem("SubTotalVip");
  var subTotal_first = localStorage.getItem("SubTotalFirst");
  var subTotal_economy = localStorage.getItem("SubTotalEconomy");

  //bilet fiyatlarını string değil integer almak için
  var total_ticket =
    parseInt(subTotal_vip) +
    parseInt(subTotal_first) +
    parseInt(subTotal_economy);

  var departureDate = new Date(DepartureDate);
  var returnDate = new Date(ReturnDate);

  //tarihin görünen formatını değitirmek ve sadece gün-ay-yıl şeklinde almak için
  function getFormattedDate(date) {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return day + "/" + month + "/" + year;
  }

  let formatedDeparture = getFormattedDate(departureDate);
  let formatedReturn = getFormattedDate(returnDate);

  $("#cruising").text(CrusiningFrom);
  $("#cruising_to").text(CrusiningTo);
  $("#deparcure").text(formatedDeparture);
  $("#deparcure_return").text(formatedReturn);
  $("#vip").text("$" + subTotal_vip);
  $("#first").text("$" + subTotal_first);
  $("#economy").text("$" + subTotal_economy);

  $("#total").text("$" + total_ticket);

  /*$("#print_ticket").click(function (e) {
    console.log(subTotal_vip);
  });
  */
});
