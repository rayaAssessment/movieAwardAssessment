import React from 'react';

const Nominee = ({ nominee, handleNomineeClick, selections, category }) => {
  return (
    <>
      <div className={`card ${selections[category.id] === nominee.id ? 'selected' : ''}`}
      >
        <p>{nominee.title}</p>
        <img src={nominee.photoUrL} alt={nominee.title} />
        <button onClick={() => handleNomineeClick(category.id, nominee.id)}>Select</button>
      </div>
    </>
  )
}

export default Nominee;