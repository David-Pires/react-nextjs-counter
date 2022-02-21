export default function ContadorDisplay(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100px",
      width: "100px",
      borderRadius: "50px",
      backgroundColor: "#222",
      color: "whitesmoke",
      fontSize: "2rem",
      margin: "20px"

    }}>
      {props.numero}
    </div>
  )
}