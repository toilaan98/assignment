import styled from './Header.module.css';
import NabarFont from '../Header/Navbar/Navbar';
import classNames from 'classnames/bind';

import Input from './search';
// console.log(cx('wrap'));
const cx = classNames.bind(styled);
function Header() {
    return (
        <header className={cx('bui-header')}>
            <div className={cx('bui-header__main')}>
                <div>
                    <h1 className={cx('hone')}>booking Website</h1>{' '}
                </div>
                <div className={cx('wrap')} >
                    <button className={cx('button')}> register </button>
                    <button className={cx('button')} > Login </button>
                </div>
            </div>
            <NabarFont/>
            <div className={cx('wrapper')}>
                <h1 className={cx('font')}>A lifetime of discounts ? it's Genius.</h1>
                <span> Get rewarded for your travels - instart saving of 10% or more with a free account </span>
            </div>
            <div className={cx('wrapper')}> 
            <button className={cx('button')}> register/Login</button>
            </div>
            <Input />
        </header>
    );
}
export default Header;
