import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src="https://github.com/geversonfernandes.png" />
                    <div className={styles.authorInfo}>
                        <strong>Geverson Araujo</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='06 de janeiro de 2023 às 16:19h' dateTime='2023-01-06 16:19:30'>Publicado 1 hora atrás</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href=''>👉 jane.design/doctorcare</a></p>
                <p className={styles.tags}>
                    <a href=''>#novoprojeto</a>
                    <a href=''>#nlw</a>
                    <a href=''>#rocketseat</a>
                </p>
            </div>
        </article>
    )
}