import React from 'react'
import { Row, Col } from 'react-bootstrap'
const AlbumBottomSuggestionCard = ({ title, artist, price, image }) => {
    const cardStyle = {
        width: '24vw',
        height: '25vh',
        // padding: '1rem',
        marginBottom: '1rem',
        marginLeft: '0.1rem',
        marginTop:'auto',
        display: 'flex',
        padding: '0 !important',
        

    }
    return (
        <div style={cardStyle}>

            <Col>
                <div style={{ lineHeight: '1.2' }}>
                    <p style={{ fontWeight: 'Bold' }}>{title}</p>
                    <p >{artist}</p>


                </div>
            </Col>
          
                <img src={image} alt='album pic' width='200px' height='200px'></img>
        


        </div>
    )
}

export default AlbumBottomSuggestionCard