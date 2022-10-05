import styled from './DetailPage.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
const cx = classNames.bind(styled);
const detail = require('../../../data/detail.json');
console.log(detail.name);
function DetailPage() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrap_name_button')}>
                <div style={{ margin: '200' }}>
                    <h1>{detail.name}</h1>
                </div>
                <div>
                    <button className={cx('button')}> Reserve or Book Now</button>
                </div>
            </div>
            <div>
                <h3>
                    {' '}
                    <FontAwesomeIcon icon={faLocationPin} /> {detail.address}
                </h3>
                <br />
                <h2 style={{ color: '#0c76c7' }}>{detail.distance}</h2>
                <br />
                <h2 style={{ color: 'green' }}>{detail.price}</h2>
            </div>
            <div className={cx('wrap_img')}>
                {detail.photos.map((item, index) => (
                    <div key={index} className={cx('img_item')}>
                        <img className={cx('img')} src={item} />
                    </div>
                ))}
            </div>
            <div style={{display: 'flex', justifyContent : 'space-between'}}>
                <div className={cx('content')}>
                    <h1>{detail.title}</h1>
                    <br />
                    <h2>{detail.description}</h2>
                </div>
                <div className={cx('address')}>
                    <div className={cx('wrap')}>
                        <h1>Perfect for a 9-night stay!</h1>
                        <h2>
                            located in the real heart of Krakow this property has an excellent location score of 9,8!{' '}
                        </h2>
                        <br /> <br />
                        <h1>
                            
                            ${detail.nine_night_price}
                            <span>(9 nights)</span>
                        </h1>
                        <br />
                        <button className={cx('button', 'two_button')}>Reserve or Book Now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DetailPage;
