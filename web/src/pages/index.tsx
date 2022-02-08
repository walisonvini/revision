import { Menu } from "../components/Home/menu"
import { Introdution } from "../components/Home/introduction"

import noAuth from "../utils/noAuth";

function Home() {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <Introdution />
    </div>
  )
}

export default noAuth(Home); 
