import { Button } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

export const AddToCartButton = () => {
  return (
    <Button
      size="large"
      variant="contained"
      disableElevation
      fullWidth
      sx={{ textTransform: "none", fontWeight: 700 }}
    >
      <ShoppingCartOutlined />
      Add to Cart
    </Button>
  );
};
