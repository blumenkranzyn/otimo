import React, { useEffect } from "react";
import { Fab } from "@material-ui/core"
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const ScrollButton = ({ scrollStepInPx }) => {

    const scrollToTop = () => {
        if (window.scrollY !== 0) {
            setTimeout(function () {
                window.scrollTo(0, window.scrollY - 30);
                scrollToTop();
            }, 0.61);
        }
    }
    return (
        <Fab id="goTop" color="primary" aria-label="Back to Top" onClick={() => scrollToTop()} className="go-top">
            <ExpandLessIcon />
        </Fab>

    )
}

export default ScrollButton