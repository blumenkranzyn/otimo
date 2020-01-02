import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid, Hidden, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
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


const Compliance = ({ classes }) => {
    return (
        <>
            <section className="compliance-section w-full relative">
                <Grid container direction="row" alignItems="center" justify="center">
                    <Hidden smDown>
                        <Grid item md={5} />
                    </Hidden>
                    <Grid item md={6} xs={12}>
                        <h2 className="text-gray-text">COMPLIANCE</h2>
                        <h4 className="text-blue-dark">NOSSAS NORMAS GARANTEM PROFISSIONALISMO E SEGURANÇA PARA NOSSOS CLIENTES</h4>

                        <div className="list">
                            <List component="nav" aria-label="credito consignado" disablePadding>
                                <ListItem button className="border-b border-gray-700">
                                    <ListItemIcon>
                                        <img src={images.archive} className={classes.img}
                                            alt="Resolução BACEN N 4.656 de 26 de Abril de 2018. Dispõe sobre a Sociedade de Crédito Direto" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Resolução BACEN N 4.656 de 26 de Abril de 2018. Dispõe sobre a Sociedade de Crédito Direto"
                                        className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button className="border-b border-gray-700">
                                    <ListItemIcon>
                                        <img src={images.archive} className={classes.img}
                                            alt="Principais Recomendações de Segurança" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Principais Recomendações de Segurança"
                                        className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button className="border-b border-gray-700">
                                    <ListItemIcon>
                                        <img src={images.archive} className={classes.img}
                                            alt="Política de Responsabilidade SocioAmbiental - PRSA" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Política de Responsabilidade SocioAmbiental - PRSA"
                                        className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button className="border-b border-gray-700">
                                    <ListItemIcon>
                                        <img src={images.archive} className={classes.img}
                                            alt="Política de Sucessão de Administradores" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Política de Sucessão de Administradores"
                                        className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button className="border-b border-gray-700">
                                    <ListItemIcon>
                                        <img src={images.archive} className={classes.img}
                                            alt="Política de Gestão do Canal de Comunicação de Indícios de Ilicitudes" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Política de Gestão do Canal de Comunicação de Indícios de Ilicitudes"
                                        className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button className="border-b border-gray-700">
                                    <ListItemIcon>
                                        <img src={images.archive} className={classes.img}
                                            alt="Política de Privacidade" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Política de Privacidade"
                                        className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button className="border-b border-gray-700">
                                    <ListItemIcon>
                                        <img src={images.archive} className={classes.img}
                                            alt="Política Anticorrupção" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Política Anticorrupção"
                                        className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button className="border-b border-gray-700">
                                    <ListItemIcon>
                                        <img src={images.archive} className={classes.img}
                                            alt="Política de Ética, Conduta e Relacionamento" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Política de Ética, Conduta e Relacionamento"
                                        className={classes.listItem} disableTypography />
                                </ListItem>
                                <ListItem button>
                                    <ListItemIcon>
                                        <img src={images.archive} className={classes.img} alt="" />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary="Política de Segurança Cibernética"
                                        className={classes.listItem} disableTypography />
                                </ListItem>
                            </List>
                        </div>
                    </Grid>

                </Grid>
            </section>
        </>
    )
}
export default withStyles(styles, { withTheme: true })(Compliance);
