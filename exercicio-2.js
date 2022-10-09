/*2°) Crie um algoritmo que será responsável por calcular o índice de gordura corporal. 
Na situação do sexo masculino deverá conter os seguintes fluxos: 
menor do que 11% = Atleta,
entre 11% e 13% = bom,
entre 14% e 20% = normal,
entre 21% a 23% = elevado,
acima de 23% = alto

Na situação do sexo feminino:
menor do que 16%= Atleta,
entre 16% e 19% = bom,
entre 20% e 28% = normal,
entre 29% a 31% = elevado,
acima de 31% = alto*/


let sexo = 'm';
let altura = 1.70;
let peso = 65.5;
let IMC = peso/(altura**2);

if(sexo==='m'){
    if(IMC<11){
        console.log(`com um IMC de ${IMC} e sendo um homem, está pessoa está classificada como atleta`);
    }
    if(IMC>=11 && peso <=13){
        console.log(`com um IMC de ${IMC} e sendo um homem, está pessoa está classificada como bom`);
    }
    if(IMC>=14 && peso <=20){
        console.log(`com um IMC de ${IMC} e sendo um homem, está pessoa está classificada como normal`);
    }
    if(IMC>=21 && peso <=23){
        console.log(`com um IMC de ${IMC} e sendo um homem, está pessoa está classificada como elevado`);
    }
    else{
        console.log(`com um IMC de ${IMC} e sendo um homem, está pessoa está classificada como alto`);
    }
}

if(sexo==='f'){
    if(IMC<16){
        console.log(`com um IMC de ${IMC} e sendo uma mulher, está pessoa está classificada como atleta`);
    }
    if(IMC>=16 && peso <=19){
        console.log(`com um IMC de ${IMC} e sendo uma mulher, está pessoa está classificada como bom`);
    }
    if(IMC>=20 && peso <=28){
        console.log(`com um IMC de ${IMC} e sendo uma mulher, está pessoa está classificada como normal`);
    }
    if(IMC>=29 && peso <=31){
        console.log(`com um IMC de ${IMC} e sendo uma mulher, está pessoa está classificada como elevado`);
    }
    else{
        console.log(`com um IMC de ${IMC} e sendo uma mulher, está pessoa está classificada como alto`);
    }
}