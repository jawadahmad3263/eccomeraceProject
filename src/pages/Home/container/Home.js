import React,{useState,useEffect,useHistory} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeUi from '../UI/HomeUi';
import fetchCategory from '../../../redux/actions/fetchCategory';
import LoginUi from '../../login/UI/LoginUi';
import authenticateUserAction from '../../../redux/actions/authenticateUserAction';
import Login from '../../login/container/Login';

export default function Home(props) {
    const history = useHistory;
    const dispatch=useDispatch();
    const [logStatus,setLogStatus] = useState(false);
    useEffect(()=>{
         dispatch(fetchCategory("jewelery"));
         dispatch(fetchCategory("men's clothing"));
         dispatch(fetchCategory("women's clothing"));
         dispatch(fetchCategory("electronics"));
         dispatch(authenticateUserAction.getStatus());
         checkStatus();
    },[])

    const jewelary= useSelector((state)=>state.categoryReducer.jewelary);
    const menCloths= useSelector((state)=>state.categoryReducer.menClothes);
    const womenCloths= useSelector((state)=>state.categoryReducer.womenClothes);
    const electronics= useSelector((state)=>state.categoryReducer.electronics);
    const registerdUsers = useSelector((state) => state.authenticateUserReducer.registerdUsers);
    const checkStatus = () =>{
        const loginUser = registerdUsers.filter((user)=>user.loginStatus===true)
        console.log("hereee",loginUser);
        if(loginUser)
        setLogStatus(loginUser.loginStatus)
    }
   
    return (
        <HomeUi jewelary={jewelary} menCloths={menCloths} womenCloths={womenCloths} electronics={electronics}/>
    )

}
