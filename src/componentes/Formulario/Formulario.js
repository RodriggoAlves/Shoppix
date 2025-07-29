import './Formulario.css'

function Formulario ( {children, className} ) {
    return (
        <div className='div-formulario'>
            <form className={`container-formulario ${className || ''}`}>
                {children}
            </form>
        </div>
    )
}

export default Formulario;