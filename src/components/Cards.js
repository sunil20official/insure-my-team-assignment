import React from 'react'

 const Cards = ( {cards}  ) => {

  return (
    <div className='container card-container' style={{textAlign:"center"}}>
      {
        cards.length === 0 ? 
        <div className="preloader-wrapper active" style={{textAlign:"center" , margin:"20rem"}} >
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div><div className="gap-patch">
              <div className="circle"></div>
            </div><div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
         : 
         <div className="row">
          {
            cards.map((card) => (
              <div className="col s12 m6" key={card.id}>
                <div className="card cyan accent-1 z-depth-4">
                    <div className="card-content black-text darken-4" style={{}}>
                      <span className="card-title card-heading" style={{fontSize:"medium" , lineHeight:"30px"}}>
                        <strong> {card.title} </strong>
                      </span>
                      <p style={{fontSize:"small" }}>
                        {card.body}
                      </p>
                      <div className="card-action user-name" style={{}}>
                        <p style={{float:"right"}}> By ~~UserId : {card.userId} </p>
                      </div>
                    </div>
                </div>
              </div>
            ))
          }
        </div>
      }  
    </div>
  )
}

export default Cards;