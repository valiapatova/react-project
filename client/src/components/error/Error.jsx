import styles from './Error.module.css';

export default function Error({ message }) {

    if (message) {

        return (
            <div className={styles.div300}>
                <h1 style={{ color: "red", padding: '50px' }}>Opps somting wrong...  !</h1>
                <h2 style={{ color: "green", padding: '50px' }}>{message.text}</h2>
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