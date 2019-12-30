import React, { useEffect, useState } from "react"
import withStyles from '@material-ui/styles/withStyles';
import { Grid, Typography, Toolbar, AppBar, Tabs, Tab, IconButton, List, ListItem, ListItemText, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link as MaterialLink } from '@material-ui/core'
import Menu from './Menu';
import {Slide} from "react-reveal"

const styles = theme => ({
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
  },
  inline: {
    display: 'inline'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: "center",
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  productLogo: {
    display: 'inline-block',
    borderLeft: `1px solid ${theme.palette.grey['A100']}`,
    marginLeft: 32,
    paddingLeft: 24,
    [theme.breakpoints.up('md')]: {
      paddingTop: '1.5em'
    }
  },
  tagline: {
    display: 'inline-block',
    marginLeft: 10,
    [theme.breakpoints.up('md')]: {
      paddingTop: '0.8em'
    }
  },
  iconContainer: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    }
  },
  iconButton: {
    float: 'right'
  },
  tabContainer: {
    marginLeft: 32,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto'
  }
})


const Header = (props) => {
  const { classes } = props
  console.log(props)
  const [menuDrawer, setMenuDrawer] = useState(false)
  const [value, setValue] = useState(0)
  const handleChange = (event, value) => {
    setValue(value)
  };
  const mobileMenuOpen = (event) => {
    setMenuDrawer(true)
  }
  const mobileMenuClose = (event) => {
    setMenuDrawer(false)
  }
  const logo = require('../../images/logo.png');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Slide top delay={900}>

      <AppBar position="absolute" color="default" className={`${classes.appBar} bg-gray-100 shadow-md`}>
        <Toolbar>
          <Grid container spacing={24} alignItems="baseline">
            <Grid item xs={12} className={classes.flex}>
              <div className={classes.inline}>
                <Typography variant="h6" color="inherit" noWrap>
                  <a href='/' className={classes.link}>
                    <img width={120} src={logo} alt="" />
                  </a>
                </Typography>
              </div>
              <React.Fragment>
                <div className={classes.iconContainer}>
                  <IconButton onClick={mobileMenuOpen} className={classes.iconButton} color="inherit" aria-label="Menu">
                    <MenuIcon />
                  </IconButton>
                </div>
                <div className={classes.tabContainer}>
                  <SwipeableDrawer anchor="right" open={menuDrawer} onClose={mobileMenuClose} onOpen={mobileMenuOpen}>
                    <AppBar title="Menu" />
                    <List>
                      {Menu.map((item, index) => (
                        <ListItem component={MaterialLink} href={item.external ? item.pathname : null} to={item.external ? null : { pathname: item.pathname }} button key={item.label}>
                          <ListItemText primary={item.label} />
                        </ListItem>
                      ))}
                    </List>
                  </SwipeableDrawer>
                 <div className="navbar-effects conts">
                    {Menu.map((item, index) => (
                      <a href={item.pathname}>{item.label}</a>
                    ))}
                 </div>
                </div>
              </React.Fragment>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>  
    </Slide>
  )
}

export default (withStyles(styles)(Header))
