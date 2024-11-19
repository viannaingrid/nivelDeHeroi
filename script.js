const nomeHeroi = 'Thor';
const experiencia = 8500;
let nivel;

if (experiencia < 1000) {
  nivel = 'Ferro';
} else if (experiencia >= 1001 && experiencia <= 2000) {
  nivel = 'Bronze';
} else if (experiencia >= 2001 && experiencia <= 5000) {
  nivel = 'Prata Ouro';
} else if (experiencia >= 5001 && experiencia <= 8000) {
  nivel = 'Platina Diamante';
} else if (experiencia >= 8001 && experiencia <= 9000) {
  nivel = 'Ascendente';
} else if (experiencia >= 9001 && experiencia <= 10000) {
  nivel = 'Imortal';
} else {
  nivel = 'Radiante';
}

console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
