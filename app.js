var url = "https://production.api.coindesk.com/v1/currency/ticker?currencies=ADA,BCH,BSV,BTC,BTG,DASH,DCR,DOGE,EOS,ETC,ETH,IOTA,LSK,LTC,NEO,QTUM,TRX,XEM,XLM,XMR,XRP,ZEC";

axios.get(url)
.then(function(res){
    var BTC = res.data.data.currency.BTC.quotes.USD;
    var LTC = res.data.data.currency.LTC.quotes.USD;
    var ETH = res.data.data.currency.ETH.quotes.USD;
    var Bvalue = BTC.change24Hr.value.toFixed(4); 
    var Lvalue = LTC.change24Hr.value.toFixed(4)
    var Evalue = ETH.change24Hr.value.toFixed(4);
    var B = document.getElementById("Bvalue");
    var L = document.getElementById("Lvalue");
    var E = document.getElementById("Evalue");
    var Bp = BTC.change24Hr.percent;
    var Lp = LTC.change24Hr.percent;
    var Ep = ETH.change24Hr.percent;

    console.log(res);

    document.getElementById("Bprice").textContent = BTC.price.toFixed(4) + " USD";
    document.getElementById("Lprice").textContent = LTC.price.toFixed(4) + " USD";
    document.getElementById("Eprice").textContent = ETH.price.toFixed(4) + " USD";
    document.getElementById("Bpercent").textContent = Bp.toFixed(3) + " %";
    document.getElementById("Lpercent").textContent = Lp.toFixed(3) + " %";
    document.getElementById("Epercent").textContent = Ep.toFixed(3) + " %";
    document.getElementById("time").textContent = res.data.timestamp;
    B.textContent = Bvalue + " USD";
    L.textContent = Lvalue + " USD";
    E.textContent = Evalue + " USD";
    check(Bvalue, B);
    check(Lvalue, L);
    check(Evalue, E);
    check(Bp, document.getElementById("Bpercent"));
    check(Lp, document.getElementById("Lpercent"));
    check(Ep, document.getElementById("Epercent"));


})

function check(value, cur){
    if(value < 0){
        cur.classList.remove("green");
        cur.classList.add("red");
    }
    else if(value > 0){
        cur.classList.remove("red");
        cur.classList.add("green");
    }
}