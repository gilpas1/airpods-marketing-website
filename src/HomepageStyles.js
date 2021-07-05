import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainImage: {
        height: "auto",
        width: "100%",
        maxWidth: "600px",
    },
    pageContainer: {
        backgroundColor: "#cfd8dc",
        padding: theme.spacing(5),
        width: "100%",
    },
    mainImageDiv: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
    },
    paraContainer: {
        width: "50%",
        marginTop: theme.spacing(6),
    },
    feature: {
        transition: "transform .3s",
        "&:hover": {
            transform: "scale(1.1)",
        },
    },
    featureImg: {
        width: "360px",
        height: "480px",
    },
    featuresGrid: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    contactDiv: {
        display: "flex",
        justifyContent: "center",
    },
}));

export default useStyles;
