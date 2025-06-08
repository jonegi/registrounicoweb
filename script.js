
let currentStep = 0;
const steps = document.querySelectorAll(".step");
const cruInput = document.getElementById("cru");

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("active", i === index);
  });
  if (index === 2) updateResumen();
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  }
}
function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
}

function updateResumen() {
  let resumen = document.getElementById("resumen");
  const base = 100;
  const extra = cruInput.value.trim() === "" ? 25 : 0;
  const total = base + extra;
  const totalIVA = total * 1.21;
  resumen.innerHTML = `
    <p>Registro inicial: ${base} € + IVA</p>
    ${extra > 0 ? `<p>Nota Simple: ${extra} € + IVA</p>` : ""}
    <strong>Total: ${totalIVA.toFixed(2)} € (IVA incluido)</strong>
  `;
}

document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Integrar aquí pago con Stripe. Total: ver resumen.");
});
