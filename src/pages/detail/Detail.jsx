import DetailPage from './DetailPage/DetailPage';
import Header from '../home/Hompage/Header/Header';
import Register from '../home/Hompage/footer/Register';
import Footer from '../home/Hompage/footer/Footer';
import './Detail.css'

const Detail = () => {
    return (
        <div className='golobal'>
            <Header />
                <DetailPage />
                <Register />
                
            
        </div>
    );
};

export default Detail;
