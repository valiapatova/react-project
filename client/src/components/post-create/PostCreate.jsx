import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../contexts/authContex.jsx';
import useForm from '../../hooks/useForm.js';

import * as postService from '../../services/postService.js';


import styles from './PostCreate.module.css';


// const initialFormValuesState = {
//         title: '',
//         category: '',
//         maxLevel: '',
//         imageUrl: '',
//         summary: '',
//     }

const CreatePostFormKeys = {

    Title: "title",
    Category: "category",
    MaxLevel: "maxLevel",
    ImageUrl: "imageUrl",
    Summary: "summary",
}




export default function PostCreate() {

    const { errorHandler } = useContext(AuthContext);

    const navigate = useNavigate();

    const createPostSubmitHandler = async (values) => {

        //e.preventDefault();
        //const postData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            // throw Error("Моята предизвикана грешка");

            await postService.create(values);
            navigate('/posts');

        } catch (err) {
            // Error notification
            console.log(err);
            errorHandler(err);
        }
    }

    // const initialFormValuesState = {
    //     title: '',
    //     category: '',
    //     maxLevel: '',
    //     imageUrl: '',
    //     summary: '',
    // }

    const { values, onChange, onSubmit, onReset } = useForm(createPostSubmitHandler, {
        [CreatePostFormKeys.Title]: '',
        [CreatePostFormKeys.Category]: '',
        [CreatePostFormKeys.MaxLevel]: '',
        [CreatePostFormKeys.ImageUrl]: '',
        [CreatePostFormKeys.Summary]: '',
    });

    return (

        <div className={styles.heroBg_box}>

            <div className={styles.create_page}>

                {/* <div className={styles.heroBg_box}> */}

                <section id="create-page" className={styles.auth}>

                    <form id="create" onSubmit={onSubmit}>

                        <div className={styles.containerCreate}>
                            <h2>Създай карта</h2>
                            <label className={styles.label} htmlFor="title">Име:</label>
                            <input
                                className={styles.inputText}
                                type="text"
                                id="title"
                                name={CreatePostFormKeys.Title}
                                value={values[CreatePostFormKeys.Title]}
                                onChange={onChange}
                                placeholder="трите имена..."
                            />

                            <label className={styles.label} htmlFor="category">Фирма:</label>
                            <input
                                className={styles.inputText}
                                type="text"
                                id="category"
                                name={CreatePostFormKeys.Category}
                                value={values[CreatePostFormKeys.Category]}
                                onChange={onChange}
                                placeholder="фирма,работодател..."
                            />

                            <label className={styles.label} htmlFor="maxLevel">Възраст:</label>
                            <input
                                className={styles.inputText}
                                type="number"
                                id="maxLevel"
                                name={CreatePostFormKeys.MaxLevel}
                                min="1"
                                placeholder="1"
                                value={values[CreatePostFormKeys.MaxLevel]}
                                onChange={onChange}
                            />

                            <label className={styles.label} htmlFor="imageUrl">Снимка:</label>
                            <input
                                className={styles.inputText}
                                type="text"
                                id="imageUrl"
                                name={CreatePostFormKeys.ImageUrl}
                                value={values[CreatePostFormKeys.ImageUrl]}
                                onChange={onChange}
                                placeholder="качи снимка..."
                            />

                            <label className={styles.label} htmlFor="summary">Резюме:</label>
                            <textarea
                                name={CreatePostFormKeys.Summary}
                                id="summary"
                                value={values[CreatePostFormKeys.Summary]}
                                onChange={onChange}
                            >
                            </textarea>

                            <div className={styles.buttons}>

                                <input
                                    className={styles.btn_submit}
                                    type="submit"
                                    value="Създай карта"
                                />

                                <button type="button"
                                    className={styles.btn_reset}
                                    onClick={onReset}
                                >
                                    Изчисти
                                </button>
                                
                            </div>

                        </div>
                    </form>

                </section>

                {/* </div> */}
            </div>
        </div>

    );
}
