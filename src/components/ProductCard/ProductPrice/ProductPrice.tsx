import { Stack, Typography } from "@mui/material";
import { COLORS_LIGHT } from "../../../constants/theme/colorsLight";

type ProductPriceProps = {
  productPrice?: string;
  productOldPrice?: string;
};

const ProductPrice = ({ productPrice, productOldPrice }: ProductPriceProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ width: "70%", pb: 3, pt: 2 }}
    >
      <Typography variant="h4" component="span">
        {productPrice}
      </Typography>
      {productOldPrice && (
        <Typography
          sx={{
            fontSize: "0.75rem",
            color: COLORS_LIGHT.grayBlue,
            textDecoration: "line-through",
          }}
        >
          {productOldPrice}
        </Typography>
      )}
    </Stack>
  );
};

export default ProductPrice;
