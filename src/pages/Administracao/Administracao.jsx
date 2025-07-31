import './Administracao.css'
import '../../componentes/Menu/MenuAdministador/ItensMenu/Link'
import '../../componentes/Menu/MenuAdministador/ItensMenu/Link'
import Link from '../../componentes/Menu/MenuAdministador/ItensMenu/Link';

function Administracao() {
  return (
    
    <div className='container-principal'>

      <div className='div-menu'>
          <h2 className="titulo-menu">Administração</h2>
          <Link text={"Produtos"} to="/produtos"/>
          <Link text={"Cadastrar produtos"} to="/cadastrar-produto"/>
          <Link text={"Relatórios"} to="/relatorios"/>
          <Link text={"Usuários"} to="/usuarios"/>
      </div>
    
      <div className='div-dashboard'>

        <h2 className='titulo-dashboard' >Dashboard</h2>

      </div>

    </div>

  );
}

export default Administracao;
