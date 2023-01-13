import React, { Children } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import Styles from './discription.module.scss'

const Discriptionshowingbtn = ({ onClick, children }) => {
    return (
        <div className={Styles.buttonparent}>
            <IoIosArrowBack style={{ color: 'blue' }} />
            <button onClick={onClick}>{children}</button>
        </div>
    );
}

export default Discriptionshowingbtn;
