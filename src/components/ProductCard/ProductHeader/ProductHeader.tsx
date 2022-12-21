import { Typography } from "@mui/material";

type ProductHeaderProps = {
  productType?: string;
  productName?: string;
};

function ProductHeader({ productType, productName }: ProductHeaderProps) {
  return (
    <>
      <Typography variant="overline" sx={{ letterSpacing: "0.2rem" }}>
        {productType}
      </Typography>
      <Typography variant={"h3"} sx={{ lineHeight: "0.75", py: 2 }}>
        {productName}
      </Typography>
    </>
  );
}

export default ProductHeader;
