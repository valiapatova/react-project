import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Path from "../../paths";
import * as commentService from "../../services/commentService.js";


export default function CommentDelete() {

    const {commentId} = useParams();   

    const navigate = useNavigate();

    useEffect(() => {

        const hasConfirmed = confirm(`Сигурни ли сте, че искате да изтриете диагноза - ${commentId} ?`);

        if (hasConfirmed) {
            commentService.remove(commentId);
        }

        navigate(-1)

    }, []);

    return null;
};