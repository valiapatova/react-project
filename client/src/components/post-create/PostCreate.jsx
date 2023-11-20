import { useNavigate } from 'react-router-dom';

import * as postService from '../../services/postService.js';

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
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createPostSubmitHandler}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Име и фамилия :</label>
                    <input type="text" id="title" name="title" placeholder="Въведи имената..." />

                    <label htmlFor="category">Фирма, в която е служител лицето:</label>
                    <input type="text" id="category" name="category" placeholder="Въведи името на фирмата..." />

                    <label htmlFor="levels">Възраст:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="post-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}
