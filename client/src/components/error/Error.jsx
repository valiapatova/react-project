import styles from './Error.module.css';
import { useContext } from 'react';

import AuthContext from '../../contexts/authContex';

export default function Error() {

    const {errorMessage} = useContext(AuthContext);

    if (errorMessage.text) {

        return (
            <div className={styles.div300}>
                <h1 style={{ color: "red", padding: '50px' }}>Opps ... something wrong !</h1>
                <h2 style={{ color: "green", padding: '50px' }}>{errorMessage.text}</h2>
            </div>

        );

    } else {

        return (
            <div className={styles.div300}>
                <h1 style={{ color: "red", padding: '50px' }}>Opps somting wrong...  !</h1>

            </div>
        );

    }

};