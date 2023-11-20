import './style.scss'

const Features = ({imageSrc,imageAlt,title,text}) => (
  <div className={`Feature`}>
      <img className="Feature__icon" src={imageSrc} alt={imageAlt} />
      <h3 className="Feature__title">{title}</h3>
      <p className="Feature__text">{text}</p>
  </div>

);

export default Features;