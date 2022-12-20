import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

export const ProductCard = () => {
  return (
    <Card sx={{ minWidth: 345 }}>
      <Stack direction="row">
        <CardMedia
          component="img"
          sx={{ maxWidth: "50%", backgroundSize: "cover" }}
          image="https://www.randomkittengenerator.com/cats/85835.2.jpg"
        />
        <CardContent sx={{ textAlign: "left" }}>
          <Typography>ITEM TYPE</Typography>

          <Typography variant={"h3"}>Item Name</Typography>
          <Typography>Item Description</Typography>
          <Stack direction="row">
            <Typography>Item New Price</Typography>
            <Typography>Item Old Price</Typography>
          </Stack>
          <Button variant="contained" disableElevation>
            <ShoppingCart color="secondary" />
            Add to Cart
          </Button>
        </CardContent>
      </Stack>
    </Card>
  );
};
