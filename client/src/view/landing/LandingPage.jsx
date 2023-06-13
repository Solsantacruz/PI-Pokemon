import { Link } from "react-router-dom";
import imgLanding from '../../assets/fondoLanding.jpg';


export default function LandinPage() {
    return(
        <>
        <div>
          <img src={imgLanding} alt='fondoPoke' />
         <Link to='/home'>
            <button> START </button>
         </Link>
         </div>
        </>
    )
}