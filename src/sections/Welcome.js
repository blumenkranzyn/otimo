import React from "react"
import { Grid, Hidden, Card } from "@material-ui/core"
import { Fade } from "react-reveal"

const images = {
    separator: require('../images/bg-transicao.png'),
    phone: require('../images/celular-tech.png'),
    bancoCentralLogo: require('../images/banco-central-do-brasil-logo-4.png')
}


const Welcome = () => {
    return (
        <>
            <section className="welcome-section w-full relative">
                <img src={images.separator} alt="phone" className="separator" />
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item>
                        <img src={images.phone} alt="phone" />
                    </Grid>
                    <Grid item className="description" md={6}>
                        <h2 className="text-blue-dark">NÓS SOMOS A <span className="text-white">ÓTIMO SDC</span></h2>
                        <p>Uma plataforma 100% online, sem burocracia e sem taxas abusivas, com um time de especialistas em diversas areas para possibilitar que mais pessoas tenham o crédito facilitado e justo.</p>
                        <Card className="m-4 p-4 ml-0">
                            <div className="flex justify-around items-center">
                                <img src={images.bancoCentralLogo} alt="banco central do brasil" width={150} />
                                <p className="ml-12">Somos uma instituição financeira autorizada pelo <b>Banco Central</b>, constituida por profissionais com longa experiência no mercado financeiro e de capitais.</p>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}

export default Welcome