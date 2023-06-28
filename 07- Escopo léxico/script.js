function externa() {
  let externaVar = 'Oi, sou uma variável externa!';

  function interna() {
    let internaVar = 'Oi, sou uma variável interna!';
    console.log(externaVar); // A função interna pode acessar a variável externa
    console.log(internaVar); // A função interna pode acessar sua própria variável
  }

  interna();
  // console.log(internaVar); // Isso geraria um erro, pois a variável interna não é acessível aqui
}

externa();
