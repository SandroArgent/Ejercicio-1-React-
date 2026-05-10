
//hero es un menu llamativo, de presentacion
const Hero = ({categorias, marcas}) => {  
    return (
        <div className="mb-20 flex flex-col gap-15 mt-10 ">  
            <h2 className="text-1xl font-bold ">
                <div className="flex flex-row gap-10 m-4">
                {categorias.map(item => (
                    <span key={item.id}> {item.name} </span>
                ))}
                </div>
            </h2>
            <h2 className="text-2xl font-bold">
                <div className="flex flex-row gap-4 m-4">
                {marcas.map(item => (
                    <span key ={item.id} > {item.name} </span>
                ))}
                </div>
            </h2>


        </div>


    )
}

export default Hero;