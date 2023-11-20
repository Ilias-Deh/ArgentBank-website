import './style.scss'

export default function Account({title, amount, type}) {
  return (
    <div className='Account'>
      <div>
        <h3 className="Account__title">{title}</h3>
        <p className="Account__amount">{amount}</p>
        <p className="Account__type">{type}</p>
      </div>
      <button className="Account__Button">View Transactions</button>
    </div>   
  )
  }