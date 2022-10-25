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
          title="Programming Humor"/>
          <ShopTile source={dark}
          title="Dark Humor"/>
          <ShopTile source={spooky}
          title="Spooky Jokes"/>
          <ShopTile source={christmas}
          title="Christmas Jokes"/>
          <ShopTile source={pun}
          title="Puns"/>
          <ShopTile source={misc}
          title="Miscellaneous"/>
      </div>
    );
  }
  
  export default Shop;
  