import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Link from '@material-ui/core/Link'

const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    const classes = useStyles()

    return (
        <React.Fragment>
            <AppBar
                position="static"
                color="default"
                elevation={0}
                className={classes.appBar}
            >
                <Toolbar className={classes.toolbar}>
                    <Typography
                        variant="h6"
                        color="inherit"
                        noWrap
                        className={classes.toolbarTitle}
                    >
                        Logo Here
                    </Typography>
                    {/* <img src="../../soclogo.png" alt="logo" /> */}
                    <Link
                        variant="h6"
                        color="textPrimary"
                        href="/"
                        className={classes.link}
                    >
                        Home
                    </Link>
                    <Link
                        href="/events-page"
                        variant="h6"
                        color="textPrimary"
                        className={classes.link}
                    >
                        Events
                    </Link>

                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        color="primary"
                        variant="outlined"
                        onClick={handleClick}
                        className={classes.link}
                    >
                        <Link href="/login">
                            <Typography variant="h6">LogIn</Typography>
                        </Link>
                    </Button>
                    {/* <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu> */}
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}