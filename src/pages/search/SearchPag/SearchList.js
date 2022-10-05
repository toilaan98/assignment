import styled from './SearchList.module.css';
import classNames from 'classnames/bind';
import SearchPopup from './SearchPage';
const cx = classNames.bind(styled);
const searchJson = require('../../../data/search.json');
function SearchList() {
    return (
        <div className={cx('wrapper_list')}>
            {searchJson.map((item, index) => (
                <div className={cx('container')} key={index}>
                    <div>
                        <img className={cx('img')} src={item.image_url} />
                    </div>
                    <div className={cx('center')}>
                        <h1 style={{ color: '#087ac8' }}>{item.name}</h1>
                        <br />
                        <h2>{item.distance} from center</h2>
                        <br />
                        <span className={cx('text_two')}> {item.tag}</span> <br />
                        <br />
                        <h2>{item.description}</h2>
                        <br />
                        <h2 style={{ color: item.free_cancel === true && '#1d9347', fontWeight: 1000 }}>
                            {item.free_cancel === false ? 'Hottel in lisbon' : 'Free cancellation'}
                        </h2>
                        <br />
                        <h2 style={{ color: '#1d9347' }}>you can cancel later , so lock in this great price today!</h2>
                        <br />
                    </div>
                    <div style={{flexDirection : 'column' ,flexWrap: 'wrap'}}>
                        <div className={cx('flex')}>
                            <div>
                                <h2 style={{ fontWeight: '800' }}>{item.rate_text}</h2>
                            </div>
                            <div style={{ width: '40', height: 'auto' }}>
                                <span className={cx('spans')}>{item.rate}</span>
                            </div>
                        </div> <br/>  <br/>  <br/> <br/> <br/> 
                        <div>
                              <h1 style={{float : 'right'}}>${item.price}</h1><br/> <br/><br/>
                              <h4 style={{float : 'right'}}>includes taxes and fees</h4>
                        </div><br/>  <br/> <br/> 
                        <div style={{float: 'right' ,position : 'relative'}}> <button className={cx('button')}>See availability </button> </div>
                        
                    </div>
                   
                </div>
            ))}
            
        </div>
    );
}
export default SearchList;
