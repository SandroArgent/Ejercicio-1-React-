

const Hero = ({categorias, marcas}) => {
    return (
        <div>
            <h2>
                {categorias.map(item => (
                    <span key={item.id}> {item.name} </span>
                ))}
            </h2>
            <h2>

                {marcas.map(item => (
                    <span key ={item.id} > {item.name} </span>
                ))}

            </h2>


        </div>


    )
}

export default Hero;