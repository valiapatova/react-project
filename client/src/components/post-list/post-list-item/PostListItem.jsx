import { Link } from "react-router-dom";
import styles from './PostListItem.module.css'; 

export default function PostListItem({
    _id,
    title,
    category,
    imageUrl,

}) {
    return (
        <div className={styles.allPosts}>
            <div className={styles.allPosts_info}>
                <img src={imageUrl} />
                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/posts/${_id}`} className={styles.details_button}>Детайли</Link>
            </div>
        </div>
    );
}
