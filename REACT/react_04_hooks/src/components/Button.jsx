import './Button.css'

/* Props. Propiedades que se pueden asignar a los componentes para modificar el texto, la informacion desde la renderizacion del mismo.
Se asignan como parametro de la funcion con el nombre del prop y debe ir entre llaves
se manda a llamar en el bloque de codigo donde se debe implementar
Se manda a llamar en el bloque de codigo donde se debe implementar utilizando llaves
*/

const Button = ({label}) => {
    return (
        <>
            <button>
                {label}
            </button>
        </>
    )
}

export default Button;