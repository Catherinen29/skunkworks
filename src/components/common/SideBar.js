import { Divider, Drawer, IconButton, List } from "@mui/material";
import MuiDrawer, {DrawerProps} from '@mui/material/Drawer'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useState } from "react";


export default function SideBar() {

const [open, setOpen] = useState(false)

const handleDrawerOpen = () => {
  setOpen(true)
}

const handleDrawerClose = () => {
  setOpen(false)
}

return (
<>
</>
)
}