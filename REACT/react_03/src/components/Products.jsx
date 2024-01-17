import './Products.css'



// const Products = (props) => {
const Products = ({img, name, description, price}) => {
    return (
        <>
            {/*Agregando las propiedades directamente al componente, pero no se modifican las propiedades al importar el Componente en App.jsx, es decir, se repite la misma información
        <div className="cards">
            <div className="products--card">
                <img src="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933" alt="sneakers" />
                <h3>Fashion</h3>
                <p>Tennis Fitness Running Purple</p>
                <h4>$1958</h4>
            
            </div>
        </div>
        */}
            {/*Props estructurados. Puedo asignar diferentes propiedaes a un div sin tener que generar muchos props, solamente usando la palabra reservada 'props' como parametro de la funcion*/}
            {/* <div className="cards">
            <div className="products--card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <h4>{props.price}</h4>
            
            </div>
        </div> */}

            {/* Props desdestructurados. Permite asignar datos de un objeto a una variable separada para que dicha variable pueda contener los datos provenientes del objeto.
        No utilizamos 'props' como parametro de la funcion, sino que, asignamos parametros a cada elementos y los llamados directamente en dichos elementos.
        * Los props desestructadores viven como parámetros, pero entre llaves y se les asigna un nombre específico */}

            <div className="cards">
                <div className="products--card">
                    <img src={img} />
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h4>{price}</h4>

                </div>
            </div>
        </>


    )
}

export default Products;