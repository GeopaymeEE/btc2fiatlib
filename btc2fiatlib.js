var USDrate = 0;
var EURrate = 0;
var GBPrate = 0;

$(document).ready(function() {
    refreshExchangeRates();
});

function refreshExchangeRates() {
    $.getJSON("http://api.coindesk.com/v1/bpi/currentprice.json", function(data) {
        USDrate = data.bpi.USD.rate;
        EURrate = data.bpi.EUR.rate;
        GBPrate = data.bpi.GBP.rate;
    });
}