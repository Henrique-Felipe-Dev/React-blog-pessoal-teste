import { Button, Grid, TextField, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UserLogin from '../../models/UserLogin'
import { login } from '../../services/Service';
import './Login.css'

function Login() {

    /*

    Todo o hook criado precisará de uma variável para armazenar seu valor e de uma função para alterá-lo

    1 - Criaremos o Hook useState para o modelo de UserLogin, passando os valores iniciais

    2 - Criaremos um método para recuperar o que o usuário digitar

    3 - Chamaremos o método criado nos TextFields

    4 - Criaremo o Hook useLocalStorage para armazenar o valor do Token, que traremos da API

    5 - Finalizaremos o método onSubmit, fazendo a comunicação com a api e armazenaremos o token

    6 - Por fim utilizaremos o useEffect, que vai verificar o token e redirecionar o usuário para a página /home, utilizando o Hook useNavigate

    Todo o useEffect precisa ter a função que ele vai executar e qual variável ele vai ficar observando. A partir do momento que a variável for alterada, logo o useEffect executará a função

    */

    const navigate = useNavigate()
    const [token, setToken] = useLocalStorage('token')
    const [userLogin, setUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: '',
        senha: '',
        token: ''
    })

    function updateModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

    useEffect(() => {
        if(token != ''){
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        try{
            await login('/usuarios/logar', userLogin, setToken)

            alert('Usuario Logado com sucesso')
        }catch(error){
            alert('Dados incorretos! Verifique aí, po')
        }
    }

    return (
        <>
            <Grid container justifyContent='center' alignItems='center'>

                <Grid item alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>

                            <Typography variant='h3' component='h3' gutterBottom color='textPrimary' align='center' className='textos1'>Entrar</Typography>

                            <TextField id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}></TextField>

                            <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' fullWidth type='password' value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}></TextField>

                            <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' color='primary'>Logar</Button>
                            </Box>


                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>

                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>

                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} className='imagem'></Grid>
            </Grid>
        </>
    )
}

export default Login;