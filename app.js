document.getElementById("button").addEventListener("click", calculatingCompoundInterest);
let form = document.getElementById("form");
let containerAlert = document.getElementById("container-alert");
let containerDanger = document.getElementById("container-danger");
// C (1 + interes)tiempo;

function changeItem(item) {
    let cant;
    let c = document.getElementById("number-time").value;
    if (item === "Meses") {
        cant = parseInt(c);
    } else if (item === "Años") {
        cant = c * 12;
    }
    return cant;
}

function convertInterest(interest) {
    return interest / 100;
}

function calculatingCompoundInterest() {
    let interest = document.getElementById("interest").value;
    let initialCapital = parseInt(document.getElementById("initial-capital").value);
    let valueMonth = document.getElementById("value-month").value;
    let convertedInterest = convertInterest(interest);
    let convertTime = changeItem(valueMonth);
    let totalInterest = convertedInterest * convertTime;
    let totalCapital = initialCapital * totalInterest;
    let totalFinal = new Intl.NumberFormat('es-CO').format(totalCapital + initialCapital);
    if (interest === "" || initialCapital === "" || valueMonth === "") {
        containerAlert.style.display = "none";
        containerDanger.style.display = "flex";
        form.reset();
    } else {
        containerDanger.style.display = "none";
        containerAlert.style.display = "flex";
        containerAlert.innerHTML = `<div>El monto total de ${convertTime} Meses es: ${totalFinal}</div>`;
        form.reset();
    }
}
