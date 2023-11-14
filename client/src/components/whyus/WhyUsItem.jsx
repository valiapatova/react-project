export default function WhyUsItem({
    id,
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
            </div>

        </div>
    );

};