import React from "react";
import { useParams } from "react-router-dom";

const FeaturePage = () => {
    let { id } = useParams();
    return <h1>feature number {id}</h1>;
};

export default FeaturePage;
