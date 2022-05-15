import axios from 'axios'
import '../index.css'
import { createCard } from './utils.js'

let url = 'https://rickandmortyapi.com/api/character'
let count = 10
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

const divideCount = [...Array(count).keys()]

const getCharacter = () => {
  axios.get(`${url}/${divideCount}`).then((response) => {
    response.data.map((item) => {
      getList.append(createCard(item))
    })
  })
}

getCharacter()
