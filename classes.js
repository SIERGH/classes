class heroi {
    constructor(nome,idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    tipoDeAtaque (){
        let ataque;
        switch (this.tipo) {
            case "mago":
            ataque = "magia";
            break;

            case "guerreiro":
            ataque = "espada";
            break;

            case "monge":
            ataque = "artes marciais";
            break;

            case "ninja":
            ataque = "shuriken";
            break;

        }

        return ataque;
    }
}

let chamada = new heroi ("digdin",25,"mago")

console.log(`o ${chamada.nome} de ${chamada.idade} anos, do tipo ${chamada.tipo} atacou usando: ${chamada.tipoDeAtaque()}`)