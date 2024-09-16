document.getElementById("agregar").addEventListener("click", function() {
    // Obtener el valor del campo de entrada
    const item = document.getElementById("item").value;
  
    // Verificar que el campo no esté vacío
    if (item.trim() !== "") {
      
      let contenedor = JSON.parse(localStorage.getItem("contenedor")) || []; // Obtener el listado de ítems desde localStorage
  
      contenedor.push(item); // Agregar el nuevo ítem al listado
  
      localStorage.setItem("contenedor", JSON.stringify(contenedor));  // Guardar el listado actualizado en localStorage

      updateContenedor();  // Actualizar la vista del listado
  
      // Limpiar el campo de entrada
      document.getElementById("item").value = "";
    } else {
      alert("Por favor, introduce un ítem.");
    }
  });
  
  // Función para actualizar la vista del listado
  function updateContenedor() { 
  
    const ul = document.getElementById("contenedor");  // Obtener el contenedor de la lista
  
    ul.innerHTML = ""; // Limpiar el contenido actual del ul
  
    const contenedor = JSON.parse(localStorage.getItem("contenedor")) || [];   // Obtener el listado de ítems desde localStorage
  
    // Crear los elementos li y añadirlos al ul
    contenedor.forEach(function(item) {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });
  }
  
  // Actualizar la vista al cargar la página (para mostrar ítems ya guardados)
  document.addEventListener("DOMContentLoaded", updateContenedor);
  