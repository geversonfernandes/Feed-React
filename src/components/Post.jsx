import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/geversonfernandes.png" />
          <div className={styles.authorInfo}>
            <strong>Geverson Araujo</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='18 de abril ás 02:28' dateTime='2022-04-18 02:27:00'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 <a>jane.design/doctorcare</a></p>
        <p>
          <a>#novoprojeto</a>{' '}
          <a>#nlw</a>{' '}
          <a>#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article>
  )
}