import React from 'react'
import { Stack } from "@mui/material";
// import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Time = () => {
  return (
    <div>
        <Stack direction="row">
        <Stack direction="row">
        <div style={{color:"Yellow", marginRight:'50px',paddingLeft:'0'}}className="bell">
        <NotificationsNoneIcon/>
        </div>
        <Stack direction="column">
        <h4 style={{color:"Yellow", marginRight:'340px'}}>22-09-2023</h4>
        <h4 style={{color:"Yellow", marginRight:'340px'}}>Fri  11:30 A M</h4>
        </Stack>
        </Stack>
        <Stack direction="row">
        <div style={{color:"Yellow", marginRight:'50px',paddingLeft:'0'}}className="bell">
        <AccountCircleIcon/>
        </div>
        <Stack direction="column">
        <h3 style={{color:"white", marginRight:'80px',border: '2px solid red',borderRadius: '10px',width:'100px'}}>Shashidhar</h3>
        </Stack>
        </Stack>
        </Stack>
    </div>
  )
}

export default Time
