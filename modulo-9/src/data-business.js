import axios from 'axios'
import { createCharacterRow, showCharacter } from './utils.js'

export const getCharacters = () => {
  axios
    .get('https://www.breakingbadapi.com/api/characters')
    .then((response) => {
      const getRoot = document.getElementById('root')

      getRoot.innerHTML = ''

      response.data.map((item) => {
        getRoot.append(createCharacterRow(item))
        const getElementById = document.getElementById(item.char_id)
        getElementById.addEventListener('click', () => {
          showCharacter(item)
        })
      })
    })
    .catch((error) => console.log('Se ha producido un error'))
}
