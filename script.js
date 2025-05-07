document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("alertButton");
  if (button) {
    button.addEventListener("click", () => {
      alert("Hello from JavaScript!");
    });
  }
});
