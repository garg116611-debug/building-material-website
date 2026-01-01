function calculateCost() {
    const cementBags = parseFloat(document.getElementById("cement").value) || 0;
    const steelKg = parseFloat(document.getElementById("steel").value) || 0;
    const floors = parseInt(document.getElementById("floors").value);
    const area = parseFloat(document.getElementById("area").value) || 0;

    const cementRate = 400; // per bag
    const steelRate = 65;   // per kg

    const resultContainer = document.getElementById("resultContainer");

    // Validation
    if (cementBags === 0 && steelKg === 0) {
        resultContainer.innerHTML = `
            <div class="result-placeholder">
                <div class="result-icon">⚠️</div>
                <p>Please enter cement or steel quantity</p>
            </div>
        `;
        return;
    }

    // Calculate costs
    const cementCost = cementBags * cementRate;
    const steelCost = steelKg * steelRate;
    const baseCost = cementCost + steelCost;

    // Floor multiplier
    let multiplier = 1;
    let floorText = "Ground Floor";
    if (floors == 2) {
        multiplier = 1.8;
        floorText = "G+1 (2 Floors)";
    } else if (floors == 3) {
        multiplier = 2.5;
        floorText = "G+2 (3 Floors)";
    }

    const totalCost = Math.round(baseCost * multiplier);

    // Format numbers with commas
    const formatNumber = (num) => num.toLocaleString('en-IN');

    // Render result card
    resultContainer.innerHTML = `
        <div class="result-card">
            <div class="total-label">Estimated Total Cost</div>
            <div class="total-amount">₹${formatNumber(totalCost)}</div>
            
            <div class="result-breakdown">
                <div class="breakdown-item">
                    <span>🧱 Cement (${cementBags} bags × ₹${cementRate})</span>
                    <span>₹${formatNumber(cementCost)}</span>
                </div>
                <div class="breakdown-item">
                    <span>🔩 Steel (${steelKg} kg × ₹${steelRate})</span>
                    <span>₹${formatNumber(steelCost)}</span>
                </div>
                <div class="breakdown-item">
                    <span>🏠 Building Type</span>
                    <span>${floorText}</span>
                </div>
                ${area > 0 ? `
                <div class="breakdown-item">
                    <span>📐 Area</span>
                    <span>${formatNumber(area)} sq.ft</span>
                </div>
                ` : ''}
            </div>
            
            <a href="https://wa.me/919999999999?text=Hi, I need a quote for ${cementBags} cement bags and ${steelKg}kg steel for a ${floorText} building" 
               class="action-btn" target="_blank" style="margin-top: 25px; display: inline-block; padding: 12px 25px; font-size: 0.9rem;">
                💬 Get Exact Quote
            </a>
        </div>
    `;
}
