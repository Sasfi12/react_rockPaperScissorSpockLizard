export default function Battle({playerChoice , reset , result , botChoice}) {
return (
        <div>
          <h1 style={{ fontSize: "5rem", color: "grey" }}>You choose <span style={{ color: "red" }}>{playerChoice}</span> and the computer chose <span style={{ color: "gold" }}>{botChoice}</span></h1>
          <button style={{ fontSize: "5rem", cursor: "pointer "  ,color: "grey"  }} onClick={reset}>reset</button>
          <h1 style={{ fontSize: "5rem", textDecoration: "underlined", color: "green" }}>{result}</h1>
        </div>
    )
    
} 