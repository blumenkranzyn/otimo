import React from "react"
import { Grid, Hidden, Card } from "@material-ui/core"
import { Fade } from "react-reveal"

const images = {
    credito: require('../images/icons/analise-credito.png'),
    cobranca: require('../images/icons/cobranca.png'),
    moeda: require('../images/icons/emissao-e-moeda.png'),
    seguro: require('../images/icons/seguros-operacoes.png'),

}


const Services = () => {
    return (
        <>
            <section className="services-section w-full relative">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} className="text-center">
                        <h2 className="text-blue-dark pb-10">NOSSOS SERVIÇOS</h2>
                    </Grid>
                    <Grid item md={12}>
                        <div className="cards" >
                            <div className="card">
                                <img src={images.credito} alt="ANÁLISE DE CRÉDITO" />
                                <p className="font-bold">ANÁLISE DE CRÉDITO</p>
                            </div>
                            <div className="card">
                                <img src={images.cobranca} alt="COBRANÇA" />
                                <p className="font-bold">COBRANÇA</p>
                            </div>
                            <div className="card">
                                <img src={images.moeda} alt="EMISSÃO DE MOEDA ELETRÔNICA" />
                                <p className="font-bold">EMISSÃO DE MOEDA ELETRÔNICA</p>
                            </div>
                            <div className="card">
                                <img src={images.seguro} alt="SEGUROS DE OPERAÇÕES FINANCEIRAS" />
                                <p className="font-bold">SEGUROS DE OPERAÇÕES FINANCEIRAS</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}

export default Services