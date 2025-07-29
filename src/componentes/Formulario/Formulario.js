import './Formulario.css'

function Formulario ( {children, className} ) {
    return (
        <form className={`container-formulario ${className || ''}`}>
            {children}
        </form>
    )
}

export default Formulario;