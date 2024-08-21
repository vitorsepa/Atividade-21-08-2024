const dataAtual = new Date();

const proximoAniversario = new Date(dataAtual.getFullYear() + 1, 7, 21); // Mês 7 é agosto (0-indexado)

const diferencaEmMilissegundos = proximoAniversario - dataAtual;
const diferencaEmDias = Math.ceil(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
console.log(`Diferença em dias: ${diferencaEmDias}`);

const dataAtualFormatada = dataAtual.toISOString().split('T')[0];
console.log(`Data atual formatada: ${dataAtualFormatada}`);

const novaData = new Date(dataAtual);
novaData.setDate(novaData.getDate() + 30);
const novaDataFormatada = novaData.toISOString().split('T')[0];
console.log(`Nova data após adicionar 30 dias: ${novaDataFormatada}`);
