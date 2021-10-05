fetch("JEOPARDY_QUESTIONS.json")
  .then(response => response.json())
  .then(data => {
    window.jeopardy = data;
  });

function skrivOutput(output) {
  // Her sættes output ind på siden:
  document.getElementById("output").value = output;
  // Til de nysgerrige, så kan du se dokumentationen for "document.getElementById(id)" her:
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
}