import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'

const Bio = () => {

    return (
        <>
        <body>
        <h1>About Black Diamond Escape</h1>
        <h1>Roxbury, NY</h1>
            <img src='aerial-view.jpeg' alt='aerial-view'></img>
        <h2>Welcome to <b>Black Diamond Escape</b> - a charming 3 bedroom, 2 bathroom rental for your <b>Catskill 
        Mountain</b> getaway offering breathtaking views of the great outdoors! It's recently renovated, equipped with 
        modern amenities including self check-in, a standing desk to work from home, game room with nostalgic arcade 
        games and a fully stocked coffee bar. Situated less than 5 miles from <b>Plattekill Mountain</b> and nearby many 
        local attractions, it’s an amazing escape exploring all that the area has to offer.</h2>
        <img src='bio-pic.png' alt='bio-pic'></img>

        <h2>
In the morning, you could enjoy a cup of coffee from our fully stocked coffee bar while watching the sun rise. If you’re 
seeking an adventure, seasonal activities include <b>skiing & snowboarding, hiking, kayaking and mountain biking.</b> A vacation 
near a ski resort in the woods offers a harmonious blend of adventure, tranquility, and natural beauty. Let the wilderness 
captivate your senses, as you carve your way through pristine slopes, explore hidden trails, and find solace in the embrace 
of the forest. Unwind in the comfort of your woodland retreat, cherishing the moments spent in harmony with nature and creating 
memories that will forever hold a special place in your heart. If you’re looking for a slower paced experience, we are ideally 
located for golfing at <b>Shepard Hills Golf Course</b> and <b>fishing at the East Branch Delaware River.</b> At night, cuddle up and roast 
some marshmallows in the fire pit or relax on the balcony and stargaze. It’s a peaceful getaway in the <b>Catskills for all seasons 
- skiing, hiking, kayaking, fishing, golfing</b> are just some of the nearby activities. It's a serene home that's close to many close 
area attractions and the neighboring towns of Roxbury & Margaretville.
        </h2>

<img src='nature-2.png' alt='nature-2'></img>
       <h2>
     
        NEARBY ATTRACTIONS:
  <div className='attractions'>
  <ul> 
<li><h3>Kimchee Harvest at East Branch Farms (0.9 mi)</h3></li>
<li><h3>Table to Farm Tours (2.1 mi)</h3></li>
<li><h3>Kirkside Park (2.5 mi)</h3></li>
<li><h3>Shephard Hills Golf Course (2.7 mi)</h3></li>
<li><h3>Plattekill Mountain (4.5 mi)</h3></li>
<li><h3>Susan’s Pleasant Pheasant Farm (4.7 mi) - seasonal</h3></li>
<li><h3>Roxbury Mountain Maple (5.1 mi)</h3></li>
<li><h3>Pakatan Farmers’ Market (5.5 mi)</h3></li>
<li><h3>Catskill Recreation Center (9.5 mi) - Gym/indoor pool daily passes by appointment</h3></li>
<li><h3>Schoharie Reservoir (13.8 mi)</h3></li>
<li><h3>Belleayre Mountain (15.7 mi)</h3></li>
<li><h3>Mine Kill Falls & State Park (15.8 mi)</h3></li>
</ul>
</div>     
</h2> 
        </body>
<h2><Link to = '/users'>Home</Link></h2>
    </>)
} 

export default Bio