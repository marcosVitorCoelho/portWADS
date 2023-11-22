import styles from './Perfil.module.css'


export default function Perfil({ perfilData }) {
    return (
        <div className={styles.perfilContainer}>
            <div className={styles.perfil}>
                <h1 className={styles.title}>Eu sou o <span>{perfilData.name.split(" ")[0] + " " + perfilData.name.split(" ")[1]}</span></h1>
                <img src={perfilData.avatar_url} alt="avatar" className={styles.avatar} />
                <p className={styles.text}>Desenvolvedor web, mobile, react</p>
            </div>
            <div className={styles.techContainer}>
                <p className={styles.subtitle}>Minhas principais <span>Linguagens</span></p>
                <div className={styles.tech}>
                    <span>JavaScript, Python, Java, PHP, CSS, C#, C++, C</span>
                </div>
            </div>
        </div>
    )
}
