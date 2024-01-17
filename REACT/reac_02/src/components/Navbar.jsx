import './Navbar.css'

const Navbar = () => {
    return(
        <>
        <div className='navbar--container'>
            <div className='navbar--title'>
                <h1>GenMex-35</h1>
            </div>
            <div className='navbar--links'>

                <div className="navbar--link">
                    <a href="#">Home</a>
                </div>
                <div className="navbar--link"></div>
                <a href="#">About</a>
                <div className="navbar--link">
                    <a href="#">Astros API</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;