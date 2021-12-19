import { Menu } from "../components/Home/menu"
import { Introdution } from "../components/Home/introduction"
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <Introdution />
    </div>
  )
}
