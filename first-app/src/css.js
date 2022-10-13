import React from 'react';
import styles from "./Css.module.css"
import img from "./img/pngwing.com (2).png"
const Css = () => {
    return (
        <>
            {/* <div className='test'>안녕</div> */}
            {/* <div className={styles.test}>안녕</div> */}
            <div className={styles.box1}>
                <div className={styles.eye1}>
                    <div className={styles.eye2}></div>
                </div>
                <div className={styles.box2}></div>
                <div className={styles.box3}></div>
                <div className={styles.box4}></div>
                <div className={styles.box5}></div>
                <div className={styles.box6}></div>
                <div className={styles.box7}></div>
                <img src={img} alt="" />
            </div>

        </>
    );
};

export default Css;