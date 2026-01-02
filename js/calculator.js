// Construction Cost Calculator
// Automatically calculates material quantities and cost based on area

function calculateCost() {
    var area = parseFloat(document.getElementById("area").value) || 0;
    var floors = parseInt(document.getElementById("floors").value) || 1;
    var buildingType = document.getElementById("buildingType").value || 'residential';

    var resultContainer = document.getElementById("resultContainer");

    // Validation
    if (area < 100) {
        resultContainer.innerHTML = '<div class="result-placeholder"><div class="result-icon">📊</div><p>Enter area size (minimum 100 sq.ft) to see material calculation</p></div>';
        return;
    }

    // Material Rates (approximate market rates)
    var cementRate = 400;    // per 50kg bag
    var steelRate = 65;      // per kg
    var crusherRate = 45;    // per CFT

    // Calculate total built-up area based on floors
    var totalArea = area * floors;

    // Building type multiplier
    var typeMultiplier = buildingType === 'commercial' ? 1.3 : 1;

    // Standard construction formulas:
    // Cement: 0.4 bags per sq.ft
    // TMT Steel: 4 kg per sq.ft (residential), 5 kg (commercial)
    // Crusher: 0.8 CFT per sq.ft

    var cementBags = Math.ceil(totalArea * 0.4 * typeMultiplier);
    var steelKg = Math.ceil(totalArea * (buildingType === 'commercial' ? 5 : 4));
    var crusherCFT = Math.ceil(totalArea * 0.8);

    // Calculate costs
    var cementCost = cementBags * cementRate;
    var steelCost = steelKg * steelRate;
    var crusherCost = crusherCFT * crusherRate;
    var totalCost = cementCost + steelCost + crusherCost;

    // Floor text
    var floorText = "Ground Floor";
    if (floors == 2) {
        floorText = "G+1 (2 Floors)";
    } else if (floors == 3) {
        floorText = "G+2 (3 Floors)";
    }

    // Format numbers with commas
    function formatNum(num) {
        return num.toLocaleString('en-IN');
    }

    // Build result HTML
    var html = '<div class="result-card">';
    html += '<div class="total-label">Estimated Total Cost</div>';
    html += '<div class="total-amount">₹' + formatNum(totalCost) + '</div>';

    html += '<div class="result-breakdown">';
    html += '<div class="breakdown-header"><span>📐 Total Area</span><span>' + formatNum(totalArea) + ' sq.ft</span></div>';
    html += '<div class="breakdown-header"><span>🏠 ' + floorText + '</span><span>' + (buildingType === 'commercial' ? 'Commercial' : 'Residential') + '</span></div>';
    html += '</div>';

    html += '<div style="margin: 15px 0; font-weight: 600; color: #f97316;">📦 Material Quantities:</div>';

    html += '<div class="result-breakdown">';
    html += '<div class="breakdown-item"><span>🧱 Cement (' + formatNum(cementBags) + ' bags)</span><span>₹' + formatNum(cementCost) + '</span></div>';
    html += '<div class="breakdown-item"><span>🔩 TMT Bar (' + formatNum(steelKg) + ' kg)</span><span>₹' + formatNum(steelCost) + '</span></div>';
    html += '<div class="breakdown-item"><span>🪨 Crusher (' + formatNum(crusherCFT) + ' CFT)</span><span>₹' + formatNum(crusherCost) + '</span></div>';
    html += '</div>';

    html += '<a href="https://wa.me/919999999999?text=Hi, I need quote for ' + area + ' sq.ft ' + floorText + ' construction. Cement: ' + cementBags + ' bags, TMT: ' + steelKg + ' kg, Crusher: ' + crusherCFT + ' CFT" class="action-btn" target="_blank" style="margin-top: 20px; display: block; text-align: center;">💬 Get Exact Quote</a>';

    html += '</div>';

    resultContainer.innerHTML = html;
}
