import axios from 'axios';

const url = 'http://localhost:8080'

export default function useFetchApi() {
  async function getFromApi(type, text, setterFunction) {
    let endpoint = `${url}/${type}/`
    if (text) endpoint += `${text}/`
    let response = await axios.get(endpoint)
    setterFunction(response.data)
  }

  return { getFromApi }
}