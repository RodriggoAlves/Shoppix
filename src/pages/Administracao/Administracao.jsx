import './Administracao.css'
import '../../componentes/Menu/MenuAdministador/ItensMenu/Link'
import '../../componentes/Menu/MenuAdministador/ItensMenu/Link'
import Link from '../../componentes/Menu/MenuAdministador/ItensMenu/Link';

function Administracao() {
  return (

    <div className='menu'>

      <h2 className="titulo-menu">Administração</h2>
      
      <Link text={"Produtos"} to="/"/>
      <Link text={"Cadastrar produtos"} to="/cadastrar-produto"/>
      <Link text={"Relatórios"} to="/relatorios"/>

    </div>

  );
}

export default Administracao;
