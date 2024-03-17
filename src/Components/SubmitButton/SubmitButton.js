import React from 'react';

const SubmitButton = ({selections, handleSubmitBallot}) => {
  return (
    <div style={{display:"grid"}}>
      <button className='submitButton' onClick={()=> handleSubmitBallot(selections)}> Submit Nominations</button>
    </div>
  )
}

export default SubmitButton;