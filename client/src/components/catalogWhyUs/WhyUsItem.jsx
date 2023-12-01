import { Link } from 'react-router-dom';

export default function WhyUsItem({
    _id,
    title,
    category,
    maxLevel,
    imageUrl,
    summary,
}) {
    return (
        <div className="why_container">
         

                <div className="box">
                    <div className="img-box">
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className="detail-box">
                        <h5>
                            {title}
                        </h5>
                        <p>
                            {summary}
                        </p>
                    </div>

                    <div className="btn-box">
                        <Link to={`/whyus/${_id}`}>
                            Детайли
                        </Link>
                    </div>

                </div>
            </div>

       
    );

};