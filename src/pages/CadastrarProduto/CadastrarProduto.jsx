import { Form } from 'react-router-dom';
import Botao from '../../componentes/Botao/Botao';
import CampoTexto from '../../componentes/CampoTexto/CampoTexto'
import Formulario from '../../componentes/Formulario/Formulario';
import './CadastrarProduto.css'

function CadastrarProduto ( ) { 
    return (

        <Formulario>
            <h2 className='titulo'>Cadastrar Produto</h2>

            <CampoTexto type='text' placeholder='Nome do produto'/>
            <CampoTexto type='number' placeholder='Quantidade de produto'/>
            <CampoTexto type='text' placeholder='Tipo do produto'/>
            <CampoTexto type='text' placeholder='Descrição do produto'/>

            <Botao>Cadastrar Produto</Botao>
        </Formulario>
        
    )
}

export default CadastrarProduto;