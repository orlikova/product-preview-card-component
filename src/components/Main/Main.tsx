import {Stack, StackProps} from "@mui/material";

export const Main = ({children, ...rest}: StackProps) => {
  return (
    <Stack alignItems='center' justifyContent='center' sx={{height: '100vh', backgroundColor:'#f2ebe3'}}>
      {children}
    </Stack>
  );
};
