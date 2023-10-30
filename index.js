$(document).ready(function () {
  //bilet alım satım için
  var ticket_a = parseInt($("#vip_ticket").val());
  var ticket_b = parseInt($("#first_class_ticket").val());
  var ticket_c = parseInt($("#economy_ticket").val());

  var subTotal_vip;
  var subTotal_first;
  var subTotal_economy;
  var subTotal;

  var charge;
  var total;

  var selectedCrusiningFrom;
  var selectedCrusiningTo;

  //gidiş-dönüş tarihlerinin değerlerini almak için
  var departureDate = $("#departure_date").val();
  var returnDate = $("#return_date").val();

  //günümüzün tarihini ve seçili gidiş-dönüş tarihlerini almak için
  var today = new Date();
  var selectedDepartureDate = new Date(departureDate);
  var selectedReturnDate = new Date(returnDate);

  //gidiş tarihi ve günümüz karşılaştırması
  $("#departure_date").change(function (e) {
    selectedDepartureDate = new Date(e.target.value);
    if (selectedDepartureDate < today) {
      alert("Gidiş tarihi bugünden önce olamaz.");
      $("#departure_date").val(""); // gidiş tarihini temizle
      return;
    }
  });

  //dönüş-günümüz ve dönüş-gidiş karşılaştırması
  $("#return_date").change(function (e) {
    selectedReturnDate = new Date(e.target.value);
    if (selectedReturnDate < selectedDepartureDate) {
      alert("Dönüş tarihi gidiş tarihinden önce olamaz.");
      $("#return_date").val(""); // dönüş tarihini temizle
      return;
    }
    if (selectedReturnDate < today) {
      alert("Dönüş tarihi bugünden önce olamaz.");
      $("#return_date").val(""); // dönüş tarihini temizle
      return;
    }
  });

  //bilet sayısı +/- için
  $("#increase-button-a").click(function () {
    ticket_a++;
    $("#vip_ticket").val(ticket_a);
  });

  $("#decrease-button-a").click(function () {
    if (ticket_a > 0) {
      ticket_a--;
      $("#vip_ticket").val(ticket_a);
    }
  });
  $("#increase-button-b").click(function () {
    ticket_b++;
    $("#first_class_ticket").val(ticket_b);
  });
  $("#decrease-button-b").click(function () {
    if (ticket_b > 0) {
      ticket_b--;
      $("#first_class_ticket").val(ticket_b);
    }
  });
  $("#increase-button-c").click(function () {
    ticket_c++;
    $("#economy_ticket").val(ticket_c);
  });
  $("#decrease-button-c").click(function () {
    if (ticket_c > 0) {
      ticket_c--;
      $("#economy_ticket").val(ticket_c);
    }
  });
  $("#crusining_from, #crusining_to").change(function () {
    selectedCrusiningFrom = $("#crusining_from").val();
    selectedCrusiningTo = $("#crusining_to").val();

    //console.log(selectedCrusiningFrom);
    //console.log(selectedCrusiningTo);

    if (selectedCrusiningFrom == selectedCrusiningTo) {
      alert("Gidiş-geliş konumları aynı olamaz");
      $("#crusining_from").val("");
      $("#crusining_to").val("");
    }
  });

  $("#vip_ticket,button").click(function () {
    subTotal_vip = ticket_a * 7000;
    //console.log(ticket_a);
    //console.log(subTotal_vip);
  });

  $("#first_class_ticket,button").click(function () {
    subTotal_first = ticket_b * 1500;
    //console.log(ticket_b);
    //console.log(subTotal_first);
  });

  $("#economy_ticket,button").click(function () {
    subTotal_economy = ticket_c * 1000;
    //console.log(ticket_c);
    //console.log(subTotal_economy);
  });

  $("button").click(function () {
    subTotal = subTotal_vip + subTotal_first + subTotal_economy;
    charge = subTotal * 0.1;
    total = charge + subTotal;

    $("#subtotal").val("$" + subTotal);
    $("#charge_10_vat").val("$" + charge);
    $("#total").val("$" + total);
  });

  $("#book_now").click(function () {
    if (
      selectedCrusiningFrom != "" &&
      selectedCrusiningTo != "" &&
      selectedDepartureDate != "" &&
      selectedReturnDate != "" &&
      (ticket_a || ticket_b || ticket_c) != ""
    ) {
      window.location.href = "second.html";
      localStorage.setItem("a", ticket_a);
      localStorage.setItem("b", ticket_b);
      localStorage.setItem("c", ticket_c);
      localStorage.setItem("DepartureDate", selectedDepartureDate);
      localStorage.setItem("ReturnDate", selectedReturnDate);
      localStorage.setItem("CrusiningFrom", selectedCrusiningFrom);
      localStorage.setItem("CrusiningTo", selectedCrusiningTo);
      localStorage.setItem("SubTotalVip",subTotal_vip);
      localStorage.setItem("SubTotalFirst",subTotal_first);
      localStorage.setItem("SubTotalEconomy",subTotal_economy);

    } 
    else {
      alert("Boşlukları doldurun...");
    }
  });
});
