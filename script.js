function simularCompra() {
  // Preços das facas de Halloween
  const precoNikScythe = 150.00;
  const precoChromaDark = 45.00;
  const precoHallowsEdge = 30.00;

  // 1. Receber as quantidades via prompt
  let qtdNikInput = prompt(" Quantas unidades da 'Nik's Scythe Cute' (R$ 150,00) você quer?");
  let qtdChromaInput = prompt(" Quantas unidades da 'Chroma Darkbringer' (R$ 45,00) você quer?");
  let qtdHallowsInput = prompt(" Quantas unidades da 'Hallows Edge' (R$ 30,00) você quer?");

  // 2. Converter respostas para números com Number() e tratar cancelamentos ou vazios
  let qtdNik = Number(qtdNikInput) || 0;
  let qtdChroma = Number(qtdChromaInput) || 0;
  let qtdHallows = Number(qtdHallowsInput) || 0;

  // Evitar números negativos
  if (qtdNik < 0) qtdNik = 0;
  if (qtdChroma < 0) qtdChroma = 0;
  if (qtdHallows < 0) qtdHallows = 0;

  // Verificar se nenhum produto foi selecionado
  if (qtdNik === 0 && qtdChroma === 0 && qtdHallows === 0) {
    alert(" Nenhum produto foi selecionado. Tente novamente!");
    return;
  }

  // 3. Calcular valores
  const totalNik = precoNikScythe * qtdNik;
  const totalChroma = precoChromaDark * qtdChroma;
  const totalHallows = precoHallowsEdge * qtdHallows;

  const subtotal = totalNik + totalChroma + totalHallows;

  // Desconto de Halloween (10% de desconto em compras a partir de R$ 100,00)
  let desconto = 0;
  let valorFinal = subtotal;

  if (subtotal >= 100) {
    desconto = subtotal * 0.10;
    valorFinal = subtotal - desconto;
  }

  // 4. Exibir resultado via alert()
  let resumo = "=== Na's MM2 Store- RESUMO === \n\n";

  if (qtdNik > 0) {
    resumo += `• Nik's Scythe Cute: ${qtdNik}x = R$ ${totalNik.toFixed(2)}\n`;
  }
  if (qtdChroma > 0) {
    resumo += `• Chroma Darkbringer: ${qtdChroma}x = R$ ${totalChroma.toFixed(2)}\n`;
  }
  if (qtdHallows > 0) {
    resumo += `• Hallows Edge: ${qtdHallows}x = R$ ${totalHallows.toFixed(2)}\n`;
  }

  resumo += `\nSubtotal: R$ ${subtotal.toFixed(2)}\n`;

  if (desconto > 0) {
    resumo += ` Desconto (10% acima de R$ 100): -R$ ${desconto.toFixed(2)}\n`;
  }

  resumo += `\n TOTAL A PAGAR: R$ ${valorFinal.toFixed(2)}`;

  alert(resumo);
}