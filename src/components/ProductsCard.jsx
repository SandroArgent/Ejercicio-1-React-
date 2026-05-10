
const ProductsCard = ({producto, onSelect}) => {
    return(
        <div className="grid grid-cols-1 md: grid-cols-2 lg: grid-cols-3 gap-20">
            <h3 className="font-medium"> {producto.name} </h3>
            <p> {producto.price} </p>


            <button onClick={()=> onSelect(producto)}>Ver mas</button>
            

        </div>



    )
}


export default ProductsCard;