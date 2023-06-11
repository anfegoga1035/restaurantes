document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('restauranteForm');
  const nombreRestaurante = document.getElementById('nombreRestaurante');
  const descripcion = document.getElementById('descripcion');
  const direccion = document.getElementById('direccion');
  const imagen = document.getElementById('imagen');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (nombreRestaurante.value.trim() === '') {
      mostrarError(nombreRestaurante, 'Campo obligatorio');
    } else {
      limpiarError(nombreRestaurante);
    }

    if (descripcion.value.trim() === '') {
      mostrarError(descripcion, 'Campo obligatorio');
    } else {
      limpiarError(descripcion);
    }

    if (direccion.value.trim() === '') {
      mostrarError(direccion, 'Campo obligatorio');
    } else {
      limpiarError(direccion);
    }

    if (imagen.value.trim() === '') {
      mostrarError(imagen, 'Campo obligatorio');
    } else {
      limpiarError(imagen);
    }

    if (form.checkValidity() && nombreRestaurante.value.trim() !== '' && descripcion.value.trim() !== '' && direccion.value.trim() !== '' && imagen.value.trim() !== '') {
      alert('Producto creado');
      form.reset();
    }
  });

  function mostrarError(input, mensaje) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = mensaje;
    input.classList.add('is-invalid');
  }

  function limpiarError(input) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = '';
    input.classList.remove('is-invalid');
  }
});
