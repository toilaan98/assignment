import styled from './SearchPage.module.css';
import classNames from 'classnames/bind';
import SearchList from './SearchList';
const cx = classNames.bind(styled);
function SearchPopup() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('search_input')}>
                <h1>Search</h1>
                <h2> destination</h2>
                <div>
                    <input className={cx('b')} type="text" />
                </div>
                <div>
                    <h2> Check-in-date </h2>
                    <input className={cx('b')} type="date" value="2022-07-22" onChange={e =>e.target.value} />
                </div>
                <div>
                    <h1>Options</h1>
                    <div className={cx('search')}>
                        <label>Min price per night </label> <input type="text" className={cx('input_i')} />
                    </div>
                    <div className={cx('search')}>
                        <label>Max price per night </label> <input type="text" className={cx('input_i')} />
                    </div>
                    <div className={cx('search')}>
                        <label>adult</label> <input type="number" value="1" onChange={e =>e.target.value} className={cx('input_i')} />
                    </div>
                    <div className={cx('search')}>
                        <label>children</label> <input type="text" className={cx('input_i')} />
                    </div>
                    <div className={cx('search')}>
                        <label>Room</label> <input type="number" value="1" onChange={e =>e.target.value} className={cx('input_i')} />
                    </div>
                    <div className={cx('button-div')}>
                        <button className={cx('button')}>Search</button>
                    </div>
                </div>
            </div>
            <SearchList/>
        </div>
    );
}
export default SearchPopup;
