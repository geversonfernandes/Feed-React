import { Header } from './components/Header'
import { Post } from "./Post"

import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Geverson Araujo'
            content=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore ipsam doloremque ex voluptates sunt illo ullam, corrupti mollitia quo, accusantium vel corporis nihil porro doloribus exercitationem ut sint earum!'
          />
          <Post
            author='Gabriel Buzzi'
            content='Um post muito legal'
          />
        </main>
      </div>
    </div>
  )
}
