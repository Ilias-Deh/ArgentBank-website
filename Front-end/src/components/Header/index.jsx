import { Link } from 'react-router-dom'
import './style.scss'
import logo from '../../assets/argentBankLogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { deleteToken } from '../../redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const isConnect = useSelector((state) => state.user.isConnected)
  const userName = useSelector((state) => state.user.userName) 
  const dispatch = useDispatch()

  const handleLinkClick = event => {
    const token = "";
    dispatch(deleteToken(token))
  };
  return (
    <nav className='nav'>
        <Link to="/">
          <img src={logo} alt='logo' className='logo'></img>
        </Link>
        {isConnect ?
          <div className='connect'>
          <Link to="/profile" className='link-connect'>
            <FontAwesomeIcon icon={faCircleUser} />
            {userName}
            </Link>
          <Link to="/" className='link-connect' onClick={handleLinkClick} >
          <FontAwesomeIcon icon={faRightFromBracket} />
          Sign out
          </Link>
        </div>
        :
        <Link to="/login" className='link'>
        <FontAwesomeIcon icon={faCircleUser} />
        Sign in
        </Link>
        }
    </nav>
  )
}
export default Header;