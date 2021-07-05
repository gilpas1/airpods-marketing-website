import React from "react";
import {
    Button,
    CssBaseline,
    Container,
    Typography,
    Grid,
} from "@material-ui/core";
import useStyles from "./HomepageStyles";
import mainAirpodsImg from "./images/airpods-main.jpg";
import chargeImg from "./images/charge.jpg";
import siriImg from "./images/siri.jpg";
import wirelessImg from "./images/wireless.jpg";
import { Link } from "react-router-dom";

function Homepage() {
    const classes = useStyles();
    const features = [
        { key: 1, image: chargeImg, text: "One Charge = 24 Houres" },
        { key: 2, image: siriImg, text: "Your right‑hand Siri" },
        { key: 3, image: wirelessImg, text: "Wireless to the fullest" },
    ];
    return (
        <>
            <CssBaseline />
            <Container className={classes.pageContainer} maxWidth="xl">
                <Typography
                    variant="h1"
                    gutterBottom
                    align="center"
                    color="textPrimary"
                >
                    Air Pods
                </Typography>
                <div className={classes.mainImageDiv}>
                    <img
                        src={mainAirpodsImg}
                        className={classes.mainImage}
                        alt="main airpods"
                    />
                </div>

                <Container className={classes.paraContainer}>
                    <Typography
                        variant="h5"
                        align="center"
                        color="textSecondary"
                        paragraph
                    >
                        Now with more talk time, voice-activated Siri access —
                        and a new wireless charging case — AirPods deliver an
                        unparalleled wireless headphone experience. Simply take
                        them out and they’re ready to use with all your devices.
                        Put them in your ears and they connect immediately,
                        immersing you in rich, high-quality sound. Just like
                        magic.
                    </Typography>
                </Container>
                <Grid
                    container
                    spacing={1}
                    className={classes.featuresGrid}
                    justify="center"
                >
                    {features.map(({ key, image, text }) => (
                        <Grid
                            item
                            container
                            key={key}
                            xs={12}
                            lg={4}
                            direction="column"
                            alignItems="center"
                            className={classes.feature}
                        >
                            <Link
                                to={`feature/${key}`}
                                style={{ textDecoration: "none" }}
                            >
                                <input
                                    type="image"
                                    src={image}
                                    className={classes.featureImg}
                                    alt={text}
                                ></input>
                                <Typography
                                    variant="h4"
                                    align="center"
                                    color="textPrimary"
                                >
                                    {text}
                                </Typography>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.contactDiv}>
                    <Button variant="contained" color="default" size="large">
                        Contact Us
                    </Button>
                </div>
            </Container>
        </>
    );
}

export default Homepage;
