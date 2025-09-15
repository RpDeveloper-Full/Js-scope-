function mostrarVar() {
  var mensaje = "Soy una variable con var dentro de la función.";

  if (true) {
    var mensaje = "El valor de 'mensaje' cambió dentro del bloque if con var.";
    // ⚠️ 'var' no respeta el scope de bloque, sobrescribe la variable anterior
  }

  document.getElementById("resultado").innerText = mensaje;
}