function ShopTile(props) {

    return (
    <div className="ShopTile" style={{backgroundImage: `url(${props.source})`}}>
        <h1>{props.title}</h1>
    </div>
    );
  }
  
  export default ShopTile;
  