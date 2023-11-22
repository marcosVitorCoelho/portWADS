import styles from './Projeto.module.css';


export default function Projeto({ repo }) {

    const criadoEm = new Date(repo.created_at)
    const atualizadoEm = new Date(repo.updated_at)

    return (
        <div className={styles.projectContainer}>
            <h1>{repo.name}</h1>
            <p>Criado em: {criadoEm.toLocaleDateString('pt-BR')}</p>
            <p>Atualizado em: {atualizadoEm.toLocaleDateString('pt-BR')}</p>
            <div className={styles.projectInfo}>
                <a href={repo.html_url} target="_blank">Link do Projeto</a>
                <div className={styles.stacks}>
                    <span>{repo.language || "Forked"}</span>
                </div>
            </div>
        </div>
    )
}