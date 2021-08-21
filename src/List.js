import React from 'react';


const List = ({ people,find }) => {
    return (
      <>
        {people.map((person) => {
          const { id, name, age, image,country } = person;
          if (!name.toLowerCase().includes(find.toLowerCase())) return null;
          return (
            <article key={id} className='person'>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
                <p>{country}</p>
              </div>
            </article>
          );
        })}
        
      </>
    );
  };
  
export default List;
