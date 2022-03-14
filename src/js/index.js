const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao.pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const idPokemonSelecionado = pokemon.attributes.id.value

        const iconeAtivo = document.querySelector('.ativo')
        const cartaoPokemonAberto = document.querySelector('.aberto')
        iconeAtivo.classList.remove('ativo')
        cartaoPokemonAberto.classList.remove('aberto')

        const iconeSelecionado = document.getElementById(idPokemonSelecionado)
        const cartaoSelecionado = document.getElementById('cartao-'+idPokemonSelecionado)
        iconeSelecionado.classList.add('ativo')
        cartaoSelecionado.classList.add('aberto')
    })
})