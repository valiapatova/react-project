import { Link } from "react-router-dom";

import Path from "../../../paths.js";
import { pathToUrl } from "../../../utils/pathUtils.js";

export default function TopService({
    _id,
    title,
    imageUrl,
    summary,

}) {
    return (


        <div className="col-md-4 ">

            <div className="box ">
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
                    <Link to={pathToUrl(Path.WhyUsDetails, { id: _id })} >
                        Прочети повече
                    </Link>
                </div>
            </div>
        </div>




    );
}
