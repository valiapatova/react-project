
import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContex.jsx';
import * as whyusService from '../../services/whyusService.js';

import * as styles from './WhyUsEdit.module.css';
import Path from '../../paths';

const WhyUsFormKeys = {

    Title: "title",
    Category: "category",
    MaxLevel: "maxLevel",
    ImageUrl: "imageUrl",
    Summary: "summary",
    Summary2: "summary2",
}


export default function WhyUsEdit(){


    const{errorHandler}=useContext(AuthContext);

    const navigate = useNavigate();
    const { whyusId } = useParams();

    console.log(`whyusId: ${whyusId}`);

    const initialValues = {

        [WhyUsFormKeys.Title]: '',
        [WhyUsFormKeys.Category]: '',
        [WhyUsFormKeys.MaxLevel]: '',
        [WhyUsFormKeys.ImageUrl]: '',
        [WhyUsFormKeys.Summary]: '',
        [WhyUsFormKeys.Summary2]: '',

    }

    const [service, setService] = useState(initialValues);

    

    useEffect(() => {
        whyusService.getOne(whyusId)

            .then(result => {

                setService(result);

            })
            .catch(err => {

                console.log(err);
                errorHandler(err);
               
            });


    }, [whyusId]);


    const editServiceSubmitHandler = async (e) => {
        e.preventDefault();

        const newData = Object.fromEntries(new FormData(e.currentTarget));

        try {           

            await whyusService.edit(whyusId, newData);
            
             navigate(-1);
            //  navigate('/whyus');

        } catch (err) {
            // Error notification
            console.log(err);
            errorHandler(err);                      

        }
    }

    const onChange = (e) => {

        setService(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));

    };

    const onReset=()=>{
        setService(initialValues);    
     };


    return (
        <div className={styles.regContainer}>

            <div className="container mt-2 mb-2" >

                <h2>Редактиране на услуга</h2>

                <form onSubmit={editServiceSubmitHandler}>

                    <div className="form-group">
                        <label htmlFor="title"> Заглавие </label>
                        <input
                            className="form-control"   

                            type="text"
                            name={WhyUsFormKeys.Title}
                            id="title"  
                                                 
                            value={service[WhyUsFormKeys.Title]}
                            onChange={onChange}
                            required
                        />            
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Категория</label>

                        <input
                            className="form-control"

                            type="text"
                            name={WhyUsFormKeys.Category}
                            id="category"                                                         

                            value={service[WhyUsFormKeys.Category]}
                            onChange={onChange}  
                            required                          
                        />
                       
                    </div>

                    <div className="form-group">
                        <label htmlFor="maxLevel">Степен на важност</label>
                        <input
                            className="form-control"

                            type="number"
                            min="0"
                            name={WhyUsFormKeys.MaxLevel}
                            id="maxLevel"                            
                            
                            value={service[WhyUsFormKeys.MaxLevel]}
                            onChange={onChange}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="imageUrl">Снимка</label>

                        <input
                            className="form-control"

                            type="text"
                            name={WhyUsFormKeys.ImageUrl}
                            id="imageUrl"                                                         

                            value={service[WhyUsFormKeys.ImageUrl]}
                            onChange={onChange}  
                            required                          
                        />                       
                    </div>

                    <div className="form-group">
                        <label htmlFor="summary">Описание на предоставяната услуга</label>

                        <textarea 

                            className="form-control" 

                            name={WhyUsFormKeys.Summary}
                            id="summary"                          
                           
                            value={service[WhyUsFormKeys.Summary]}
                            onChange={onChange}                            
                        >
                        </textarea>

                    </div>

                    <div className="form-group">
                        <label htmlFor="summary2">Допълнително описание</label>
                        <textarea 
                            className="form-control"                          
                            name={WhyUsFormKeys.Summary2}
                            id="summary2"                          
                            
                            value={service[WhyUsFormKeys.Summary2]}
                            onChange={onChange}
                            
                        >
                        </textarea>

                    </div>
 
                    <div className="form-group">
                        <button
                            type="submit"
                            className={styles.btnGreen}                           
                        >
                            Редактиране услуга
                        </button>

                        <button
                            type="button"
                            className={styles.btnGrey}
                            onClick={onReset}
                        >
                            Изчисти
                        </button>                        
                     

                    </div>

                </form>

                <Link to={Path.WhyUs}>
                        Върни се на каталог услуги
                </Link>

            </div>
        </div>


    );
}