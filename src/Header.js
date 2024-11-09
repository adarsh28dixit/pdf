import logo from  "./assets/logo.png"

export function Header() {
  const styles = {
    container: {
      backgroundColor: "white",
      color: '#FFF',
      padding: 12,
      fontWeight: 600,
      position: "sticky",
      top: 0,
      zIndex: 10,
    },
    image: {
      width : '10%',
    }
  }
  return <div style={styles.container}>
    <div><img style={styles.image} src={logo} alt="logo" /></div>
  </div>
}
