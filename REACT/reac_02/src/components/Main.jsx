import './Main.css'
import GenMxLogo from '../assets/generation_logo.jpg'

const Main = () => {
    return(
        <>
        <div className="main--container">
            <div className="main--head">
                <a href="https://mexico.generation.org/" target='_blank'>
                    <img src={GenMxLogo} className='main--logo'
                    alt='Logo Gen Mex'/>
                </a>
            </div>
        </div>
        </>
    )
}

export default Main;