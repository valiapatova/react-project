import { useContext, useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';

import * as styles from './WhyUsCreate.module.css'

import AuthContext from '../../contexts/authContex.jsx';
import useForm from '../../hooks/useForm';
import * as whyusService from '../../services/whyusService.js'
import Path from '../../paths.js';


const WhyUsFormKeys = {
    Title: "title",
    Category: "category",
    MaxLevel: "maxLevel",
    ImageUrl: "imageUrl",
    Summary: "summary",
    Summary2: "summary2",
}


export default function WhyUsCreate() {

    const { errorHandler } = useContext(AuthContext);
    
    const navigate = useNavigate();

    const createWhyUsSubmitHandler = async (values) => {

        try {   
                    
            await whyusService.create(values);
            navigate('/whyus');

        } catch (err) {
            // Error notification
            console.log(err);
            errorHandler(err);
        }
    }

    const { values, onChange, onSubmit, onReset } = useForm(createWhyUsSubmitHandler, {
        [WhyUsFormKeys.Title]: '',
        [WhyUsFormKeys.Category]: '',
        [WhyUsFormKeys.MaxLevel]: '',
        [WhyUsFormKeys.ImageUrl]: '',
        [WhyUsFormKeys.Summary]: '',
        [WhyUsFormKeys.Summary2]: '',
    });


    return (
        <div className={styles.regContainer}>

            <div className="container mt-2 mb-2" >

                <h2>Създаване на услуга</h2>

                <form onSubmit={onSubmit}>

                    <div className="form-group">
                        <label htmlFor="title"> Заглавие </label>
                        <input
                            className="form-control"   

                            type="text"
                            name={WhyUsFormKeys.Title}
                            id="title"  
                            placeholder="Заглавие....."                          

                            value={values[WhyUsFormKeys.Title]}
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
                            placeholder="Категория....."                            

                            value={values[WhyUsFormKeys.Category]}
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
                            placeholder="0"  
                            
                            value={values[WhyUsFormKeys.MaxLevel]}
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
                            placeholder="URL ...."                             

                            value={values[WhyUsFormKeys.ImageUrl]}
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
                            placeholder="Описание....."

                            value={values[WhyUsFormKeys.Summary]}
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
                            placeholder="Допълнително описание...."

                            value={values[WhyUsFormKeys.Summary2]}
                            onChange={onChange}
                            
                        >
                        </textarea>

                    </div>
 
                    <div className="form-group">
                        <button
                            type="submit"
                            className={styles.btnGreen}                           
                        >
                            Създаване на услуга
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