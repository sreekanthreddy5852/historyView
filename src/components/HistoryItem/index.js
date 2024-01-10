import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li>
      <div className="list-container">
        <div className="details-container">
          <p className="time">{timeAccessed}</p>
          <img src={logoUrl} className="logo" alt="domain logo" />
          <p className="heading">{title}</p>
          <p className="para">{domainUrl}</p>
        </div>
        <button data-testid="delete" onClick={onDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
