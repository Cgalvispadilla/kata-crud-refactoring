const validarCampos = (request) => {
  var patt = new RegExp(/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/);
  if (
    request.name.length > 3 &&
    request.name !== null &&
    patt.test(request.name)
  ) {
    return true;
  }
  return false;
};

export default validarCampos;
