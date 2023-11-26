import { useContext, useEffect } from "react";
import {useNavigate} from 'react-router-dom';

import * as  authService from '../../services/authService.js';
import Path from "../../paths";
import AuthContext from "../../contexts/authContex.js";

export default function Logout(){
    const navigate=useNavigate();
    const{logoutHandler} = useContext(AuthContext);



    useEffect(()=>{
        authService.logout()
            .then(()=>{
                logoutHandler();
                                
            })
            .catch(()=>navigate(Path.Home));

    },[]);    
    
    return null;

};