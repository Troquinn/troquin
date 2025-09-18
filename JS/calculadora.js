function calculateCompoundInterest() {
    // Obter valores dos inputs
    const valorInicial = parseFloat(document.getElementById('valor-inicial').value) || 0;
    const aporteMensal = parseFloat(document.getElementById('aporte-mensal').value) || 0;
    const taxaJurosAnual = parseFloat(document.getElementById('taxa-juros').value) || 0;
    const periodoAnos = parseFloat(document.getElementById('periodo').value) || 0;
    
    // Converter taxa anual para mensal e decimal
    const taxaJurosMensal = Math.pow(1 + (taxaJurosAnual / 100), 1/12) - 1;
    
    // Calcular número total de meses
    const totalMeses = periodoAnos * 12;
    
    // Calcular valor futuro
    let valorFuturo = valorInicial * Math.pow(1 + taxaJurosMensal, totalMeses);
    
    // Adicionar aportes mensais
    for (let i = 0; i < totalMeses; i++) {
        valorFuturo += aporteMensal * Math.pow(1 + taxaJurosMensal, totalMeses - i - 1);
    }
    
    // Calcular total investido
    const totalInvestido = valorInicial + (aporteMensal * totalMeses);
    
    // Calcular lucro total
    const lucroTotal = valorFuturo - totalInvestido;
    
    // Calcular rentabilidade percentual
    const rentabilidadePercentual = totalInvestido > 0 ? 
        ((valorFuturo / totalInvestido - 1) * 100) : 0;
    
    // Formatar valores para exibição
    const formatador = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    
    // Exibir resultados
    document.getElementById('resultado-valor-final').value = formatador.format(valorFuturo);
    document.getElementById('resultado-total-investido').value = formatador.format(totalInvestido);
    document.getElementById('resultado-lucro-total').value = formatador.format(lucroTotal);
    document.getElementById('resultado-rentabilidade').value = rentabilidadePercentual.toFixed(2) + '%';
}

// Calcular automaticamente ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    calculateCompoundInterest();
    
    // Adicionar event listeners para recalcular quando os valores mudarem
    document.getElementById('valor-inicial').addEventListener('input', calculateCompoundInterest);
    document.getElementById('aporte-mensal').addEventListener('input', calculateCompoundInterest);
    document.getElementById('taxa-juros').addEventListener('input', calculateCompoundInterest);
    document.getElementById('periodo').addEventListener('input', calculateCompoundInterest);
});