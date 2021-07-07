import React from "react";
import { useParams } from "react-router-dom";
import { Container, CssBaseline, Typography } from "@material-ui/core";
import useStyles from "./featureStyles";
import Userfront from "@userfront/react";
import { Redirect } from "react-router";

const features = [
    {
        id: 1,
        title: "One Charge = 24 Houres",
        description:
            "AirPods deliver an industry-leading 5 hours of listening time — and now up to 3 hours of talk time — all on one charge. And they’re made to keep up with you, thanks to a charging case that holds multiple charges for more than 24 hours of listening time. Need a quick charge? Just put AirPods back in the case for 15 minutes to get up to 3 hours of listening time or up to 2 hours of talk time. To check the battery, hold the AirPods next to your iPhone or ask Siri “How’s the battery on my AirPods?”",
    },
    {
        id: 2,
        title: "Your right‑hand Siri",
        description:
            "Need a hand? Simply say “Hey Siri” for assistance without having to reach for your iPhone. And with Announce Messages, Siri can automatically speak your incoming messages as they arrive. You can choose which contacts you hear them from, and Siri won’t interrupt you if you’re on a call or sharing a song.",
    },
    {
        id: 3,
        title: "Wireless to the fullest",
        description:
            "After a simple one-tap setup, AirPods are automatically on and always connected. Using them is just as easy. They sense when they’re in your ears and pause when you take them out. And the AirPods experience is just as amazing whether you’re using them with your iPhone, Apple Watch, iPad, or Mac.",
    },
];

const FeaturePage = () => {
    let { id } = useParams();
    const feature = features.filter((value) => value.id === parseInt(id))[0];
    const classes = useStyles();
    if (!Userfront.accessToken()) {
        return <Redirect to="/landing" />;
    }
    return (
        <>
            <CssBaseline />
            <Container className={classes.pageContainer} maxWidth="xl">
                <Typography
                    variant="h1"
                    align="center"
                    gutterBottom
                    color="textPrimary"
                >
                    {feature.title}
                </Typography>
                <Typography
                    variant="h4"
                    paragraph
                    align="center"
                    color="textSecondary"
                >
                    {feature.description}
                </Typography>
            </Container>
        </>
    );
};

export default FeaturePage;
