
import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import AuthContext from '../../contexts/authContex.jsx';
import * as commentService from '../../services/commentService.js';
import styles from './CommentEdit.module.css';


export default function CommentEdit() {

    const { errorHandler } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const { commentId,postId } = useParams();    

    console.log(`postId: ${postId} commentId:${commentId}`)

    const [comment, setComment] = useState({
        text : '',        
    });

    useEffect(() => {
        commentService.getOne(commentId)
            .then(result => {
                setComment(result);
            })
            .catch(err => {
                console.log(err);
                errorHandler(err);                            
            });

    }, [commentId]);


    const editcommentSubmitHandler = async (e) => {
        e.preventDefault();

        const newData = Object.fromEntries(new FormData(e.currentTarget));
        newData.postId=postId;

        try {            

            await commentService.edit(commentId, newData);
            navigate(-1);

        } catch (err) {

            console.log(err);
            errorHandler(err);                      
        }
    }

    const onChange = (e) => {

        setComment(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    };

    return (

        <div className={styles.heroBgDetails_box}>

            <section id="post-details" className={styles.post_details}>
                
                <article className={styles.create_comment}>
                    <label>Редактирай диагноза :</label>

                    <form className={styles.form} onSubmit={editcommentSubmitHandler}>

                        <textarea name="text" value={comment.text} onChange={onChange} ></textarea>

                        <input className={styles.btn_submit} type="submit" value="Изпрати редакцията" />
                    </form>

                </article>

            </section>
        </div>

    );
}

