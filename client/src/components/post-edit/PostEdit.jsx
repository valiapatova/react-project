import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as postService from '../../services/postService.js';

import styles from './PostEdit.module.css';
import Path from '../../paths.js';

export default function PostEdit() {

    const navigate = useNavigate();
    const { postId } = useParams();

    console.log(`postId: ${postId}`);

    const [post, setPost] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    const [errorMessage, setErrorMessage] = useState({});

    useEffect(() => {
        postService.getOne(postId)
            .then(result => {
                setPost(result);
            })
            .catch(err => {

                console.log(err);

                setErrorMessage(state=>({...state,text:`Грешка при извличане на картата от сървъра ! - ${postId}`}));

                return (
                    <Error message={errorMessage} />
                );

                
            });


    }, [postId]);


    const editPostSubmitHandler = async (e) => {
        e.preventDefault();

        const newPostData = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await postService.edit(postId, newPostData);
            navigate('/posts');

        } catch (err) {
            // Error notification
            console.log(err);

            setErrorMessage(state=>({...state,text:`Грешка при редактиране на картата от сървъра ! -  ${postId}`}));           

            return (
                <Error message={errorMessage} />
            );
        }
    }

    const onChange = (e) => {

        setPost(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    };



    return (

        <div className={styles.heroBg_box}>

            <div className={styles.create_page}>

                {/* <div className={styles.heroBg_box}> */}

                    <section id="create-page" className={styles.auth}>
                        <form id="create" onSubmit={editPostSubmitHandler}>
                            <div className={styles.containerCreate}>
                                <h2>Редактирай карта</h2>
                                <label className={styles.label} htmlFor="title">Име:</label>
                                <input
                                    className={styles.inputText}
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="трите имена..."
                                    value = {post.title}
                                    onChange = {onChange}
                                />

                                <label className={styles.label} htmlFor="category">Фирма:</label>
                                <input
                                    className={styles.inputText}
                                    type="text"
                                    id="category"
                                    name="category"
                                    placeholder="фирма..."
                                    value={post.category}
                                    onChange={onChange}
                                />

                                <label className={styles.label} htmlFor="maxLevel">Възраст:</label>
                                <input
                                    type="number"
                                    id="maxLevel"
                                    name="maxLevel"
                                    min="1"
                                    placeholder="1"
                                    className={styles.inputText}
                                    value={post.maxLevel}
                                    onChange={onChange}
                                />

                                <label className={styles.label} htmlFor="imageUrl">Снимка:</label>
                                <input
                                    className={styles.inputText}
                                    type="text" id="imageUrl"
                                    name="imageUrl"
                                    placeholder="качи снимка..."
                                    value={post.imageUrl}
                                    onChange={onChange}
                                />

                                <label className={styles.label} htmlFor="summary">Резюме:</label>
                                <textarea
                                    name="summary"
                                    id="summary"
                                    value={post.summary}
                                    onChange={onChange}
                                >

                                </textarea>

                                <input className={styles.btn_submit} type="submit" value="Изпрати редакцията" />
                                {/* value="Редактирай карта" */}
                            </div>
                        </form>
                    </section>
                {/* </div> */}

            </div>
        </div>

    );
}
