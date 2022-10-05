import Header from './Hompage/Header/Header';
import City from './Hompage/Header/City';
import Type from './Hompage/Header/body/Type';
import HotelList from './Hompage/Header/body/HotelList';
import Register from './Hompage/footer/Register';
import Footer from './Hompage/footer/Footer';


const Home = () => {
    return (
     <div>
    
            <Header />
            <main>
            <City />
            <Type />
            <HotelList/>

            </main>
          <footer>
          <Register />
          </footer>
            </div>
    );
};

export default Home;
