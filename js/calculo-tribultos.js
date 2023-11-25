total - contribuicao;
$(function () {
  $("#remuneracao").maskMoney({
    symbol: "R$ ",
    showSymbol: true,
    thousands: ".",
    decimal: ",",
    symbolStay: true,
  });
  $("#total").maskMoney({
    symbol: "R$ ",
    showSymbol: true,
    thousands: ".",
    decimal: ",",
    symbolStay: true,
  });
  $("#primicia").maskMoney({
    symbol: "R$ ",
    showSymbol: true,
    thousands: ".",
    decimal: ",",
    symbolStay: true,
  });
  $("#dizimo").maskMoney({
    symbol: "R$ ",
    showSymbol: true,
    thousands: ".",
    decimal: ",",
    symbolStay: true,
  });
  $("#oferta_minis_socorro").maskMoney({
    symbol: "R$ ",
    showSymbol: true,
    thousands: ".",
    decimal: ",",
    symbolStay: true,
  });
  $("#oferta_gratidao").maskMoney({
    symbol: "R$ ",
    showSymbol: true,
    thousands: ".",
    decimal: ",",
    symbolStay: true,
  });
  $("#semeadura").maskMoney({
    symbol: "R$ ",
    showSymbol: true,
    thousands: ".",
    decimal: ",",
    symbolStay: true,
  });
  $("#oferta_israel").maskMoney({
    symbol: "R$ ",
    showSymbol: true,
    thousands: ".",
    decimal: ",",
    symbolStay: true,
  });
  $("#oferta_mantenedores").maskMoney({
    symbol: "R$ ",
    showSymbol: true,
    thousands: ".",
    decimal: ",",
    symbolStay: true,
  });
});

function valorCalculavel(valor) {
  valor = valor.replace("R$ ", "");
  valor = valor.replace(".", "");
  valor = valor.replace(",", ".");
  return parseFloat(valor);
}

function number_format(number, decimals, dec_point, thousands_sep) {
  var n = number,
    prec = decimals;

  var toFixedFix = function (n, prec) {
    var k = Math.pow(10, prec);
    return (Math.round(n * k) / k).toString();
  };

  n = !isFinite(+n) ? 0 : +n;
  prec = !isFinite(+prec) ? 0 : Math.abs(prec);
  var sep = typeof thousands_sep === "undefined" ? "," : thousands_sep;
  var dec = typeof dec_point === "undefined" ? "." : dec_point;

  var s = prec > 0 ? toFixedFix(n, prec) : toFixedFix(Math.round(n), prec); //fix for IE parseFloat(0.55).toFixed(0) = 0;
  var abs = toFixedFix(Math.abs(n), prec);
  var _, i;

  if (abs >= 1000) {
    _ = abs.split(/\D/);
    i = _[0].length % 3 || 3;

    _[0] =
      s.slice(0, i + (n < 0)) + _[0].slice(i).replace(/(\d{3})/g, sep + "$1");
    s = _.join(dec);
  } else {
    s = s.replace(".", dec);
  }

  var decPos = s.indexOf(dec);
  if (prec >= 1 && decPos !== -1 && s.length - decPos - 1 < prec) {
    s += new Array(prec - (s.length - decPos - 1)).join(0) + "0";
  } else if (prec >= 1 && decPos === -1) {
    s += dec + new Array(prec).join(0) + "0";
  }
  return "R$ " + s;
}

function calcula() {
  document.getElementById("primicia").value = number_format(
    Math.ceil(
      parseFloat(
        valorCalculavel(document.getElementById("remuneracao").value)
      ) / 30
    ),
    2,
    ",",
    "."
  );

  document.getElementById("dizimo").value = number_format(
    Math.ceil(
      parseFloat(
        valorCalculavel(document.getElementById("remuneracao").value) -
          valorCalculavel(document.getElementById("primicia").value)
      ) *
        (10 / 100)
    ),
    2,
    ",",
    "."
  );

  // document.getElementById("oferta_minis_socorro").value = number_format(
  //   Math.ceil(
  //     parseFloat(
  //       valorCalculavel(document.getElementById("remuneracao").value)
  //     ) *
  //       (1 / 100)
  //   ),
  //   2,
  //   ",",
  //   "."
  // );

  document.getElementById("oferta_gratidao").value = number_format(
    Math.ceil(
      parseFloat(
        valorCalculavel(document.getElementById("remuneracao").value)
      ) *
        (0.1 / 100)
    ),
    2,
    ",",
    "."
  );

  document.getElementById("semeadura").value = number_format(
    Math.ceil(
      parseFloat(
        valorCalculavel(document.getElementById("remuneracao").value)
      ) *
        (0.4 / 100)
    ),
    2,
    ",",
    "."
  );

  // document.getElementById("oferta_israel").value = number_format(
  //   Math.ceil(
  //     parseFloat(
  //       valorCalculavel(document.getElementById("remuneracao").value)
  //     ) *
  //       (0.8 / 100)
  //   ),
  //   2,
  //   ",",
  //   "."
  // );

  document.getElementById("total").value = number_format(
    parseFloat(
      valorCalculavel(document.getElementById("primicia").value) +
        valorCalculavel(document.getElementById("dizimo").value) +
        // valorCalculavel(document.getElementById("oferta_minis_socorro").value) +
        valorCalculavel(document.getElementById("oferta_gratidao").value)
      // valorCalculavel(document.getElementById("semeadura").value) +
      // valorCalculavel(document.getElementById("oferta_israel").value)
    ),
    2,
    ",",
    "."
  );
}

function calcula2() {
  document.getElementById("total").value = number_format(
    parseFloat(
      valorCalculavel(document.getElementById("primicia").value) +
        valorCalculavel(document.getElementById("dizimo").value) +
        valorCalculavel(document.getElementById("oferta_minis_socorro").value) +
        valorCalculavel(document.getElementById("oferta_gratidao").value) +
        valorCalculavel(document.getElementById("semeadura").value) +
        valorCalculavel(document.getElementById("oferta_israel").value) +
        valorCalculavel(document.getElementById("oferta_mantenedores").value)
    ),
    2,
    ",",
    "."
  );
}
