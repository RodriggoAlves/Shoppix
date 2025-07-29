import './Registrar.css'
import CampoTexto from '../../componentes/CampoTexto/CampoTexto'
import Botao from '../../componentes/Botao/Botao'
import Formulario from '../../componentes/Formulario/Formulario';
import Link from '../../componentes/Link/Link';

function Registrar() {
    return (
        
            <Formulario className={`formulario-registrar`}>
                
                <h2 className='titulo-login'>Registrar</h2>

                <CampoTexto type='email' placeholder='Email'/>
                <CampoTexto type='text' placeholder='Usuário'/>
                <CampoTexto type='password' placeholder='Senha'/>
                
                <Botao>cadastrar usuário</Botao>

                <Link text="Fazer Login" to="/"/>

            </Formulario> 
    )
}

export default Registrar;