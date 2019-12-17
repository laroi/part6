import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const add = async (data) => {
    const resp = await axios.post(baseUrl, data);
    return resp.data;
}
export default { getAll, add }
