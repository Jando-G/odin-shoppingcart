import cookie from '../Assets/cookie.png';
import orange from '../Assets/orange.png';
function Earn(props) {
    return (
      <div className="Earn">
          <img src={cookie} alt="png Cookie" onClick={() => props.incrementCooks()}>
          </img>
      </div>
    );
  }
  
  export default Earn;
  