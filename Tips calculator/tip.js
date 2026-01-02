function calculateTip() {
    let billAmount = parseFloat(document.getElementById("bill").value);
    let tipPercentage = parseFloat(document.getElementById("tip").value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }
    
    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = billAmount + tipAmount;
    
    document.getElementById("result").innerText = `Tip: $${tipAmount.toFixed(2)} | Total: $${totalAmount.toFixed(2)}`;
}

function reviewTip() {
    let tipPercentage = parseFloat(document.getElementById("tip").value);
    let reviewMessage = "";
    
    if (tipPercentage < 10) {
        reviewMessage = "Consider tipping a little more if service was good.";
    } else if (tipPercentage >= 10 && tipPercentage <= 20) {
        reviewMessage = "That's a fair tip!";
    } else {
        reviewMessage = "You're very generous!";
    }
    
    document.getElementById("review").innerText = reviewMessage;
}