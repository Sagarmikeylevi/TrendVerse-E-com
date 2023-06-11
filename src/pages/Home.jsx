import Brands from "../components/Brands";
import CollectionGrid from "../components/CollectionGrid";
import CurrentPicks from "../components/CurrentPicks";
import FeaturedProduct from "../components/FeaturedProduct";
import NewsletterSubscription from "../components/NewsletterSubscription";

const Home = () => {
  return (
    <>
      <CollectionGrid />
      <Brands />
      <CurrentPicks />
      {/* <FeaturedProduct />
      <NewsletterSubscription /> */}
    </>
  );
};

export default Home;
