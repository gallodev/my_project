import { useState } from "react";

import { Box, Drawer, List, ListItem, useTheme, useMediaQuery, ListItemIcon, Icon, IconButton, ListItemButton } from "@mui/material"
import routes from '../../router/router';
import { useNavigate } from "react-router-dom";



const ListItemMenu: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = (to: string) => {
        navigate(to);
    }

    return (
        <Box>
            <List>                     
                {routes.map((route) => (
                    <ListItemButton onClick={() => handleClick(route.path)}>
                        <ListItemIcon>
                            <Icon>
                                {route.icon}
                            </Icon>
                            <ListItem>
                                {route.name}
                            </ListItem>
                        </ListItemIcon>
                    </ListItemButton>
                ))}       
            </List>
        </Box>
    )
}

type TMenu = {
    children: React.ReactNode;
}

export const Menu: React.FC<TMenu> = ({children}) => {
    const theme = useTheme();
    const isDownSm = useMediaQuery(theme.breakpoints.down('sm'));
    const [open,setOpen] = useState(false)
    
    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Drawer
                variant={isDownSm ? 'temporary' : 'permanent'}
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                >                                            
                <Box width={isDownSm ? theme.spacing(28) : theme.spacing(28)} height='100%' display={'flex'} flexDirection={'column'}>
                    <ListItemMenu/>
                </Box>
            </Drawer>
            {isDownSm && (
                <IconButton onClick={handleDrawerOpen} sx={{float: 'left'}}>
                    <Icon>menu</Icon>
                </IconButton>
            )}
            <Box marginLeft={isDownSm ? theme.spacing(10) : theme.spacing(28)} height="100vh">
                {children}
            </Box>
        </>
    )
}