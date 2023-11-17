import {Link} from 'react-router-dom';

export default function HeaderMenuLight () {
    return (
        
        <header className="header_section">
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    {/* <a className="navbar-brand" href="/about"> */}
                    <Link to="/about" className="navbar-brand" >
                        <span>
                            Рагон 14
                        </span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  ">
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a> */}
                                <Link to="/" className="nav-link" >Начало <span className="sr-only">(current)</span></Link>
                            
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="about.html"> About</a> */}
                                <Link to="/about" className="nav-link" > За нас</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/services" className="nav-link" >Услуги</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/whyus" className="nav-link" >Каталог услуги</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="team.html">Team</a> */}
                                <Link to="/team" className="nav-link" >Екип</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/clients" className="nav-link" >Клиенти</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#"> <i className="fa fa-user" aria-hidden="true"></i> Login</a> */}
                                <Link to="/login" className="nav-link" > <i className="fa fa-user" aria-hidden="true"></i> Вход</Link>
                            </li>
                            <form className="form-inline">
                                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>


    );
};