import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as postService from '../../services/postService.js';
import * as commentService from '../../services/postService.js';
import styles from './PostDetails.module.css';

export default function PostDetails() {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const { postId } = useParams();

    useEffect(() => {
        postService.getOne(postId)
            .then(setPost);

        commentService.getAll(postId)
            .then(setComments);
    }, [postId]);

    const addCommentHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            postId,
            formData.get('username'),
            formData.get('comment')
        );

        setComments(state => [...state, newComment]);
    }

    return (
        <section id="post-details" className={styles.post_details}>
        
            <h1>Детайли за медицинска карта</h1>
            <div className={styles.infoSection}>
                <div className={styles.post_header}>
                    <img className={styles.post_img} src={post.imageUrl} alt={post.title} />
                    <h1>{post.title}</h1>
                    <span className={styles.levels}>Години: {post.maxLevel}</span>
                    <p className={styles.type}>{post.category}</p>
                </div>

                <p className={styles.text}>{post.summary}</p>

                <div className={styles.details_comments}>
                    <h2>Коментар - добави диагноза:</h2>
                    <ul>
                        {comments.map(({ _id, username, text }) => (
                            <li key={_id} className={styles.comment}>
                                <p>{username}: {text}</p>
                            </li>
                        ))}
                    </ul>

                    {comments.length === 0 && (
                        <p className={styles.no_articles}>Няма въведени диагнози - коментари</p>
                    )}
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            <article className={styles.create_comment}>
                <label>Добави диагноза - коментар:</label>
                <form className={styles.form} onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="username" />
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className={styles.btn.submit} type="submit" value="Добави коментар" />
                </form>
            </article>
        </section>
    );
}
