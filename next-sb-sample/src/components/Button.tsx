interface ButtonProps {
    bgCol: string
    col: string
  }
  
  export const Button = ({ bgCol, col }: ButtonProps) => {
    return <button style={{ background: bgCol, color: col }}>Submit</button>
  }