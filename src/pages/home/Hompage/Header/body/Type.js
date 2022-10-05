import styled from './Type.module.css';
import classNames from 'classnames/bind';
import React from 'react';
const type = require('../../../../../data/type.json');
const cx = classNames.bind(styled);
function Type() {
    return (
        <React.Fragment>
        <h1 className={cx('text-content')}>Browse by property type</h1>
            <div className={cx('wapper')}>
                {type.map((item, index) => (
                    <div key={index} className={cx('image-container')}>
                        <img className={cx('img')} src={item.image} />
                        <span className={cx('span')}>
                            <h1>{item.name}</h1>
                            <h3>{item.count} hotels</h3>
                        </span>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}
export default Type;
