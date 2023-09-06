import { useState } from 'react'
import Review from './components/Review.jsx'
import reviews from './data.js'

const App = () => {
  const [curruntReviewer, setCurruntReviewer] = useState(0)
  const prevReviewer = () => {
    if (curruntReviewer > 0) {
      setCurruntReviewer((curruntReviewer) => curruntReviewer - 1)
    } else {
      setCurruntReviewer(reviews.length - 1)
    }
  }
  const nextReviewer = () => {
    if (curruntReviewer < reviews.length - 1) {
      setCurruntReviewer((curruntReviewer) => curruntReviewer + 1)
    } else {
      setCurruntReviewer(0)
    }
  }
  function getRandomNumberExcluding(min, max, exclude) {
    let randomNum
    do {
      randomNum = Math.floor(Math.random() * (max - min)) + min
    } while (randomNum === exclude)
    setCurruntReviewer(randomNum)
    return randomNum
  }
  return (
    <main>
      <Review
        {...reviews[curruntReviewer]}
        prevReviewer={prevReviewer}
        nextReviewer={nextReviewer}
        surprizeMe={() =>
          getRandomNumberExcluding(0, reviews.length, curruntReviewer)
        }
      />
    </main>
  )
}
export default App
