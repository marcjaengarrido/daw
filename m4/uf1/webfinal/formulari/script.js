document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector("form");
  
    formulario.addEventListener("submit", function (event) {
      event.preventDefault(); // esto es para atrapar el formulario y si se valuda todo pues se envía; si no nada
      if (revisar()) {
        formulario.submit();
      }
    });
  
    function revisar() {
      // 16 o mas
      const edadInput = formulario.querySelector(".edat");
      const edad = parseInt(edadInput.value);
      if (edad < 16 || edad > 130) {
        alert("Introduce una edad válida (entre 16 y 130 años)");
        return false;
      }
  
      // dni
      const dniInput = formulario.querySelector(".dni");
      const dniRegex = /^\d{8}[a-zA-Z]$/;
      if (!dniRegex.test(dniInput.value)) {
        alert("Introduce un DNI válido (11111111B)");
        return false;
      }
  
      // nombre
      const nombreInput = formulario.querySelector(".nom");
      const apellidoInput = formulario.querySelector(".cognoms");
      if (nombreInput.value.length < 2) {
        alert("Introduce un nombre válido (mas de 2 caracteres)");
        return false;
      } else if (apellidoInput.value.length < 2) {
        alert("Introduce un(os) apellido(s) válido(s) (mas de 2 caracteres)");
        return false;
      }
  
      // correo
      const correoInput = formulario.querySelector(".mail");
      const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!correoRegex.test(correoInput.value)) {
        alert("Introduce una dirección de correo electrónico permitida (correo@gmail.com)");
        return false;
      }
  
      return true;
    }
  });
  