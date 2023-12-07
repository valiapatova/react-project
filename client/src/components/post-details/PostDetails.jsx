import { useEffect, useState, useContext, useReducer } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import styles from './PostDetails.module.css';
import Path from "../../paths.js";
import { pathToUrl } from "../../utils/pathUtils.js";

import AuthContext from '../../contexts/authContex';
import useForm from "../../hooks/useForm.js";
import reducer from './commentReducer.js'

import * as postService from '../../services/postService.js';
import * as commentService from '../../services/commentService.js';



export default function PostDetails() {

    const { email, userId } = useContext(AuthContext);

    const [post, setPost] = useState({});

    //const [comments, setComments] = useState([]);
    const [comments, dispatch] = useReducer(reducer, []);

    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        postService.getOne(postId)
            .then(setPost)

        commentService.getAll(postId)
            .then((result) => {

                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });

                //.then(setComments);
            });



    }, [postId]);



    const addCommentHandler = async (values) => {

        // e.preventDefault();
        // const formData = new FormData(e.currentTarget);

        const newComment = await commentService.create(
            postId,
            values.comment
            //formData.get('comment')           
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        });

        // setComments(state => [...state,
        // { ...newComment, owner: { email } }]
        // );
    }

    const { values, onChange, onSubmit, onReset } = useForm(addCommentHandler, {
        comment: '',
    });

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
                            {comments.map(({ _id, text, _ownerId, owner: { email } }) => (
                                <li key={_id} className={styles.comment}>
                                    <p><span className={styles.spanName} >{email}</span>:<br />&nbsp;&nbsp;{text}</p>

                                    {userId === _ownerId && (

                                        <div className={styles.buttons}>

                                            <Link to={pathToUrl(Path.CommentEdit, {commentId: _id })} className={styles.button}>Редактирай</Link>

                                            <Link to={pathToUrl(Path.CommentDelete, { commentId: _id })} className={styles.button}>Изтрий</Link>

                                            {/* <Link to={`/comments/${_id}/delete`} className={styles.button}>Изтрий</Link> */}

                                        </div>
                                    )}

                                </li>
                            ))}
                        </ul>

                        {comments.length === 0 && (
                            <p className={styles.no_articles}>Няма въведени диагнози</p>
                        )}
                    </div>


                    {/* Edit/Delete buttons ( Only for creator of this post )   */}

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

                    <form className={styles.form} onSubmit={onSubmit}>

                        <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Диагноза......"></textarea>

                        <input className={styles.btn_submit} type="submit" value="Добави" />
                    </form>

                </article>
            </section>

         </div>

    );
}
