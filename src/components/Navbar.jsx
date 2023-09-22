import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import Time from "./Time";



const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#211f1f', top: 0, justifyContent: "space-between" }}>
    <Stack direction="column">
    <Link to="/" style={{ display: "flex", alignItems: "center", marginLeft:'24px' }}>
      <img src="/logo192.png" alt="logo" height={65} />
    </Link>
    <h1 style={{color:"Yellow", marginRight:'400px'}}>Tigerpaw</h1>
    </Stack>
   
    <Time />
  </Stack>
);

export default Navbar;
