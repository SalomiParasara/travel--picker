document.getElementById("tripForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect form data
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const depart = document.getElementById("depart").value;
  const ret = document.getElementById("return").value || "Flexible";
  const travellers = document.getElementById("travellers").value;
  const budget = document.getElementById("budget").value;

  const interests = Array.from(document.querySelectorAll("input[name='interest']:checked"))
    .map(cb => cb.value);

  // Generate a simple suggestion
  let suggestion = `
    <p><strong>Route:</strong> ${from} → ${to}</p>
    <p><strong>Dates:</strong> ${depart} - ${ret}</p>
    <p><strong>Travellers:</strong> ${travellers}</p>
    <p><strong>Budget:</strong> Around ₹${budget}</p>
    <p><strong>Interests:</strong> ${interests.length ? interests.join(", ") : "Any"}</p>
    <hr>
  `;

  // Fun travel ideas (just demo logic)
  const ideas = {
    Goa: "Chill on the beaches, try water sports, and enjoy nightlife.",
    Jaipur: "Explore forts, palaces, and heritage walks.",
    Kerala: "Go for backwater houseboats, ayurvedic spas, and beaches.",
    Manali: "Perfect for trekking, snow, and mountain adventures.",
    Andaman: "Snorkeling, scuba diving, and pristine beaches."
  };

  suggestion += `<p><strong>Our Tip:</strong> ${ideas[to] || "Explore freely, lots to see!"}</p>`;

  // Show result
  const results = document.getElementById("results");
  results.innerHTML = `<h2>Suggested trips</h2>${suggestion}`;
});
