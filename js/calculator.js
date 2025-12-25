function calculateCost() {
    let cementBags = document.getElementById("cement").value;
    let steelKg = document.getElementById("steel").value;

    // Approx rates (change anytime)
    let cementRate = 400; // per bag
    let steelRate = 65;   // per kg

    if (cementBags === "" || steelKg === "") {
        document.getElementById("result").innerText =
            "Please enter cement and steel quantity";
        return;
    }

    let cementCost = cementBags * cementRate;
    let steelCost = steelKg * steelRate;

    let totalCost = cementCost + steelCost;

    document.getElementById("result").innerText =
        "Estimated Cost: ₹" + totalCost +
        " (Final price may vary. Contact Shyam Steel)";
}
