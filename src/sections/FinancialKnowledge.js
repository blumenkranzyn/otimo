import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid, Hidden, Typography } from "@material-ui/core"
import { Fade } from "react-reveal"

const styles = theme => ({
    listItem: {
        paddingLeft: 30
    }
})

const images = {
    antecipacao: require('../images/icons/sem-antecipacao.png'),
    perfis: require('../images/icons/perfis-clientes.png'),
    quitacao: require('../images/icons/quitacao-debito.png'),
}


const FinancialKnowledge = ({ classes }) => {
    return (
        <>
            <section className="knowledge-section w-full relative">
                <Grid container direction="row" alignItems="center" justify="flex-start">
                    <Grid item md={7} lg={6}>
                        <h2 className="text-blue-base">CONHECIMENTO FINANCEIRO</h2>

                        <Typography variant={"h4"} component={"h3"}>
                            O PREÇO DO CRÉDITO NO BRASIL
                      </Typography>
                        <Typography variant={"h6"} component={"p"}>
                            De acordo com dados do Banco Central, o maior
                            causador do endividamento do brasileiro é o cartão
                            de crédito e o cheque especial é o crédito mais caro.
                      </Typography>
                        <Typography variant={"h6"} component={"p"}>
                            O crescimento do endividamento vem fazendo com
                            que empresas se preocupem com a saúde financeira
                            dos funcionários e invistam em programas de
                            orientação sobre o uso consciente do dinheiro.
                      </Typography>
                    </Grid>

                </Grid>
            </section>
        </>
    )
}
export default withStyles(styles, { withTheme: true })(FinancialKnowledge);
