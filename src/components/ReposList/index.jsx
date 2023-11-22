import Projeto from '../Projetos'
import styles from './ReposList.module.css'

export default function ReposList({ repoData }) {
    return (
        <div className={styles.reposContainer}>
            <div className={styles.repos}>
                <h1>Confira aqui meus Repositórios no <span>Git</span></h1>
                <div className={styles.projects}>
                    {repoData.map((repo, i) => {
                        return <Projeto key={i} repo={repo} />
                    })}
                </div>
            </div>
        </div>
    )
}
