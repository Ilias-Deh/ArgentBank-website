import './style.scss'
import banner from "../../assets/bank-tree.jpeg" 

function Banner() {
  return (
    <div>
        <div style={{backgroundImage:`url(${banner})`}} alt='banner' className='banner'></div>
        <div className='banner-text'>
            <h2 className='banner-title'>No fees.</h2>
            <h2 className='banner-title'>No minimum deposit</h2>
            <h2 className='banner-title'>High interest rates</h2>
            <p className='banner-description'>Open a savings account with Argent Bank today!</p>
        </div>
    </div>
  )
}
export default Banner;