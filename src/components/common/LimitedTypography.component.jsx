import React from "react";
import { Typography } from "@material-ui/core";


const sliceText = (text, limit) => {
    if (text.length > limit) {
        return text.slice(0, limit) + "..."
    } else {
        return text
    }
};

export default function LimitedTypography({ children, limit, ...props}) {
    return (
        <Typography {...props}>
            {sliceText(children, limit)}
        </Typography>
    )
}