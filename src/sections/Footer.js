import React from "react"
import { Grid, Hidden, Typography } from "@material-ui/core"
import { Zoom } from "react-reveal"



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
                        <Zoom left delay={900}>
                            <img src={images.logoOtimo} alt="Otimo - Sociedade de Crédito Direto" />
                        </Zoom>
                    </Grid>
                    <Grid item>
                        <Zoom right delay={900}>
                            <img src={images.logoBancoCentral} alt="Banco Central do Brasil" />
                        </Zoom>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}
export default Footer
