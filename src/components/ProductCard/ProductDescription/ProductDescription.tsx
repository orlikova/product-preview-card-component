import { Typography } from "@mui/material";

type ProductDescriptionProps = {
  productDescription?: string;
};

const ProductDescription = ({
  productDescription,
}: ProductDescriptionProps) => {
  return (
    <Typography sx={{ pt: 2, fontSize: "14px" }}>
      {productDescription}
    </Typography>
  );
};

export default ProductDescription;
