import React,{useEffect} from 'react'
import logo from '../../assets/logo.svg';
import elipse from '../../assets/elipse.svg'
import './ScreenInitial.css'
function ScreenInitial({history}){
    useEffect(()=>{
        setTimeout(() => {
            history.push('/home/');
        }, 1600);
    },[])
    return (
        <body id='screen-initial'>
        <div id='sub-screen-initial'>
            <img className='img-logo' src={logo} alt="DGRANDE"/>
        </div>
        </body>
    )
}
export default ScreenInitial;  