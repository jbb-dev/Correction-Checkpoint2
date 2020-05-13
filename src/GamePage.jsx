import React from 'react'
import {Link} from 'react-router-dom'


const GamePage = ({location}) =>{
    const screenshots = location.state.short_screenshots;
    console.log(screenshots)
    return(
        <div className='container'>
                {screenshots.map(e => {
                    return <img style={{maxWidth: '100px'}} src={e.image} />
                })}
            <Link to='/'>Home</Link>            
        </div>
    )
}

export default GamePage