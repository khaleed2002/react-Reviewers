import './Review.css'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa'
const Review = ({
  image,
  name,
  job,
  text,
  prevReviewer,
  nextReviewer,
  surprizeMe,
}) => {
  return (
    <div className="review">
      <img src={image} alt="reviewer image" className="review--img" />
      <div>
        <h3>{name}</h3>
        <h5>{job}</h5>
      </div>
      <p>{text}</p>
      <div className="review--slide-buttons">
        <button onClick={prevReviewer}>
          <FaLessThan className='review--prev'/>
        </button>
        <button onClick={nextReviewer}>
          <FaGreaterThan className='review--next' />
        </button>
      </div>
      <button className="review--surprise-me-button" onClick={surprizeMe}>
        surprize me
      </button>
    </div>
  )
}
export default Review
