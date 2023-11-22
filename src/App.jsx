import { useEffect } from 'react'
import styles from './App.module.css'
import Perfil from './components/Perfil'
import ReposList from './components/ReposList'
import axios from 'axios'
import { useState } from 'react'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [perfilData, setPerfilData] = useState()
  const [repoData, setRepoData] = useState()


  useEffect(() => {
    if (!perfilData) {
      axios("https://api.github.com/users/marcosVitorCoelho").then(response => {
        setPerfilData(response.data)
      }).catch(e =>
        alert("Ocorreu um erro")
      )
    } else {
      axios(perfilData.repos_url).then(response => {
        setRepoData(response.data)
        setLoading(false)
      }).catch(e =>
        alert("Ocorreu um erro")
      )
    }
  }, [perfilData])

  return (
    <div className={styles.mainContainer}>
      {loading ? <span>Carregando...</span> : (
        <>
          <Perfil perfilData={perfilData} />
          <ReposList repoData={repoData} />
        </>
      )}
    </div>
  )
}