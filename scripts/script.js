function encryptText() {
    // Obtener el texto de entrada
    var input = document.getElementById('inputText').value;

    // Reemplazar las vocales por 'mimi'
    var encryptedText = input
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');

    // Mostrar el texto encriptado en el div de salida
    var outputDiv = document.getElementById('outputText');
    outputDiv.textContent = encryptedText;

    // Habilitar el botón de copiar
    var copyButton = document.getElementById('copyButton');
}

function copyText() {
    // Obtener el texto encriptado
    var encryptedText = document.getElementById('outputText').textContent;

    // Crear un elemento de textarea temporal
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = encryptedText;

    // Agregar el elemento de textarea temporal al documento
    document.body.appendChild(tempTextarea);

    // Seleccionar el texto del textarea
    tempTextarea.select();
    tempTextarea.setSelectionRange(0, 99999); // Para dispositivos móviles

    // Copiar el texto al portapapeles
    document.execCommand('copy');

    // Eliminar el elemento de textarea temporal
    document.body.removeChild(tempTextarea);

    // Cambiar el estado del botón de copiar
    var copyButton = document.getElementById('copyButton');
    copyButton.innerHTML = '<img src="./assets/copy.svg" alt="copiar">';
    copyButton.disabled = true;

    // Restaurar el estado del botón después de 2 segundos
    setTimeout(function() {
        copyButton.innerHTML = '<img src="./assets/copy.svg" alt="copiar">';
        copyButton.disabled = false;
    }, 2000);
}
