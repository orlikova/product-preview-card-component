import { CardContent } from "@mui/material";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductDescription from "../ProductDescription/ProductDescription";
import ProductHeader from "../ProductHeader/ProductHeader";

export type ProductCardContentProps = {
  productType?: string;
  productName?: string;
  productDescription?: string;
  productPrice?: string;
  productOldPrice?: string;
};

export const ProductCardContent = ({
  productType,
  productName,
  productPrice,
  productOldPrice,
  productDescription,
}: ProductCardContentProps) => {
  return (
    <CardContent sx={{ textAlign: "left", p: 3 }}>
      <ProductHeader productType={productType} productName={productName} />
      <ProductDescription productDescription={productDescription} />
      <ProductPrice
        productPrice={productPrice}
        productOldPrice={productOldPrice}
      />
      <AddToCartButton />
    </CardContent>
  );
};
