import { Box } from "@mui/material";
import IMGMenu from "../../../assets/icons/menu.png";
import IMGExit from "../../../assets/icons/exit.png";

const CustomExpandIcon = () => {
  return (
    <Box
      sx={{
        ".Mui-expanded & > .collapsIconWrapper": {
          display: "none",
        },
        ".expandIconWrapper": {
          display: "none",
        },
        ".Mui-expanded & > .expandIconWrapper": {
          display: "block",
        },
      }}
    >
      <div className="expandIconWrapper">
        <img src={IMGExit} alt="Minus" title="Minus" />
      </div>
      <div className="collapsIconWrapper">
        <img src={IMGMenu} alt="Plus" title="Plus" />
      </div>
    </Box>
  );
};
export default CustomExpandIcon;
