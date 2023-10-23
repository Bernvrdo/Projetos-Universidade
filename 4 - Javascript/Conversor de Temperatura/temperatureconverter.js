
function convertTemperature() {
    let temp = document.getElementById("temp").value;
    let tempunit = document.getElementById("tempunit").value;
    let result = document.getElementById("result");
    if (tempunit === "celsius") {
        result.innerHTML = (temp * 9 / 5 + 32).toFixed(2) + "°F";
    } else {
        result.innerHTML = ((temp - 32) * 5 / 9).toFixed(2) + "°C";
        
    }
}

var form = document.getElementById("temperature-form");

form.addEventListener("submit", convertTemperature);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  });
});

