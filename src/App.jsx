import { Header } from './components/Header'
import { Post } from "./Post"

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author='Geverson Araujo'
        content=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolore ipsam doloremque ex voluptates sunt illo ullam, corrupti mollitia quo, accusantium vel corporis nihil porro doloribus exercitationem ut sint earum!'
      />
      <Post
        author='Gabriel Buzzi'
        content='Um post muito legal'
      />
    </div>
  )
}
