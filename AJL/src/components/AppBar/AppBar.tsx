
import Logo from '@/assets/Logo.svg'
import './AppBar.css'
const AppBar = () => {
  return (
    <div className='appBar'>
        <section className='logo'>
            <img src={Logo} alt="Logo" style={{height:'4vh',width:'4vh'}}/>
        </section>
    </div>
  )
}

export default AppBar