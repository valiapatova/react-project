import { useEffect, useState, useContext } from "react";
import { Link, useParams, Navigate, useNavigate } from "react-router-dom";

import AuthContext from '../../contexts/authContex';
import * as postService from '../../services/postService.js';
import * as commentService from '../../services/commentService.js';

import styles from './PostDetails.module.css';
import Path from "../../paths.js";
import { pathToUrl } from "../../utils/pathUtils.js";

export default function PostDetails() {

    const { email, userId } = useContext(AuthContext);

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        postService.getOne(postId)
            .then(setPost)

        commentService.getAll(postId)
            .then(setComments);
    }, [postId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            postId,
            formData.get('comment')
        );

        setComments(state => [...state,
        { ...newComment, owner: { email } }]
        );
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Сигурни ли сте, че искате да изтриете карта за ${post.title} ?`);

        if (hasConfirmed) {

            await postService.remove(postId);

            navigate(Path.Posts);
        }
    };


    return (
        <div className={styles.heroBgDetails_box}>

            <section id="post-details" className={styles.post_details}>

                <h2><b>Детайли за медицинска карта</b></h2>
                <div className={styles.infoSection}>
                    <div className={styles.post_header}>
                        <img className={styles.post_img} src={post.imageUrl} alt={post.title} />
                        <h1>{post.title}</h1>
                        <span className={styles.levels}>Години: {post.maxLevel}</span>
                        <p className={styles.type}>{post.category}</p>
                    </div>

                    <p className={styles.text}>{post.summary}</p>

                    <div className={styles.details_comments}>
                        <h3>Диагнози:</h3>
                        <ul>
                            {comments.map(({ _id, text, owner: { email } }) => (
                                <li key={_id} className={styles.comment}>
                                    <p><span className={styles.spanName} >{email}</span>:<br/>&nbsp;&nbsp;{text}</p>
                                </li>
                            ))}
                        </ul>

                        {comments.length === 0 && (
                            <p className={styles.no_articles}>Няма въведени диагнози</p>
                        )}
                    </div>


                    {/* Edit/Delete buttons ( Only for creator of this game )   */}

                    {userId === post._ownerId && (

                        <div className={styles.buttons}>

                            <Link to={pathToUrl(Path.PostEdit, { postId })} className={styles.button}>Редактирай</Link>

                            {/* <Link to={pathToUrl(Path.PostDelete, { postId })} className={styles.button}>Изтрий</Link> */}
                            <button className={styles.buttonDelete} onClick={deleteButtonClickHandler}>Изтрий</button>
                        </div>

                    )}

                </div>


                <article className={styles.create_comment}>
                    <label>Добави диагноза :</label>

                    <form className={styles.form} onSubmit={addCommentHandler}>

                        <textarea name="comment" placeholder="Диагноза......"></textarea>

                        <input className={styles.btn_submit} type="submit" value="Добави" />
                    </form>

                </article>
            </section>

        // </div>

    );
}
