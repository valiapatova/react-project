import { useNavigate } from 'react-router-dom';

import * as postService from '../../services/postService.js';

import styles from './PostCreate.module.css';

export default function PostCreate() {
    const navigate = useNavigate();

    const createPostSubmitHandler = async (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await postService.create(postData);
            navigate('/posts');

        } catch (err) {
            // Error notification
            console.log(err);
        }
    }

    return (

        <div className={styles.heroBg_box}>

            <div className={styles.create_page}>

                <div className={styles.heroBg_box}>

                    <section id="create-page" className={styles.auth}>
                        <form id="create" onSubmit={createPostSubmitHandler}>
                            <div className={styles.containerCreate}>
                                <h2>Създай карта</h2>
                                <label className={styles.label} htmlFor="title">Име:</label>
                                <input className={styles.inputText} type="text" id="title" name="title" placeholder="трите имена..." />

                                <label className={styles.label} htmlFor="category">Фирма:</label>
                                <input className={styles.inputText} type="text" id="category" name="category" placeholder="фирма,работодател..." />

                                <label className={styles.label} htmlFor="maxLevel">Възраст:</label>
                                <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" className={styles.inputText} />

                                <label className={styles.label} htmlFor="imageUrl">Снимка:</label>
                                <input className={styles.inputText} type="text" id="imageUrl" name="imageUrl" placeholder="качи снимка..." />

                                <label className={styles.label} htmlFor="summary">Резюме:</label>
                                <textarea name="summary" id="summary"></textarea>

                                <input className={styles.btn_submit} type="submit" value="Създай карта" />
                            </div>
                        </form>
                    </section>
                </div>



            </div>
        </div>




    );
}
