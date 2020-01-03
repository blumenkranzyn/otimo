import React from "react"
import { Grid, Hidden, Typography } from "@material-ui/core"
import { Fade } from "react-reveal"



const images = {
    logoOtimo: require('../images/logo.png'),
    logoBancoCentral: require('../images/banco-central-do-brasil-logo-4.png')
}


const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <Grid container direction="row" alignItems="center" justify="space-between">
                    <Grid item>
                        <img src={images.logoOtimo} alt="Otimo - Sociedade de Crédito Direto" />
                    </Grid>
                    <Grid item>
                        <img src={images.logoBancoCentral} alt="Banco Central do Brasil" />
                    </Grid>
                </Grid>
            </section>
        </>
    )
}
export default Footer
