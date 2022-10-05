import styled from './City.module.css';
import classNames from 'classnames/bind';
import cityJson from '../../../../data/city.json'
// console.log(cx('wrap'));
const cx = classNames.bind(styled);




function City() {
    return (
        <div className={cx('wapper')}>
            {cityJson.map((item, index) => (
                <div key={index} className={cx('image-container')}>
                    {<img className={cx('img')} src={item.image} />}
                    <div className={cx('span')}>
                        <h1>{item.name}</h1>
                        <h3>{item.subText}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default City;
