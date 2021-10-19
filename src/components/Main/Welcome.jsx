import { useContext } from "react"
import { AuthContext } from "../../App"

export default function Welcome(){
  const {user, isLoggedIn} = useContext(AuthContext)
  return (
  <section>
    <h2>Welcome {isLoggedIn ? user.name : 'Guest'}!</h2>
  </section>)
}