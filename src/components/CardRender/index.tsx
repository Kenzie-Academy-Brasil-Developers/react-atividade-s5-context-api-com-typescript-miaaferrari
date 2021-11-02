import { Card } from "../Card"
import { Product } from "../types"
import { Container } from "./style"

interface CardRenderProps {
    products: Product[];
    isRemovable?: boolean;
}

export const CardRender = ({products, isRemovable = false}: CardRenderProps) => {

    return (
        <Container>
            {products.map((product) => (
                <Card key={product.id} isRemovable={isRemovable} product={product} />
            ))}
        </Container>
    )
}