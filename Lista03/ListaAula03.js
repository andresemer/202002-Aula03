let receber_Texto
let frase
let palavras
let media_palavras
let resultado_Psilabas
let produto

$('#enviar_texto').click(() => {
    receber_Texto = $('#texto').val().replace('\n',' ');

    frase = receber_Texto.split('.');
    palavras = receber_Texto.split(' ');

    let NumFrase = frase.length - 1;
    let NumPalavras = palavras.length;

    media_palavras = NumPalavras/NumFrase;
    resultado_Psilabas = media_palavras * 1.5;
    produto = Math.round(resultado_Psilabas * 0.4);


    if (produto >= 1 && produto <= 7){
        alert("história em quadrinhos");
    }
    else if (produto >= 8 && produto <= 10 ){
        alert("excepcional");
    }
    else if (produto >= 11 && produto <= 15 ){
        alert("ótimo");
    }
    else if (produto >= 16 && produto <= 19 ){
        alert("pequena dificuldade");
    }
    else if (produto >= 20 && produto <= 30 ){
        alert("muito difícil");
    }
    else if (produto >= 31 && produto <= 40 ){
        alert("linguagem técnica");
    }
    else if (produto > 40){
        alert("nebulosidade");
    }

    console.log(NumFrase);
    console.log(NumPalavras);
    console.log(frase);
    console.log(palavras);
    console.log(media_palavras);
    console.log(resultado_Psilabas);
    console.log(produto);


});