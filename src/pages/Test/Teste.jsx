import './Teste.css'
import '../../componentes/Menu/MenuAdministador/ItensMenu/Link'
import '../../componentes/Menu/MenuAdministador/ItensMenu/Link'
import Link from '../../componentes/Menu/MenuAdministador/ItensMenu/Link';
 
function Teste() {


    const itensMenu = [
        {text:'Produtos',to:'/produtos'},
        {text:'Cadastrar',to:'/Cadastrar'},
        {text:'Relatórios',to:'/relatorios'},
        {text:'Usuários',to:'/usuarios'},
        {text:'Ighor Lima', to:'/teste'}
    ]

  return (

    <div className='container-principal'>

      <div className='div-menu'>

          <h2 className="titulo-menu">Administração</h2>

          {itensMenu.map((item) =>
            <Link text={item.text} to={item.to}/>
               
        )}
          
          
      </div>
    
      <div className='div-dashboard'>

        <h2 className='titulo-dashboard' >Dashboard</h2>

      </div>

    </div>

  );
}

export default Teste;
