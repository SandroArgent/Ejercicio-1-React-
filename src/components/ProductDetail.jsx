

const ProductDetail =({producto, volver}) =>{
    return (

        <section>
            <h2> {producto.name}  </h2>

            <p> {producto.price}  </p>

    

            <button onClick={volver}>Volver</button>


        </section>


    )

}

export default ProductDetail;