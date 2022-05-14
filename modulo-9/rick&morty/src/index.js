import axios from 'axios'
import { createCard } from './utils.js'

let url = 'https://rickandmortyapi.com/api/character'
let count = 2
const getList = document.querySelector('ul')

const getCountCharacter = () => {
  axios
    .get(url)
    .then((response) => {
      count = response.data.info.count
    })
    .catch((error) => `hay un error: ${error}`)
  return count
}

// 826

const getCharacter = () => {
  axios.get(`${url}/[1,${getCountCharacter()}]`).then((response) => {
    response.data.map((item) => {
      getList.append(createCard(item))
    })
  })
}

getCharacter()

// hacer una llamada y ver los personajes totales
// guardar el valor de personajes totales
// hacer una llamada con todos los personajes y crear un listado
