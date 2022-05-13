import axios from 'axios'

export const callApi = () => {
  axios
    .get('https://www.breakingbadapi.com/api/characters')
    .then((response) => response.data)
    .then((data) => data)
    .catch((error) => console.log('Se ha producido un error'))
}
