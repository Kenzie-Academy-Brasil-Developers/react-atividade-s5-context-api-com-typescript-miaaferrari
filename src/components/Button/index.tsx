import { ButtonHTMLAttributes } from "react"
import { Container } from "./style"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    name: string;
}

export const Button = ({name, ...rest}: ButtonProps) => {
    
    return (
        <Container>
            <button {...rest}>{name}</button>
        </Container>
    )
}