import { useEffect, useState } from 'react';
import './typography.css'
import styles from './PostList.module.css';

import * as postService from '../../services/postService.js';
import PostListItem from './post-list-item/PostListItem';

export default function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll()
            .then(result => setPosts(result));
    }, []);

    return (
        <section id={styles.catalog_page}>
            <h1>Всички медицински карти</h1>

            {posts.map(post => (
                <PostListItem key={post._id} {...post} />
            ))}

            {posts.length === 0 && (
                <h3 className={styles.no_articles}>Няма въведени все още медицински карти</h3>
            )}
        </section>
    );
}
