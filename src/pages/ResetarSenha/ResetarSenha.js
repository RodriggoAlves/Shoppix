import Botao from "../../componentes/Botao/Botao";
import CampoTexto from "../../componentes/CampoTexto/CampoTexto";
import Formulario from "../../componentes/Formulario/Formulario";
import './ResetarSenha.css'

function ResetarSenha ( ) { 
    return ( 

        <Formulario className={`formulario-resetar-senha`}>

            <h2 className="titulo-recuperar-senha">Recuperar Senha</h2>
            <CampoTexto type="email" placeholder="Email"/>
            <CampoTexto type="text" placeholder="Usuário"/>

            <Botao>Enviar email</Botao>

        </Formulario>
      
    )
}

export default ResetarSenha;