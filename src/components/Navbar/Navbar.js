import styles from "./navbar.module.css"
import navbar_bg_img from "../../images/navbar_bg_img.jpg"

export default function Navbar(){
    return(
        <>
        <div className ={styles.navbar_container}>
            <img src={navbar_bg_img} alt="navbar_bg"></img>
        </div>
        </>
    )
}