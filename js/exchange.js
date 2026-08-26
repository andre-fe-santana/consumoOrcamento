export async function getExchange(moeda) {

    const url = `https://api.frankfurter.dev/v2/rate/${moeda}/BRL`

    try {

        const resposta = await fetch(url)
        const dados = await resposta.json()
        let valorMoeda = dados.rate
        console.log(valorMoeda)

        return valorMoeda

    } catch (error) {

        console.error(`ERRO na busca: ${error}`)

    }
}

getExchange('USD')