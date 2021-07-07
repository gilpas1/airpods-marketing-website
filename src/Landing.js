import React, { useState } from "react";
import {
    Avatar,
    Button,
    CssBaseline,
    Checkbox,
    Grid,
    Link,
    Paper,
    TextField,
    Typography,
    FormControlLabel,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import useStyles from "./LandingStyle";
import Userfront from "@userfront/core";
import { Link as RouterLink, Redirect } from "react-router-dom";

const Landing = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");

    const classes = useStyles();

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setAlertMessage(""); //Reset the alert to empty
        Userfront.login({
            method: "password",
            email: email,
            password: password,
        }).catch((error) => {
            setAlertMessage(error.message);
        });
    };

    Userfront.redirectIfLoggedIn();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={6} className={classes.image} />
            <Grid
                item
                xs={12}
                sm={8}
                md={6}
                component={Paper}
                elevation={6}
                square
            >
                <div className={classes.paper}>
                    <Typography variant="h1" color="textPrimary" gutterBottom>
                        Airpods Pro
                    </Typography>
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                        Please sign in for more info
                    </Typography>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <form
                        className={classes.form}
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={error}
                            value={email}
                            onChange={handleChangeEmail}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={error}
                            value={password}
                            onChange={handleChangePassword}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                        <Grid container gutterBottom>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    <RouterLink to="/signup">
                                        {"Don't have an account? Sign Up"}
                                    </RouterLink>
                                </Link>
                            </Grid>
                        </Grid>
                        <Typography variant="h3" color="error" align="center">
                            {alertMessage}
                        </Typography>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};

export default Landing;
