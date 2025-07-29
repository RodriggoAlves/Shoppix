import CampoTexto from '../../componentes/CampoTexto/CampoTexto';
import Botao from '../../componentes/Botao/Botao';
import Link from '../../componentes/Link/Link';
import Formulario from '../../componentes/Formulario/Formulario';
import './Login.css'

function Login() {
    return (

    <Formulario className={`formulario-login`}>

        <h2 className='titulo-login'>Login</h2>

        <CampoTexto type='text' placeholder='Usuário'/>
        <CampoTexto type='password' placeholder='Senha'/>

        <Botao>Fazer Login</Botao>

        <Link text="Esqueci minha senha" to="/resetar-senha"/>

        <Link text="Criar usuário" to="/cadastrar-usuario"/>


    </Formulario>

    )
}

export default Login;