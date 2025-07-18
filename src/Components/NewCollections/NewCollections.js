import React from 'react'
import newcollection from '../../Assets/NewCollection.jpg'
import './NewCollections.css'

const NewCollections = () => {
  return (
    <div className='NewCollections'>
        <div className='image_section'>
            <img src= {newcollection} alt = 'newcollection' />
        </div>
        <div className='content_section'>
            <p>Be Bold, Be Daring</p>
            <h3>A Whole New Look</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button>VIEW MORE</button>
        </div>
    </div>
  )
}

export default NewCollections