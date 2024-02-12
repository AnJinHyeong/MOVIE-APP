import { Store } from "../core/heropy";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://heropy.blog/css/images/logo.png',
  name: 'JINMAN / AnJinHyeong',
  email: 'lwwmwn545@gmail.com',
  blog: 'https://velog.io/@jinkong2/posts',
  github: 'https://github.com/AnJinHyeong',
  repository: 'https://github.com/AnJinHyeong/MOVIE-APP'
})