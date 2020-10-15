import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Inicio from "./componentes/Inicio";
import Usuarios from "./componentes/Administrador/Usuarios/Usuarios";
import EditarUsuario from "./componentes/Administrador/Usuarios/EditarUsuario";
import DetalleUsuario from "./componentes/Administrador/Usuarios/DetalleUsuario";
import Canchas from "./componentes/Administrador/Canchas/Canchas";
import EditarCancha from "./componentes/Administrador/Canchas/EditarCancha";
import PersonIcon from '@material-ui/icons/Person';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import InicioUsuario from './componentes/Jugador/InicioUsuario'
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Equipos from './componentes/Administrador/Equipos/Equipos';
import EditarEquipo from './componentes/Administrador/Equipos/EditarEquipo';
import InicioManager from './componentes/Manager/InicioManager'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));


function App() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Redpart
          </Typography>
          </Toolbar>
        </AppBar>
        <Divider/>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider/>
          <List>
            <Link to="/usuario/inicio">
              <ListItem button >
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary="Inicio usuarios" />
              </ListItem>
            </Link>
            <Link to="/manager/inicio">
              <ListItem button >
                <ListItemIcon><HomeIcon/></ListItemIcon>
                <ListItemText primary="Inicio Manager" />
              </ListItem>
            </Link>
            <Link to="/usuarios">
              <ListItem button >
                <ListItemIcon><PersonIcon/></ListItemIcon>
                <ListItemText primary="Usuarios" />
              </ListItem>
            </Link>
            <Link to="/canchas">
              <ListItem button >
                <ListItemIcon><LocationOnIcon/></ListItemIcon>
                <ListItemText primary="Canchas" />
              </ListItem>
            </Link>
            <Link to="/equipos">
              <ListItem button >
                <ListItemIcon><SportsSoccerIcon/></ListItemIcon>
                <ListItemText primary="Equipos" />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Switch>
            {/* Rutas administrador */}
            <Route exact path="/inicio" component={Inicio} />
            <Route exact path="/usuarios" component={Usuarios} />
            <Route exact path="/usuarios/editar/:id" component={EditarUsuario} />
            <Route exact path="/usuarios/detalle/:id" component={DetalleUsuario} />
            <Route exact path="/canchas" component={Canchas} />
            <Route exact path="/canchas/editar/:id" component={EditarCancha} />
            <Route exact path="/equipos" component={Equipos} />
            <Route exact path="/equipos/editar/:id" component={EditarEquipo} />
            {/* Rutas usuario */}
            <Route exact path="/usuario/inicio" component={InicioUsuario}/>
            {/* Rutas manager */}
            <Route exact path="/manager/inicio" component={InicioManager}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
