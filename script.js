function calcular() {
    const eletrodomestico = document.getElementById('eletrodomestico').value;
    const horas = parseFloat(document.getElementById('horas').value);
    const dias = parseFloat(document.getElementById('dias').value);
    

    let consumoPorHora = 0;

    switch (eletrodomestico) {
        case 'geladeira':
            consumoPorHora = 0,15;
            break;
        case 'televisao':
            consumoPorHora = 0,1;
            break;
        case 'microondas':
            consumoPorHora = 1,5;
            break;
        case 'maquina_lavar_roupa':
            consumoPorHora = 0,5;
            break;
        case 'ar_condicionado':
            consumoPorHora = 1,2;
            break;
        case 'chuveiro_eletrico':
            consumoPorHora = 5,5;
            break;
        case 'lampada_led':
            consumoPorHora = 0,1;
            break;
        case 'computador':
            consumoPorHora = 0,8;
            break;
        case 'ventilador':
            consumoPorHora = 0,5;
            break;
        case 'ferro_passar_roupa':
            consumoPorHora = 1,0;
            break;
        case 'forno_eletrico':
            consumoPorHora = 1,0;
            break;
        case 'secador_cabelo':
            consumoPorHora = 1,5;
            break;
        case 'aspirador_po':
            consumoPorHora = 0,8;
            break;
        case 'maquina_lavar_louca':
            consumoPorHora = 1,2;
            break;
        case 'geladeira_duplex':
            consumoPorHora = 0,25;
            break;
        case 'freezer':
            consumoPorHora = 0,2;
            break;
        case 'aquecedor_eletrico':
            consumoPorHora = 1,5;
            break;
        case 'lavadora_roupas':
            consumoPorHora = 0,6;
            break;
        case 'torradeira':
            consumoPorHora = 0,8;
            break;
        case 'home_theater':
            consumoPorHora = 0,2;
            break;
        case 'cafeteira_eletrica':
            consumoPorHora = 0,9;
            break;
        case 'carregador_celular':
            consumoPorHora = 0,5;
            break;
        case 'fogao_eletrico':
            consumoPorHora = 1,5;
            break;
        case 'lava_seca':
            consumoPorHora = 1,0;
            break;
      
    }

    const consumo = consumoPorHora * horas * dias;
    document.getElementById('resultado').innerText = `Consumo Mensal: ${consumo.toFixed(2)} kWh`;
}
