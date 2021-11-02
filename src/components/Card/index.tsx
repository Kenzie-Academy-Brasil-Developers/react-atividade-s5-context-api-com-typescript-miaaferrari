import { Button } from "../Button"
import { useCart } from "../Providers/Cart"
import { Product } from "../types"
import { Container, Image } from "./style"

interface CardProps {
    product: Product;   
    isRemovable: boolean;
}

export const Card = ({product, isRemovable = false}: CardProps) => {
    const { addToCart, removeFromCart  } = useCart()
    const {title, image, price} = product;

    return (
        <Container>
            <Image src={image} alt={title}></Image>
            <p>{title}</p>
            <span>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            {isRemovable ? (
                <Button name="Delete" type="button" onClick={() => removeFromCart(product)}></Button>
            ) : (
                <Button name="Add to Cart" type="button" onClick={() => addToCart(product)}></Button> 
            )}
        </Container>
    )
}