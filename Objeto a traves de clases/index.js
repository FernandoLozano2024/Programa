import { Persona } from './persona.js';
import { Combo } from './Combo.js';

const benny = new Persona('Benito', 'Juarez', 68, 1.80);
const porfi = new Persona('Porfirio', 'Guerreo', 76, 1.73);

console.log(benny.imc());
console.log(porfi.saludar());

document.addEventListener('DOMContentLoaded', function() {
    // Evento de clic para el botón "Guardar"
    document.getElementById('btnGuardar').addEventListener('click', function() {
        // Obtener los valores del campo de entrada
        let valores = document.getElementById('valores').value;
        // Aquí puedes agregar la lógica para guardar los datos, como enviarlos a un servidor o almacenarlos localmente
        console.log('Datos guardados:', valores);
    });

    // Evento de clic para el botón "Eliminar"
    document.getElementById('btnEliminar').addEventListener('click', function() {
        // Limpiar el campo de entrada
        document.getElementById('valores').value = '';
        // Aquí puedes agregar la lógica adicional para eliminar los datos, si es necesario
        console.log('Datos eliminados');
    });

    // Evento de clic para el botón "Añadir" (solo para fines de demostración)
    document.getElementById('btn1').addEventListener('click', function() {
        // Obtener los valores del campo de entrada
        let valores = document.getElementById('valores').value;
        // Aquí puedes agregar lógica adicional si necesitas procesar los valores antes de mostrarlos
        // Por ahora, simplemente imprimimos los valores en la consola
        console.log('Valores añadidos:', valores);
        // Luego, puedes crear una instancia de Combo y mostrarla
        let arrayValores = valores.split(',');
        const colores = new Combo('cmbColores', 'colores', 'text-danger', arrayValores);
        document.getElementById('div1').innerHTML = colores.mostrar();
    });
});