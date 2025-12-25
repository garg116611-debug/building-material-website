function calculateCost() {
    let cementBags = document.getElementById("cement").value;
    let steelKg = document.getElementById("steel").value;
    let floors = document.getElementById("floors").value;

    let cementRate = 400; // per bag
    let steelRate = 65;   // per kg

    if (cementBags === "" || steelKg === "") {
        document.getElementById("result").innerText =
            "Please enter cement and steel quantity";
        return;
    }

    let cementCost = cementBags * cementRate;
    let steelCost = steelKg * steelRate;

    let baseCost = cementCost + steelCost;

    // Floor multiplier
    let multiplier = 1;

    if (floors == 2) {
        multiplier = 1.8;
    } else if (floors == 3) {
        multiplier = 2.5;
    }

    let totalCost = baseCost * multiplier;

    document.getElementById("result").innerText =
        "Estimated Cost: ₹" + Math.round(totalCost) +
        " (" + floors + " floor building). Final price may vary. Contact Shyam Steel.";
}
