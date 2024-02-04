

function criptografar() {

    let textarea = document.getElementById('itexto')
    let texto = String(textarea.value)
    let tituloDaResposta = document.getElementById('h2')
    let resposta = document.getElementById('resposta')
    let botaoCopiar = document.getElementById('botao-3')
    let novaFrase = ''

    if (texto == 0) {
        window.alert('Erro')
    } else {
        for (let i = 0;i < texto.length;i++) {
            if (texto[i] === 'a') {
                novaFrase += 'ai'
            } else if (texto[i] === 'e') {
                novaFrase += 'enter'
            } else if (texto[i] === 'i') {
                novaFrase += 'imes'
            } else if (texto[i] === 'o') {
                novaFrase += 'ober'
            } else if (texto[i] === 'u') {
                novaFrase += 'ufat'
            } else {
                novaFrase += texto[i]
            }
        }
        resposta.innerHTML = novaFrase
        tituloDaResposta.innerHTML = 'Mensagem criptografada'
        resposta.style.fontSize = '2rem'
        botaoCopiar.style.display = 'block'
    }
        
}
    
function descriptografar() {
    let textarea = document.getElementById('itexto')
    let texto = String(textarea.value)
    let tituloDaResposta = document.getElementById('h2')
    let botaoCopiar = document.getElementById('botao-3')
    let resposta = document.getElementById('resposta')
    

    if (texto == 0) {
        window.alert('Erro, digite algum texto ou frase.')
    } else {
        texto = texto.replace(/ai/g, 'a')
        texto = texto.replace(/enter/g, 'e')
        texto = texto.replace(/imes/g, 'i')
        texto = texto.replace(/ober/g, 'o')
        texto = texto.replace(/ufat/g, 'u')

        tituloDaResposta.innerHTML = 'Mensagem Descriptografada'
        resposta.innerText = texto
        resposta.style.fontSize = '2rem'
        botaoCopiar.style.display = 'block'
        
        }
    }

    function copiar() {

        let palavra = document.getElementById('resposta').textContent;
        navigator.clipboard.writeText(palavra);

        window.alert('Texto copiado')
          
    }
   

    