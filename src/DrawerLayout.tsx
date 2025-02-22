// import * as React from 'react';
// import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';

// import { AppProvider, NavigationItem } from "@toolpad/core/AppProvider";
// import { Outlet } from 'react-router-dom';

// import { createTheme } from "@mui/material/styles";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import DescriptionIcon from "@mui/icons-material/Description";
// import LayersIcon from "@mui/icons-material/Layers";
// import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

// const drawerWidth = 240;

// const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   variants: [
//     {
//       props: ({ open }) => open,
//       style: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(['width', 'margin'], {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//       },
//     },
//   ],
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     variants: [
//       {
//         props: ({ open }) => open,
//         style: {
//           ...openedMixin(theme),
//           '& .MuiDrawer-paper': openedMixin(theme),
//         },
//       },
//       {
//         props: ({ open }) => !open,
//         style: {
//           ...closedMixin(theme),
//           '& .MuiDrawer-paper': closedMixin(theme),
//         },
//       },
//     ],
//   }),
// );

// const NAVIGATION: NavigationItem[] = [
//     {
//       kind: "header",
//       title: "Main items",
//     },
//     {
//       kind: "page", // Explicitly mark navigable items as "page"
//       segment: "admin/dashboard",
//       title: "Dashboard",
//       icon: <DashboardIcon />, // Icon as valid JSX element
//     },
//     {
//       kind: "page",
//       segment: "admin/orders",
//       title: "Orders",
//       icon: <ShoppingCartIcon />,
//     },
//     {
//       kind: "divider", // Divider between sections
//     },
//     {
//       kind: "header",
//       title: "Analytics",
//     },
//     {
//       kind: "page",
//       segment: "reports",
//       title: "Reports",
//       icon: <BarChartIcon />,
//       children: [
//         {
//           kind: "page",
//           segment: "reports/sales",
//           title: "Sales",
//           icon: <DescriptionIcon />,
//         },
//         {
//           kind: "page",
//           segment: "reports/traffic",
//           title: "Traffic",
//           icon: <DescriptionIcon />,
//         },
//       ],
//     },
//     {
//       kind: "page",
//       segment: "admin/integrations",
//       title: "Integrations",
//       icon: <LayersIcon />,
//     },
//   ];

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={[
//               {
//                 marginRight: 5,
//               },
//               open && { display: 'none' },
//             ]}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Mini variant drawer
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//           {NAVIGATION.map((item, index) => {
//             switch (item.kind) {
//               case 'header':
//                 return (
//                   <ListItem key={index}>
//                     <ListItemText primary={item.title} />
//                   </ListItem>
//                 );
//               case 'divider':
//                 return <Divider key={index} />;
//               case 'page':
//                 return (
//                   <ListItem key={item.title} disablePadding sx={{ display: 'block' }}>
//                     <ListItemButton
//                       sx={{
//                         minHeight: 48,
//                         px: 2.5,
//                         justifyContent: open ? 'initial' : 'center',
//                       }}
//                       onClick={() => {
//                         // Handle navigation here (e.g., using react-router)
//                       }}
//                     >
//                       <ListItemIcon
//                         sx={{
//                           minWidth: 0,
//                           justifyContent: 'center',
//                           ...(open && { mr: 3 }),
//                         }}
//                       >
//                         {item.icon}
//                       </ListItemIcon>
//                       <ListItemText
//                         primary={item.title}
//                         sx={{ opacity: open ? 1 : 0 }}
//                       />
//                     </ListItemButton>
//                     {item.children && item.children.map((child) => (
//                       <ListItem key={child.title} disablePadding sx={{ pl: 4 }}>
//                         <ListItemButton
//                           onClick={() => {
//                             // Handle navigation for child item here
//                           }}
//                         >
//                           <ListItemText primary={child.title} />
//                         </ListItemButton>
//                       </ListItem>
//                     ))}
//                   </ListItem>
//                 );
//               default:
//                 return null;
//             }
//           })}
//         </List>
//         <Divider />
//         <List>
          
//         </List>
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//         <Outlet/>
//       </Box>
//     </Box>
//   );
// }
