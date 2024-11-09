import {primary45} from "./utils/colors";
import logo from  "./assets/logo.png"

export function Header() {
  const styles = {
    container: {
      //backgroundColor: primary45,
      color: '#FFF',
      padding: 12,
      fontWeight: 600,
    },
    image: {
      width : '10%',
    }
  }
  return <div style={styles.container}>
    <div><img style={styles.image} src={logo} alt="logo" /></div>
  </div>
}
