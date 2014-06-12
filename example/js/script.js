$(document).ready(function() {
    var amountBTC = $("#amountBTC");
    amountBTC.keyup(function(e) {
        $(".resultUSD").text(amountBTC.val()*USDrate+" USD");

        $(".resultEUR").text(amountBTC.val()*EURrate+" EUR");

        $(".resultGBP").text(amountBTC.val()*GBPrate+" GBP");
    });
});