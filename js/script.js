const btnCifrarAes = document.querySelector('#cifrar-aes');
const btnDescifrarAes = document.getElementById('descifrar-aes');

btnCifrarAes.addEventListener('click', e => {
    e.preventDefault();

    const mensaje = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;

    const cifrado = CryptoJS.AES.encrypt(mensaje, clave);
    document.getElementById('cifrado').value = cifrado;
});

btnDescifrarAes.addEventListener('click', e => {
    e.preventDefault();
   
    const cifrado = document.getElementById('mensaje').value;
    const clave = document.getElementById('clave').value;

    const descifrar = CryptoJS.AES.decrypt(cifrado, clave);
    document.getElementById('cifrado').value = descifrar;

    const descifrarCadena = descifrar.toString(CryptoJS.enc.Utf8);
    document.getElementById('cifrado-cadena').value = descifrarCadena;
});