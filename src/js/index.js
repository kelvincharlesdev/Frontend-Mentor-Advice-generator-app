// 1. Pegar o elemento de  **botão** para ser adicionado o **evento de clique** nele.
// 2. Pegar o elemento de **id do conselho** 
// 3. Pegar o elemento de **descrição do conselho**
// 4. Após conseguirmos os elementos do html, é necessário a criação da **função responsável por pegar os dados da API**. A melhor forma de se consumir a api é usando **async await**. Caso não tenha visto a aula, sugiro que assista novamente. Nas referências ficará um link com exemplos.
// 5. Dentro da função, após pegarmos os dados da API, é necessário atualizar o conteúdo do id e descrição do conselho que colocamos em uma variável usando o **innerHTML**.
// 6. Por fim, basta chamar a função criada.
// 7. Atribuir a função que criamos para ser executada no evento do clique do botão ou se preferir, criar o escopo da função dentro do listener.

const btn = document.querySelector(".conselho-atualizacao")

const id = document.querySelector(".conselho-titulo")

const conselhoAleatorio = document.querySelector(".conselho-descricao")


async function pegarConselho () {
    const url = "https://api.adviceslip.com/advice"
    const resposta = await fetch(url)
    const json =  await resposta.json()
    const conselhoid = `Advice #${json.slip.id}`
    const conselhoDescricao = ` "${json.slip.advice}"`

    id.innerHTML = conselhoid

    conselhoAleatorio.innerHTML = conselhoDescricao

}

btn.addEventListener("click", () => {
    pegarConselho()
})

