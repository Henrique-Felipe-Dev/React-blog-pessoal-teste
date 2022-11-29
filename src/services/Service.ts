import axios from "axios";

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com/'
})

export const login = async(url: any, dados: any, setToken: any) => {
    const resposta = await api.post(url, dados)
    setToken(resposta.data.token)
}