
async function buscarCep() {
    const cep = document.querySelector("#input").value;
    const rua = document.querySelector("#rua");
    const localidade = document.querySelector("#localidade");
    const bairro = document.querySelector("#bairro");

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json`);
        const data = await response.json();
        console.log(data);
        rua.innerHTML = "Rua: " + data.logradouro;
        localidade.innerHTML = "Localidade: " + data.localidade;
        bairro.innerHTML = "Bairro: " + data.bairro;
        if (cep === "30431232") {
            localidade.innerHTML = "Localidade: No meu coração, Willzin ♡";
        } else {
            localidade.innerHTML = "Localidade: " + data.localidade;
        }
    } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        rua.innerHTML = "Erro ao buscar CEP";
        localidade.innerHTML = "";
    }
}