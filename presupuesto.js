document.getElementById("calculoPresupuesto").addEventListener("input", calcularPresupuesto);

function calcularPresupuesto() {
    let producto = parseFloat(document.getElementById("producto").value) || 0;
    let plazo = parseInt(document.getElementById("plazo").value) || 1;
    let descuento = plazo > 6 ? 0.9 : 1; // Aplica 10% de descuento si plazo > 6 meses

    let extras = document.querySelectorAll("fieldset input[type='checkbox']:checked");
    let extraTotal = 0;
    extras.forEach(extra => {
        extraTotal += parseFloat(extra.value) || 0;
    });

    let total = (producto + extraTotal) * descuento;
    document.getElementById("total").textContent = total.toFixed(2); // Mantiene el formato con 2 decimales
}

// Asegura que marcar la casilla de condiciones no afecte el cálculo del total
document.getElementById("condiciones").addEventListener("change", function () {
    if (!this.checked) {
        document.getElementById("total").textContent = "0.00";
    } else {
        calcularPresupuesto(); // Vuelve a calcular sin cambiar el precio
    }
});
document.getElementById("calculoPresupuesto").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue
    alert("Su solicitud ha sido enviada, en breves contactaremos contigo.");
    this.reset(); // Opcional: Resetea el formulario después de enviarlo
    document.getElementById("total").textContent = "0"; // Reinicia el presupuesto a 0€
});
