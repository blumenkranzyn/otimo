import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid, Hidden, Typography } from "@material-ui/core"
import HeadShake from 'react-reveal/HeadShake';

const styles = theme => ({
    listItem: {
        paddingLeft: 10
    },
    img: {
        maxWidth: 40
    }
})



const CTA = ({ classes }) => {
    return (
        <>
            <section className="cta-section">
                <Grid container direction="row" alignItems="center" justify="flex-end">

                    <Grid item md={7} xs={12}>
                        <HeadShake>
                            <h4 className="text-blue-light">fique alerta!</h4>
                        </HeadShake>
                        <HeadShake>
                            <Typography variant={"h6"} component={"p"}>
                                não feche negócios com instituições financeiras que não
                                não autorizadas a funcionar pelo Banco central.
                        </Typography>
                        </HeadShake>
                        <HeadShake >
                            <Typography variant={"h6"} component={"p"}>
                                acesse a faq do banco centra e saiba como se proteger das fraudes.
                        </Typography>
                        </HeadShake>
                        <HeadShake>
                            <a href="#" className="btn btn-blue-base text-2xl">acessar faq</a>
                        </HeadShake>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}
export default withStyles(styles, { withTheme: true })(CTA);
