function calculateSeverity() {
    const functionalityScore = parseFloat(document.getElementById("functionality").value);
    const frequencyScore = parseFloat(document.getElementById("frequency").value);
    const workaroundsScore = parseFloat(document.getElementById("workarounds").value);
    const affectedUsersScore = parseFloat(document.getElementById("affectedUsers").value);
  
    const medianScore = (functionalityScore + frequencyScore + workaroundsScore + affectedUsersScore) / 4;
    const severityLevel = getSeverityLevel(medianScore);
  
    document.getElementById("medianScore").textContent = medianScore.toFixed(4);
    document.getElementById("severityLevel").textContent = severityLevel;
    updateSeverityColor(severityLevel);
  }
  
  function getSeverityLevel(score) {
    if (score >= 3.6666) {
      return "High";
    } else if (score >= 2.3333) {
      return "Medium";
    } else {
      return "Low";
    }
  }
  
  function updateSeverityColor(severityLevel) {
    const severityElement = document.getElementById("severityLevel");
    severityElement.classList.remove("severity-low", "severity-medium", "severity-high");
    if (severityLevel === "High") {
      severityElement.classList.add("severity-high");
    } else if (severityLevel === "Medium") {
      severityElement.classList.add("severity-medium");
    } else {
      severityElement.classList.add("severity-low");
    }
  }
  
  // Add event listeners to the sliders
  document.getElementById("functionality").addEventListener("input", calculateSeverity);
  document.getElementById("frequency").addEventListener("input", calculateSeverity);
  document.getElementById("workarounds").addEventListener("input", calculateSeverity);
  document.getElementById("affectedUsers").addEventListener("input", calculateSeverity);
  
  // Calculate initial severity on page load
  calculateSeverity();
  