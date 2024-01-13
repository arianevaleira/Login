function validardados() {
    var email = document.getElementById('email').value;
    var matricula = document.getElementById('matricula').value; // Corrigido getElementsById para getElementById
    var senha = document.getElementById('senha').value;
      
    if (!email.endsWith('@escolar.ifrn.edu.br')) {
        document.getElementById('erroemail').innerHTML = 'O email deve terminar com (@escolar.ifrn.edu.br)';
        return false;
    }

    if (matricula.length != 14) {
        document.getElementById('erromatricula').innerHTML = 'A matricula deve ter 14 numeros'
        return false;
    }

    if (senha.length <= 7){
       document.getElementById('errosenha').innerHTML = 'A senha deve conter no minino 7 caracteres'
        return false;
    }
    return true;
}
