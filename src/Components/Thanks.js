import { useEffect, useState} from "react";
function Thanks(props) {
  const { cart, clearCart } = props;
  const [jokes, setJokes] = useState(null)
  const [plshelp, setHelp] = useState('i cannot handle this anymore');
  
  useEffect(() => {
    const cartCpy = cart;
    let jokeList;
    jokes != null ? jokeList = [...jokes] : jokeList = [];
    if(Object.keys(cartCpy).length) {
      for(let i = 0; i < Object.keys(cartCpy).length; i++) {
        let type = Object.keys(cartCpy)[i].charAt(Object.keys(cartCpy)[i].length - 1);
        if(type === '0') {
          type = 'single';
        }
        else {
          type = 'twopart';
        }
        let jokeCat = Object.keys(cartCpy)[i].slice(0, -1);
        for(let l = 0; l < cartCpy[Object.keys(cartCpy)[i]]; l++) {
          fetch(`https://v2.jokeapi.dev/joke/${jokeCat}?blacklistFlags=nsfw,racist,sexist&type=${type}`)
            .then(res => res.json())
            .then(data => {
              if(data.error) {
                jokeList.push(`A ${jokeCat} joke went missing ;-; (fetch error)`);
              }
              else {
                jokeList.push(data)
              }
            });
        }
      }
      clearCart();
    }
    setJokes(jokeList);

    setTimeout(() => {
      setHelp('pls just work')
    }, 1000)


  }, []);
  console.log(jokes)
    return (
      <div className="Thanks">
          <h2>These jokes dissappear when you reload this page.</h2>
          {jokes && jokes.map((data, i) => {
            if (typeof data == 'string') {
              return <li key={i}>{data}</li>
            }
            else if(data.type === "twopart") {
              return <li key={i}>
                         <h3>{data.category} Joke ({data.type})</h3>
                         <p>{data.setup}</p>
                         <p>{data.delivery} </p>
                     </li>
            }
            else {
              return <li key={i}>
                        <h3>{data.category} Joke ({data.type})</h3>
                        <p>{data.joke}</p>
                     </li>
            }
          })}
      </div>
    );
  }
  export default Thanks;
  