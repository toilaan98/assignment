import styled from './Footer.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styled);
const footer = require('../../../../data/footer.json');

function Footer() {
    return (
        <div className={cx('wrap')}>
        <div className={cx('wrapper')}>
            {footer.map((item) => (
                <div key={item.col_number}>
                    <div className={cx('text')}>
                        {item.col_values.map((item2, index) => (
                            <h2 key={index}>{item2}</h2>
                        ))}
                    </div>
                </div>
            ))}
        </div></div>
    );
}
export default Footer;
