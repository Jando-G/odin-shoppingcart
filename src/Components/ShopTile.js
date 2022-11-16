import { Link } from "react-router-dom";
function ShopTile(props) {

    return (
    <Link to={`/jokes/${props.title}`}>
        <div className="ShopTile" style={{backgroundImage: `url(${props.source})`}}>
            <h1>{props.title}</h1>
        </div>
    </Link>
    );
  }
  
  export default ShopTile;
  