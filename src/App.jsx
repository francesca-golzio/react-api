

function App() {

  const attriciApi = 'https://lanciweb.github.io/demo/api/actresses/';
  const attoriApi = 'https://lanciweb.github.io/demo/api/actors/';

  fetch(attriciApi)
  .then(res => res.json())
  .then(attrici => {
    console.log(attrici);
    
  })
  .catch(error => {
    console.error(error);
  })
  
  fetch(attoriApi)
  .then(res => res.json())
  .then(attori => {
    console.log(attori);
    
  })
  .catch(error => {
    console.error(error);
  })

  return (
    <>
      
      



    </>
  )
}

export default App
