const Header = ({menu}) => {
    return (
        <nav>
        {menu.map(item => (
            <a key= {item.id}> {item.label} </a>
        ))}
        
        
        </nav>

    )

}

export default Header 