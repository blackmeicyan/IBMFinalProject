function compute() {
    var principal = parseFloat(document.getElementById("principal").value);
    var deposit = parseFloat(document.getElementById("deposit").value);
    var frequency = document.getElementById("frequency").value;
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseFloat(document.getElementById("years").value);
    var result = document.getElementById("result");

    // Validation
    if (principal <= 0 || isNaN(principal)) {
        alert("Please enter a valid, positive initial amount!");
        document.getElementById("principal").focus();
        return;
    
    }

    if (isNaN(deposit) || deposit < 0) {
        deposit = 0; // Optional deposits allowed
    }

    // Convert annual rate to decimal
    var r = rate / 100;

    // Set compounding frequency
    var n = frequency === "monthly" ? 12 : 1;

    // Compound Interest on principal
    var compoundPrincipal = principal * Math.pow(1 + r / n, n * years);

    // Future value of a series (recurring deposits)
    var compoundDeposits = deposit * ((Math.pow(1 + r / n, n * years) - 1) / (r / n));

    // Total amount
    var total = compoundPrincipal + compoundDeposits;

    // Round to 2 decimal places
    total = total.toFixed(2);

    var year = new Date().getFullYear() + parseInt(years);

    result.innerHTML = `If you deposit <mark>$${principal}</mark> 
        with <mark>$${deposit}</mark> ${frequency} deposits,
        <br> at an interest rate of <mark>${rate}%</mark>, 
        <br> you will receive a total of <mark>$${total}</mark> 
        <br> in the year <mark>${year}</mark>.`;
}

function showCustomAlert(message) {
  document.getElementById("alertMessage").innerText = message;
  document.getElementById("customAlert").style.display = "block";
}

function hideCustomAlert() {
  document.getElementById("customAlert").style.display = "none";
}
