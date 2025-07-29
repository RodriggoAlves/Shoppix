import './Administracao.css'

const ItensMenu = ['Produtos', 'Cadastrar Produto', 'Relatórios']

function Administracao() {
  return (
    <div className='menu'>
      <h2 className="titulo-menu">Administração</h2>

      {ItensMenu.map((texto, index) => (
        <a key={index} className="opcoes-menu">{texto}</a>
      ))}

    </div>
  );
}

export default Administracao;
