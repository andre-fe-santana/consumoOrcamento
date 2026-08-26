import { graphData } from "./budget.js"
import { getExchange } from "./exchange.js"

// checagem de preenchimento de inputs
const inputs = document.querySelectorAll('input')
const formulario = document.querySelector('.form')
const btnSubmit = document.querySelector('#btnSubmit')
const exchangeDialog = document.querySelector('.exchangeDialog')
const exchangeText = document.querySelector('.exchangeText')
const errorDialog = document.querySelector('.errorDialog')
const errorContent = document.querySelector('.errorMessage')

// coleta de dados para o formulario
let projectNameInput = document.querySelector('#projectName');
let projectType = document.querySelector('#projectType');
let budgetTotalInput = document.querySelector('#budgetTotal');
let budgetLeftInput = document.querySelector('#budgetLeft');
let currencySelectInput = document.querySelector('#currencySelect')
let purchaseCostInput = document.querySelector('#purchaseCost')

// resposta
let line = document.querySelector('.vertical-line')
let result = document.querySelector('.result')
let purchaseMotive = document.querySelector('#purchaseMotive')
let btnCopy = document.querySelector('#btnCopy')
let copyIcon = btnCopy.querySelector('.inputIcon')
let btnText = btnCopy.querySelector('.btnText')

function unlockButton() {

    const camposPreenchidos = Array.from(document.querySelectorAll('input')).every(inputs => inputs.value.trim() !== '')
    console.log(camposPreenchidos)

    if (camposPreenchidos === true) {

        btnSubmit.removeAttribute('disabled')

    } else {

        btnSubmit.disabled = true

    }

}

async function setCurrency() {
    
    try {
     
        let currencySelect = currencySelectInput.value
        let purchaseCost = Number(parseFloat((purchaseCostInput.value).replace('.', '')).toFixed(2))
        console.log(`${currencySelect}`)
        console.log(await getExchange(currencySelect))

        console.log(`Original: ${purchaseCost} ${currencySelect}`)

        purchaseCost *= (await getExchange(currencySelect)).toFixed(2)

        console.log(`Convertido: ${purchaseCost} BRL`)

        return purchaseCost

    } catch (error) {

        console.log(`ERRO: ${error}`)

    }

}

export async function getBudget(e) {

    e.preventDefault()

    try {

        let projectName = (projectNameInput.value).trim()
        let budgetType = projectType.value
        let budgetTotal = Number(parseFloat((budgetTotalInput.value).replace('.', ',')).toFixed(2))
        let budgetLeft = Number(parseFloat((budgetLeftInput.value).replace('.', ',')).toFixed(2))

        // teste de valores
        console.log(`Nome do projeto: ${projectName} ${typeof (projectName)} | Tipo: ${budgetType} ${typeof (budgetType)} | Disponível: ${budgetTotal} ${typeof (budgetTotal)} | Restante: ${budgetLeft} ${typeof (budgetLeft)} | Moeda: ${currencySelect} ${typeof (currencySelect)} | Custo da Compra: ${purchaseCost} ${typeof (purchaseCost)}`)

        let currencyValue = await getExchange(currencySelect)

        purchaseCost *= currencyValue //converte o valor da compra conforme a moeda escolhida

        // verificacao de erro
        if (budgetTotal <= 0 || budgetLeft <= 0 || purchaseCost <= 0) {

            errorDialog.style.display = "block";
            errorContent.textContent = 'Não utilize valores negativos nos campos'

        }
        
        else if (purchaseCost > budgetLeft) {

            errorDialog.style.display = "block";
            errorContent.textContent = 'Valor da compra maior do que o valor disponível'

        } 
            
        else if (budgetLeft > budgetTotal) {
            
            errorDialog.style.display = "block";
            errorContent.textContent = 'Valor disponível maior do que o orçamento total'

        }

        else {

            errorDialog.style.display = "none";

            // valores normais
            let budgetUsed = budgetTotal - budgetLeft
            let budgetLeftFinal = budgetTotal - (budgetUsed + purchaseCost)


            console.log(`Consumido: \n Antes: R$ ${budgetUsed} \n Depois: R$ ${budgetLeftFinal} (- R$${purchaseCost})`)

            // porcentagem
            let usedPercentage = Number((((budgetUsed / budgetTotal)) * 100).toFixed(2)) // % ocupada no orçamento
            let purcharsePercentage = Number((((purchaseCost/budgetTotal)) * 100).toFixed(2)) // % ocupada
            let usedPercentageFinal = Number((((budgetUsed + purchaseCost) / budgetTotal) * 100).toFixed(2))
            let leftPercentage = Number((((budgetLeftFinal) / budgetTotal) * 100).toFixed(2))
            

            console.log(`Consumido: ${usedPercentage}% | Compra: ${purcharsePercentage}% | Restante: ${leftPercentage}%`)
                
            let data = [ usedPercentage, purcharsePercentage, leftPercentage ]
            
            // console.log(data)

            purchaseMotive.textContent = `Com essa compra consumiremos ${usedPercentageFinal}% do projeto ${projectName} em ${budgetType}`

            graphData(data, usedPercentageFinal) //chama a função para exportar os dados

            result.style.display = "flex"
            line.style.display = "flex"
        }


    } catch (error) {

        console.log(`ERRO: ${error}`)

    }


}


btnCopy.addEventListener('click', function copyText() {

    console.log(purchaseMotive.textContent)

    try {

        navigator.clipboard.writeText(purchaseMotive.textContent)

        copyIcon.src = 'img/icons/check.svg'
        btnText.textContent = "COPIADO"

    } catch (err) {

        console.log(`Erro ao copiar texto: ${err}`)

    }

}
)

formulario.addEventListener('submit', getBudget)
formulario.addEventListener('keydown', unlockButton)
formulario.addEventListener('change', unlockButton)
currencySelectInput.addEventListener('change', setCurrency)