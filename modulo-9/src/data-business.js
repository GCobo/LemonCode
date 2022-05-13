import axios from 'axios'
import { createCharacterRow } from './utils.js'

export const getCharacters = () => {
  axios
    .get('https://www.breakingbadapi.com/api/characters')
    .then((response) => {
      const getRoot = document.getElementById('root')
      for (let item of response.data) {
        getRoot.append(createCharacterRow(item))
      }
    })
    .catch((error) => console.log('Se ha producido un error'))
}
