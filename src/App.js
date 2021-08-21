import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(data);
 const[find,setFind]=useState('');
  // const filter = (e) => {
  //   const keyword = e.target.value;

  //   if (keyword !== '') {
  //     const results = data.filter((user) => {
  //       return user.name.toLowerCase().startsWith(keyword.toLowerCase());
  //       // Use the toLowerCase() method to make it case-insensitive
  //     });
  //     setFoundUsers(results);
  //   } else {
  //     setFoundUsers();
  //     // If the text field is empty, show all users
  //   }

  //   setName(keyword);
  // };

  
  const [people, setPeople] = useState(data)
//let[search,setSearch]=useState(data)
  const setCountry=()=>
  {
  
     return setPeople( data.filter(item=>item.country==='india'));
    
  }

  const setAge=()=>
  {
    return setPeople(data.filter(item=>item.age<18))
  }
const setIdiot=()=>{
  return setPeople(data.filter(item=>item.id===5))
}

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <input
        type="search"
        value={find}
        onChange={(e)=>setFind(e.target.value)}
        className="input"
        placeholder="Filter"
      />

        <List people={people} find={find} />
        <button onClick={() => setPeople([])}>clear all</button>

        <button onClick={()=>setCountry()}>India</button> 
        
        <button onClick={setAge}>Age</button> 
        <button onClick={setIdiot}>idiot</button> 
        {/* <div className="container">

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div> */}
      </section>

    </main>
  
  )
}

export default App
