import styled from './HotelList.module.css';
import classNames from 'classnames/bind';
import React from 'react';
const cx = classNames.bind(styled);
const hotelsJson = require('../../../../../data/hotel_list.json');

function HotelList() {
    return (
        <React.Fragment>
            <h1 className={cx('text-content')}> Homes guests love</h1>
            <div className={cx('wrapper-hotels')}>
                {hotelsJson.map((item, index) => (
                    <div key={index} className={cx('image-container')}>
                        <img className={cx('img')} src={item.image_url} />
                        <div className={cx('content')}>
                  <a href='http://localhost:3000/detail'><h1>{item.name}</h1> </a>
                  <h2>{item.city}</h2>
                  <h1> Starting from ${item.price}</h1>
                  <div className={cx('container_box')}> <div className={cx('box')}> <h2> {item.rate} </h2> </div> <h2>{  item.type}</h2> </div>
                </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}
export default HotelList;
