import { useContext, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import * as api from '../../api'
import { ModalContext } from '../../context/ModalContext'
import Modal from '../../components/Modal/Modal'
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo'
import * as Styled from './styles'

const SearchBar = () => {
  const [modal, setModal, closeModal] = useContext(ModalContext)
  const [pokemon, setPokemon] = useState();
  const [search, setSearch] = useState("");

  // Função que armazena o estado do input do usuário toda vez que é mudado.
  const handleInput = (event) => {
    setSearch(event.target.value);
  }

  // Função que busca na API o Pokémon digitado e redireciona para a
  // página de info, caso a requisição seja concluída com sucesso.
  const searchPokemon = (event) => {
    event.preventDefault();
    if (search) {
    api.searchPokemon(search)
      .then((res) => {
        setPokemon(res.data);
        setModal("pokeinfo");
        event.target.reset();
      }).catch(
        // !! => TODO!
      )
    }
  }

  return (
    <>
    <Styled.Form onSubmit={(event) => searchPokemon(event)}>
        <IoSearchSharp size="22px" color="#8b8f95"/>
      <Styled.Input 
        placeholder='Busque um Pokémon!' 
        onChange={handleInput} 
        />
      </Styled.Form>
    {pokemon && modal === 'pokeinfo' && (
      <Modal pokemon={pokemon} closeModal={() => closeModal()}>
        <PokemonInfo pokemon={pokemon} />
      </Modal>
    )}
    </>
  )
}

export default SearchBar
