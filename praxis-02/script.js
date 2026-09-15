const inputNota = document.getElementById('inputNota');
const btnEvaluar = document.getElementById('btnEvaluar');
const mensajeResultado = document.getElementById('mensajeResultado');

btnEvaluar.addEventListener('click', () => {
    const nota = parseFloat(inputNota.value);

    if (isNaN(nota) || nota < 0 || nota > 20) {
        mensajeResultado.textContent = 'Ingresa una nota válida entre 0 y 20.';
        mensajeResultado.style.color = 'gray';
    } else if (nota >= 18) {
        mensajeResultado.textContent = 'Excelente';
        mensajeResultado.style.color = 'green';
    } else if (nota >= 14) {
        mensajeResultado.textContent = 'Bueno';
        mensajeResultado.style.color = 'blue';
    } else if (nota >= 11) {
        mensajeResultado.textContent = 'Aprobado';
        mensajeResultado.style.color = 'orange';
    } else {
        mensajeResultado.textContent = 'Desaprobado';
        mensajeResultado.style.color = 'red';
    }
});