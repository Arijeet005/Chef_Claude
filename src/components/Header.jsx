import chefLogo from '../assets/chef-claude-icon.png'
import '../index.css'

export default function Header(){
    return(
        <>
        <header className='header'>
            <img src={chefLogo}  className='header-img' alt="chef logo" />
            <span className='header-text'>Chef Claude</span>
        </header>
        </>
    )
}