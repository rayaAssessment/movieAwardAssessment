import React from 'react'
import Nominee from '../Nominee/Nominee'

const Categories = ({ category, handleNomineeClick, selections }) => {
    return (
        <div className='category'>
            <h2 className='category-title'>{category.title}</h2>
            <div className='list'>
                {category.items.map((nominee) => (

                    <Nominee key={nominee.id} nominee={nominee} handleNomineeClick={handleNomineeClick} selections={selections} category={category} />
                ))}
            </div>
        </div>


    )
}

export default Categories;
