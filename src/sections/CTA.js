import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid, Hidden, Typography } from "@material-ui/core"
import { Fade } from "react-reveal"

const styles = theme => ({
    listItem: {
        paddingLeft: 10
    },
    img: {
        maxWidth: 40
    }
})

const images = {
    archive: require('../images/icons/seguros-operacoes.png'),
}


const CTA = ({ classes }) => {
    return (
        <>
            <section className="cta-section">
                <Grid container direction="row" alignItems="center" justify="center">
                    <Hidden smDown>
                        <Grid item md={5} />
                    </Hidden>
                    <Grid item md={7} xs={12}>
                        <h4 className="text-blue-light">fique alerta!</h4>
                        <Typography variant={"h6"} component={"p"}>
                            não feche negócios com instituições financeiras que não
                            não autorizadas a funcionar pelo Banco central.
                      </Typography>
                        <Typography variant={"h6"} component={"p"}>
                            acesse a faq do banco centra e saiba como se proteger das fraudes.
                      </Typography>
                        <a href="#" className="btn btn-blue-base text-2xl">acessar faq</a>
                    </Grid>

                </Grid>
            </section>
        </>
    )
}
export default withStyles(styles, { withTheme: true })(CTA);
