import Hero from '../components/Hero';
import Title from '../components/Title';
import LatestCollection from '../components/LatestCollection';
import BestSeller from '../components/BestSeller';
import OurPolicy from '../components/OurPolicy';
import NewlatterBox from '../components/NewlatterBox';

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <Title />
      <BestSeller />
      <OurPolicy/>
      <NewlatterBox/>
    </div>
  );
};

export default Home;
