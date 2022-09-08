function myFunction() {
  var x = document.getElementById("toggle-bar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function searchBar() {
  const x = document.getElementById("search-bar-container");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

includeHTML();

function inputBtn() {
  let myInput = document.getElementById("name");
  let myInput2 = document.getElementById("email");
  let myInput3 = document.getElementById("content");
  let valid = document.getElementById("valid");

  if (
    myInput &&
    myInput.value &&
    myInput2 &&
    myInput.value &&
    myInput3 &&
    myInput3.value
  ) {
    valid.innerHTML = "Chúng tôi đã nhận được liên hệ của bạn.";
    valid.style.color = "green";
  } else {
    valid.innerHTML = "Bạn hãy điền đầy đủ những thông tin cần thiết ";
    valid.style.color = "red";
  }
}

function wcqib_refresh_quantity_increments() {
  jQuery(
    "div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)"
  ).each(function (a, b) {
    var c = jQuery(b);
    c.addClass("buttons_added"),
      c
        .children()
        .first()
        .before('<input type="button" value="-" class="minus" />'),
      c
        .children()
        .last()
        .after('<input type="button" value="+" class="plus" />');
  });
}
String.prototype.getDecimals ||
  (String.prototype.getDecimals = function () {
    var a = this,
      b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0;
  }),
  jQuery(document).ready(function () {
    wcqib_refresh_quantity_increments();
  }),
  jQuery(document).on("updated_wc_div", function () {
    wcqib_refresh_quantity_increments();
  }),
  jQuery(document).on("click", ".plus, .minus", function () {
    var a = jQuery(this).closest(".quantity").find(".qty"),
      b = parseFloat(a.val()),
      c = parseFloat(a.attr("max")),
      d = parseFloat(a.attr("min")),
      e = a.attr("step");
    (b && "" !== b && "NaN" !== b) || (b = 0),
      ("" !== c && "NaN" !== c) || (c = ""),
      ("" !== d && "NaN" !== d) || (d = 0),
      ("any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e)) ||
        (e = 1),
      jQuery(this).is(".plus")
        ? c && b >= c
          ? a.val(c)
          : a.val((b + parseFloat(e)).toFixed(e.getDecimals()))
        : d && b <= d
        ? a.val(d)
        : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())),
      a.trigger("change");
  });

function result() {
  let myInput = document.getElementById("name");
  let myInput2 = document.getElementById("email");
  let myInput3 = document.getElementById("phone-number");
  let myInput4 = document.getElementById("address");
  let myInput5 = document.getElementById("payment");

  if (
    myInput &&
    myInput.value &&
    myInput2 &&
    myInput.value &&
    myInput3 &&
    myInput3.value &&
    myInput4 &&
    myInput4.value &&
    myInput5 &&
    myInput5.value
  ) {
    const paymentContent = document.getElementById("payment-content");
    paymentContent.innerHTML = "THANH TOÁN THÀNH CÔNG";
    paymentContent.style.color = "green";
    paymentContent.style.fontSize = "20px";
    paymentContent.style.width = "100%";
    paymentContent.style.justifyContent = "center";
    const footer = document.querySelector("footer");
    footer.style.position = "absolute";
    footer.style.bottom = "0";
    footer.style.width = "100%";
  } else {
    document.getElementById("valid").innerHTML =
      "VUI LÒNG ĐIỀN ĐẦY ĐỦ THÔNG TIN";
  }
}

function addToCart() {
  var arr = document.getElementsByName("quantity");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseInt(arr[i].value)) total += parseInt(arr[i].value);
  }
  document.getElementById("badge").setAttribute("badge", total);
}

function coupon() {
  const voucher = document.getElementById("voucher");
  voucher.innerHTML = "Đã áp dụng mã giảm giá";
}
