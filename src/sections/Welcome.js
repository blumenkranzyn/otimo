import React from "react"
import { Grid, Hidden } from "@material-ui/core"
import { Fade } from "react-reveal"

const separator = require('../images/bg-transicao.png');
const phone = require('../images/celular-tech.png');
const Welcome = () => {
    return (
        <>
            <section className="welcome-section w-full relative">
                <img src={separator} alt="phone" className="separator" />
                <img src={phone} alt="phone" />
            </section>
        </>
    )
}

export default Welcome