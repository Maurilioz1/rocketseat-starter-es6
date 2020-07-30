class Usuario {

    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {

    constructor() {
        super();
        this.admin = true;
    }
}

const usuario = new Usuario('email@teste.com', 'senha123');
const admin = new Admin('email@teste.com', 'senha123');

console.log(usuario.isAdmin())
console.log(admin.isAdmin())