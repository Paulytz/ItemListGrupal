document.getElementById("agregar").addEventListener("click", function() {
    // Obtener el valor del campo de entrada
    const item = document.getElementById("item").value;
  
    // Verificar que el campo no esté vacío
    if (item.trim() !== "") {
      // Obtener el listado de ítems desde localStorage (o crear uno nuevo si no existe)
      let contenedor = JSON.parse(localStorage.getItem("contenedor")) || [];
  
      // Agregar el nuevo ítem al listado
      contenedor.push(item);
  
      // Guardar el listado actualizado en localStorage
      localStorage.setItem("contenedor", JSON.stringify(contenedor));
  
      // Actualizar la vista del listado
      updateContenedor();
  
      // Limpiar el campo de entrada
      document.getElementById("item").value = "";
    } else {
      alert("Por favor, introduce un ítem.");
    }
  });
  
  // Función para actualizar la vista del listado
  function updateContenedor() {
    // Obtener el contenedor de la lista
    const ul = document.getElementById("contenedor");
  
    // Limpiar el contenido actual del ul
    ul.innerHTML = "";
  
    // Obtener el listado de ítems desde localStorage
    const contenedor = JSON.parse(localStorage.getItem("contenedor")) || [];
  
    // Crear los elementos li y añadirlos al ul
    contenedor.forEach(function(item) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  }
  
  // Actualizar la vista al cargar la página (para mostrar ítems ya guardados)
  document.addEventListener("DOMContentLoaded", updateContenedor);
  