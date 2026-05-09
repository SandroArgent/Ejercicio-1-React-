
const ProductsCard = ({producto, onSelect}) => {
    return(
        <div>
            <h3> {producto.name} </h3>
            <p> {producto.price} </p>


            <button onClick={()=> onSelect(producto)}>Ver mas</button>
            

        </div>



    )
}


export default ProductsCard;