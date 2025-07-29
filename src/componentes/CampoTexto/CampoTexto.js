import './CampoTexto.css'

function CampoTexto ({type ='text', placeholder = ''}) {
    return (
        <input type={type} placeholder={placeholder} className='CampoTexto'/>
    )
}

export default CampoTexto;