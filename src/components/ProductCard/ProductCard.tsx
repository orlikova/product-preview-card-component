import { Card, CardMedia, Stack } from "@mui/material";
import {
  ProductCardContent,
  ProductCardContentProps,
} from "./ProductCardContent/ProductCardContent";

export type ProductCardProps = ProductCardContentProps & {
  image?: string;
};

const mockProduct: ProductCardProps = {
  productType: "Perfume",
  productName: "Gabrielle Essence Eau de Parfum",
  productDescription:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer/Creator for" +
    " the House of Chanel.",
  productPrice: "$149.99",
  productOldPrice: "$169.99",
  image:
    "https://images.unsplash.com/photo-1589820933525-dadd23d13c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FicmllbGxlJTIwcGFyZnVtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
};

export const ProductCard = ({
  productType = mockProduct.productType,
  productName = mockProduct.productName,
  productDescription = mockProduct.productDescription,
  productPrice = mockProduct.productPrice,
  productOldPrice = mockProduct.productOldPrice,
  image = mockProduct.image,
}: ProductCardProps) => {
  return (
    <Card sx={{ minWidth: 345, maxWidth: 600 }}>
      <Stack direction="row">
        <CardMedia
          component="img"
          sx={{ width: "50%", backgroundSize: "cover" }}
          image={image}
        />
        <ProductCardContent
          productType={productType}
          productName={productName}
          productDescription={productDescription}
          productPrice={productPrice}
          productOldPrice={productOldPrice}
        />
      </Stack>
    </Card>
  );
};
