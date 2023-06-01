const textArea = document.querySelector(".text-area")
const message = document.querySelector(".message")
const copyText = document.querySelector(".copy-text")
const button = document.querySelector(".btn-encrypt")
const listVowels = ["a","e","i","o","u"]
const listEncryptionKeys = ["ai", "enter", "imes", "ober", "ufat"]

function decitionCrypt() {
    if (button.classList.contains("reverse")) {
        decryptText()
    }
    else {
        encryptText()
    }
}

function encryptText() {
    message.textContent = textArea.value
        .replace(/e/gi, 'enter')
        .replace(/i/gi, 'imes')
        .replace(/a/gi, 'ai')
        .replace(/o/gi, 'ober')
        .replace(/u/gi, 'ufat');
}


function toggleHeaderEncryption() {
    let headerEncrypt = document.querySelector(".header-container")

    headerEncrypt.classList.toggle("reverse")
    button.classList.toggle("reverse");

    if (button.classList.contains("reverse")) {
        button.innerHTML = '<img src="../assets/unlock.svg" alt=""><p>Desencriptar</p>';
    } else {
        button.innerHTML = '<img src="../assets/lock.svg" alt=""><p>Encriptar</p>';
    }

}

function decryptText() {
    message.textContent = textArea.value
        .replace(/enter/gi, 'e')
        .replace(/imes/gi, 'i')
        .replace(/ai/gi, 'a')
        .replace(/ober/gi, 'o')
        .replace(/ufat/gi, 'u');
}

function copyTextFunction() {
    message.select();
    navigator.clipboard.writeText(message.value)
    alert("Texto Copiado")
}

