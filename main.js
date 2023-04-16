//1. create 2 boxes
//2. make dropdown list
//3. currency data

//4. change of item when selected on dropdown menu
//5. type in price to exchange currency
//6. if item is selected again it is then transitied
//7. changing from bottom box still changes result, viseversa.

let currencyRatio= {
    USD:{
        KRW:1313.17,
        USD:1,
        AUD:1.47,
        unit:"dollars"
    },
    KRW:{
        KRW:1,
        USD:0.00076,
        AUD:0.0011,
        unit:"won"
    },
    AUD:{
        AUD:1,
        USD:0.68,
        KRW:891.31,
        unit:"dollars"
    }
}
let fromCurrency = "USD";
let textCurrency = "USD";
let krwCurrency = "Won";
let audCurrency = "Dollars";
let usdCurrency = "Dollars";

//from 
document.querySelectorAll("#from-currency-list a").forEach((menu) =>
menu.addEventListener("click", function() {
    document.getElementById("from-button").textContent=this.textContent;

    fromCurrency = this.textContent;
    convert()
})
);

//to
document.querySelectorAll("#to-currency-list a")
.forEach((menu)=>menu.addEventListener("click",function() {
    document.getElementById("to-button").textContent =this.textContent
    toCurrency = this.textContent;
    convert()
}));

//convert currency
function convert(){
    let amount = document.getElementById("from-input").value
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
    console.log("answer!", convertedAmount);

    document.getElementById("to-input").value = convertedAmount;
}

//change to won when KRW clicked
document.querySelectorAll("#from-KRW").forEach((menu) =>
menu.addEventListener("click", function() {
    document.getElementById("from-input-dollars").textContent = krwCurrency;
})
);

//change from won to AUD dollars
document.querySelectorAll("#from-AUD").forEach((menu) =>
menu.addEventListener("click", function() {
    document.getElementById("from-input-dollars").textContent = audCurrency;
})
);

//change from won to USD dollars
document.querySelectorAll("#from-USD").forEach((menu) =>
menu.addEventListener("click", function() {
    document.getElementById("from-input-dollars").textContent = usdCurrency;
})
);

//change the dollar sign to won
document.querySelectorAll("#to-KRW")
.forEach((menu)=>menu.addEventListener("click",function() {
    document.getElementById("to-input-dollars").textContent = krwCurrency;
}));

//change the won sign to AUD-dollars again.
document.querySelectorAll("#to-AUD")
.forEach((menu)=>menu.addEventListener("click",function() {
    document.getElementById("to-input-dollars").textContent = audCurrency;
}));

//change the won sign to USD-dollars again.
document.querySelectorAll("#to-USD")
.forEach((menu)=>menu.addEventListener("click",function() {
    document.getElementById("to-input-dollars").textContent = usdCurrency;
}));