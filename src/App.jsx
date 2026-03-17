import { useEffect, useState } from "react";


function App() {

  /* const attriciApi = 'https://lanciweb.github.io/demo/api/actresses/'; */
  const attoriApi = 'https://lanciweb.github.io/demo/api/actors/';
  const [attori, setAttori] = useState([]);

  /*   fetch(attriciApi)
    .then(res => res.json())
    .then(attrici => {
      console.log(attrici);
      
    })
    .catch(error => {
      console.error(error);
    }) */


  function fetchAttori() {
    fetch(attoriApi)
      .then(res => res.json())
      .then(attori => {
        console.log(attori);
        setAttori(attori);
      })
      .catch(error => {
        console.error(error);
      })
  }

  useEffect(fetchAttori, []);


  return (
    <>
      {attori.map((attore) => (
        <div className="card" key={attore.id}>
          <img className="card-img-top" src={attore.image} alt={attore.name} />
          <div className="card-body">
            <h4 className="card-title">{attore.name}</h4>
            <div className="card-text">
              <p>{attore.biography}</p>
              <div>📅{attore.birth_year}</div>
              <div>🌍{attore.nationality}</div>
              {attore.awards.map((award) => {
                const premio = award;
                return (<div key={award}>🏆 {premio}</div>)
              })}
            </div>
          </div>
        </div>
      ))}
    </>

  )
}

export default App
