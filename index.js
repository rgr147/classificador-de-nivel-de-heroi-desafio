//definindo a classe para criação do herói
class Heroi {
    nome;
    xp;

    constructor(nome,xp) {
        this.nome = nome;
        this.xp = xp;
    }
    //método que define o nível do herói de acordo com o xp do herói
    defineNivelDoHeroi() {
        if(this.xp <= 1000) {
            return "Ferro";
        } else if(this.xp <= 2000) {
            return "Bronze";
        } else if(this.xp <= 5000) {
            return "Prata";
        } else if(this.xp <= 7000) {
            return "Ouro";
        } else if(this.xp <= 8000) {
            return "Platina";
        } else if(this.xp <= 9000) {
            return "Ascendente";
        } else if(this.xp <= 10000) {
            return "Imortal";
        } else if(this.xp >= 10001) {
            return "Radiante";
        }
    }
    //método responsável por mostrar mensagem informando o nível atual do herói 
    mensagemDeNivel() {
        const nivel = this.defineNivelDoHeroi();
        const nome = this.nome;
        return `O Herói de nome ${nome} está no nível de ${nivel}`;    
    }
    //método para upar o nível de xp do herói
    ganhaXp() {
        this.xp++;
    }
}

//instanciando 2 herois
const meuHeroi1 = new Heroi("Heroi Dev", 10000);
const meuHeroi2 = new Heroi("Heroi Javeiro", 4380);

const herois =  [meuHeroi1, meuHeroi2]

meuHeroi1.ganhaXp();

//laço de repetição para verificar a saída do resultado
for(let i = 0;i < herois.length;i++) {
    console.log(herois[i].mensagemDeNivel());
}
