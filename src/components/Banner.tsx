import styles from './banner.module.css'
import Image from 'next/image'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <Image src={'championswall.jpg'}
            alt='cover'
            fill ={true}
            objectFit ='cover'/>
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <h3>Anfield is the best football stadium to ever exist.</h3>
            </div>
        </div>
    )
}