import { useEffect, useState } from "react";


function App() {

  const attriciApi = 'https://lanciweb.github.io/demo/api/actresses/';
  const [attrici, setAttrici] = useState([]);
  const attoriApi = 'https://lanciweb.github.io/demo/api/actors/';
  const [attori, setAttori] = useState([]);

  function fetchAttrici() {
    fetch(attriciApi)
      .then(res => res.json())
      .then(attrici => {
        console.log(attrici);
        setAttrici(attrici);
      })
      .catch(error => {
        console.error(error);
      })
  }

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
  useEffect(fetchAttrici, []);

  /* //tentativo di unire array blocco 1
  const attriciCustId = attrici.map((attrice) => {

    attrice.key = ('attrice-' + attrice.id);
    //console.log(attrice);

  })
  //console.log(attriciCustId);

  const attoriCustId = attori.map((attore) => {

    attore.key = ('attore-' + attore.id);
    //console.log(attore);

  })


  const allPerformers = [...attriciCustId, ...attoriCustId];
  console.log(allPerformers);
 */


  return (
    <>
      <header>
        <div>
          <h1>They mov <span>i</span>e you</h1>
          <h2>Hall of fame</h2>
        </div>
      </header>

      <main>
        <div className="container">

          {/* //tentativo di unire array blocco 
          <div className="card_deck">
            {allPerformers.map((performer) => (
              <div className="card col-sm-6 col-md-4 col-lg-3" key={performer.key}>
                <div className="card-body">
                  <img src={performer.image} alt={performer.name} />
                  <div className="someInfo">
                    <div className="bioInfo">
                      <div>{performer.birth_year}</div>
                      <div>{performer.nationality}</div>
                    </div>
                    <div className="awardsInfo" >
                      {performer.awards.map((award) => {
                        const premio = award;
                        return (<div key={award}>{premio}</div>)
                      })}
                    </div>
                  </div>
                  <h3 className="card-title">{performer.name}</h3>
                  <div className="card-text">
                    <p>{performer.biography}</p>
                  </div>
                </div>
              </div>
            ))}

          </div>
           */}


          {/* one lists version */}
          <div className="card_deck">
            {attrici.map((attrice) => (
              <div className="card col-sm-6 col-md-4 col-lg-3" key={attrice.id}>
                <div className="card-body">
                  <img src={attrice.image} alt={attrice.name} />
                  <div className="someInfo">
                    <div className="bioInfo">
                      <div>{attrice.birth_year}</div>
                      <div>{attrice.nationality}</div>
                    </div>
                    <div className="awardsInfo" >
                      {attrice.awards.map((award) => {
                        const premio = award;
                        return (<div key={award}>{premio}</div>)
                      })}
                    </div>
                  </div>
                  <h3 className="card-title">{attrice.name}</h3>
                  <div className="card-text">
                    <p>{attrice.biography}</p>
                  </div>
                </div>
              </div>
            ))}
            {attori.map((attore) => (
              <div className="card col-sm-6 col-md-4 col-lg-3" key={attore.id}>
                <div className="card-body">
                  <img src={attore.image} alt={attore.name} />
                  <div className="someInfo">
                    <div className="bioInfo">
                      <div>{attore.birth_year}</div>
                      <div>{attore.nationality}</div>
                    </div>
                    <div className="awardsInfo" >
                      {attore.awards.map((award) => {
                        const premio = award;
                        return (<div key={award}>{premio}</div>)
                      })}
                    </div>
                  </div>
                  <h3 className="card-title">{attore.name}</h3>
                  <div className="card-text">
                    <p>{attore.biography}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          
          {/* two lists version */}
          {/* <h3>Actresses</h3>
          <div className="card_deck">
            {attrici.map((attrice) => (
              <div className="card col-sm-6 col-md-4 col-lg-3" key={attrice.id}>
                <div className="card-body">
                  <img src={attrice.image} alt={attrice.name} />
                  <div className="someInfo">
                    <div className="bioInfo">
                      <div>{attrice.birth_year}</div>
                      <div>{attrice.nationality}</div>
                    </div>
                    <div className="awardsInfo" >
                      {attrice.awards.map((award) => {
                        const premio = award;
                        return (<div key={award}>{premio}</div>)
                      })}
                    </div>
                  </div>
                  <h3 className="card-title">{attrice.name}</h3>
                  <div className="card-text">
                    <p>{attrice.biography}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3>Actors</h3>
          <div className="card_deck">
            {attori.map((attore) => (
              <div className="card col-sm-6 col-md-4 col-lg-3" key={attore.id}>
                <div className="card-body">
                  <img src={attore.image} alt={attore.name} />
                  <div className="someInfo">
                    <div className="bioInfo">
                      <div>{attore.birth_year}</div>
                      <div>{attore.nationality}</div>
                    </div>
                    <div className="awardsInfo" >
                      {attore.awards.map((award) => {
                        const premio = award;
                        return (<div key={award}>{premio}</div>)
                      })}
                    </div>
                  </div>
                  <h3 className="card-title">{attore.name}</h3>
                  <div className="card-text">
                    <p>{attore.biography}</p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}

        </div>
      </main>

      <footer>
        <div>
          They movie you <small>&hearts;</small> <span>Fr4v</span>
        </div>
      </footer>
    </>

  )
}

export default App
