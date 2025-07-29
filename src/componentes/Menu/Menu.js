import './Menu.css'

const itensNoMenu = ['Inicio', 'Produtos', 'Quem somos ', 'Fale conosco']


function Menu ( ) {
    return (
        <ul className='itensMenu'>
            {itensNoMenu.map( (texto) => (
                <li className='itens'><p>{texto}</p></li>
            ) )}
        </ul>
    )
}

export default Menu;