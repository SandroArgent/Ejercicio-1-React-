const Header = ({menu}) => {
    return (
        <nav className="border-b border bg-zinc-800 px-6 h-16 flex gap-5 items-center justify-between">

            <h1 className="text-xl font">Instituto superior Santa Rosa de Calamuchita</h1>
        {menu.map(item => (
            <a key= {item.id}  href={item.image} > <img src= {item.image} alt={item.label}></img>   </a>
        ))}
        
        
        </nav>

    )

}

export default Header 