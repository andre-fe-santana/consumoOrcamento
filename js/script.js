// coleta de dados para o formulario
let projectNameInput = document.querySelector('#projectName');
let budgetTypeInput = document.querySelector('#budgetType');
let budgetTotalInput = document.querySelector('#budgetTotal');
let budgetLeftInput = document.querySelector('#budgetLeft');
let currencySelectInput = document.querySelector('#currencySelect')
let purchaseCostInput = document.querySelector('#purchaseCost')

// resposta
let purchaseMotive = document.querySelector('#purchaseMotive')
let btnCopy = document.querySelector('#btnCopy')
let copyIcon = btnCopy.querySelector('.inputIcon')
let btnText = btnCopy.querySelector('.btnText')

function copyText() {

    console.log(purchaseMotive.textContent)

    try {
        
        navigator.clipboard.writeText(purchaseMotive.textContent)

        copyIcon.src = 'img/icons/check.svg'
        btnText.textContent = "COPIADO"

    } catch (err) {

        console.log(`Erro ao copiar texto: ${err}`)

    }

}


btnCopy.addEventListener('click', copyText)


// PREENCHENDO GRAFICO
export const totalUtilizado = 70