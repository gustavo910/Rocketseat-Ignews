import Image from 'next/image'
import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer} >
            <div className={styles.headerContent} >
                <Image
                    src="/images/logo.svg"
                    width="310px"
                    height="31px"
                    alt="ig.news seu blog de tecnologia"
                />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a >Posts</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}