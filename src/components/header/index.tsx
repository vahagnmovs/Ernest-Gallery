import {inspect} from "util";
import styles from '@/styles/header.module.css'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            {/*<img src="" alt="logo"/>*/}
            <span className={styles.headerText}>Handmade Paintings From Photos</span>
        </div>
    );
};

export default Header;