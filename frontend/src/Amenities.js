import React from 'react'
import About from './About'
import About2 from './About2'
import Price from './Price'


const Amenities = () => {

return (
<div className='card'>
      
<h2 className='block'>Amenities</h2>

<div className='amenities'>
<About />
</div>
<div className='amenities'>
<About2 />
</div>
<Price />
</div>
)

}

export default Amenities