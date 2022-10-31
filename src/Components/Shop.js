import ShopTile from './ShopTile';
import programming from '../Assets/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg';
import dark from '../Assets/sergiu-baica-5hCneY6YeFQ-unsplash.jpg';
import spooky from '../Assets/photo-1572860177022-8fda92a90c95.avif';
import christmas from '../Assets/roberto-nickson-5PQn41LFsQk-unsplash.jpg';
import pun from '../Assets/girl-with-red-hat-cpkB8SumMy4-unsplash.jpg';
import misc from '../Assets/mike-dorner-sf_1ZDA1YFw-unsplash.jpg';


function Shop() {
    return (
      <div className="Shop">
          <ShopTile source={programming}
          title="Programming"/>
          <ShopTile source={dark}
          title="Dark"/>
          <ShopTile source={spooky}
          title="Spooky"/>
          <ShopTile source={christmas}
          title="Christmas"/>
          <ShopTile source={pun}
          title="Pun"/>
          <ShopTile source={misc}
          title="Misc"/>
      </div>
    );
  }
  
  export default Shop;
  