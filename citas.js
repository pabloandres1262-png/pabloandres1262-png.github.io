
document.addEventListener('DOMContentLoaded', () => {
  
    const hoy = new Date().toISOString().split('T')[0];
    const calendario = document.getElementById('fecha');

    if (calendario) {
        calendario.setAttribute('min', hoy);
       
        calendario.value = hoy;
        console.log("Restricción de fecha aplicada: " + hoy);
    }
});