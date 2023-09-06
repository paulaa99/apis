document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('generar');
    const nombre = document.getElementById('nombre');
    const tipo = document.getElementById('tipo');
    const precio = document.getElementById('precio');
    const acc = document.getElementById('acc');

    boton.addEventListener('click', () => {
        // se hace el pedido cuando se clickea el botón
        fetch('https://www.boredapi.com/api/activity')
            .then(response => response.json())
            .then(data => {
                nombre.textContent = data.activity;
                tipo.textContent = data.type.toUpperCase();
                precio.textContent = data.price;
                acc.textContent = data.accessibility;
            })
            .catch(error => console.error('Error fetching data:', error));
    });
});
