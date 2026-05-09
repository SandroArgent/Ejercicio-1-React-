import ProductsCard from "./ProductsCard";


const ProductSection = ({productos, seleccionar}) =>{
    return (

        <section>
            {productos.map(item =>(
                <ProductsCard
                key={item.id}
                producto={item}
                onSelect ={seleccionar} //El onSelect es del productCard, este tiene eso y producto + key
                />   
                
            ))}




        </section>
    )

}

export default ProductSection;