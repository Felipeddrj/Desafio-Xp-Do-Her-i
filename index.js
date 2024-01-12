// Variaveis
let nickname = "Calvo Poderoso"
let Experiencia = 1500
// Código
switch (true) {
    case Experiencia <= 1000 && Experiencia >= 0:
        console.log("Siga em frente nobre cavaleiro de Ferro");
        Experiencia = "Ferro"
        break;
    case Experiencia > 1000 && Experiencia <= 2000:
        console.log("Siga em frente nobre cavaleiro de Bronze");
        Experiencia = "Bronze"
        break;
    case Experiencia > 2000 && Experiencia <= 5000:
        console.log("Está em um bom caminho cavaleiro de Prata");
        Experiencia = "Prata"
        break;
    case Experiencia > 5000 && Experiencia <= 7000:
        console.log("A partir de agora seu caminho será difícil, cavaleiro de Ouro");
        Experiencia = "Ouro"
        break;
    case Experiencia > 7000 && Experiencia <= 8000:
        console.log("Continue nobre cavaleiro Platina");
        Experiencia = "Platina"
        break;
    case Experiencia > 8000 && Experiencia <= 9000:
        console.log("Chegaste mesmo até aqui, parabéns Ascendente!");
        Experiencia = "Ascendente"
        break;
    case Experiencia > 9000 && Experiencia <= 10000:
        console.log("Chegaste num nível nunca jamais visto, o povo louva e glorifica seu nome! Oh IMORTAL!");
        Experiencia = "IMORTAL"
        break;
    case Experiencia > 10000:
        console.log("Não estás mais associado ao mundo terreno, és agora uma entidade! RADIANTE!");
        Experiencia = "Radiante"
        break;
    default:
        console.log("Interessante... Seu poder é desconhecido.")
}
    console.log("Parabéns! " + nickname + ", sua jornada até agora faz de você um(a): " + Experiencia)