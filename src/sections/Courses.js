import React from "react"
import { withStyles } from "@material-ui/core/styles"
import { Grid, Card, Typography, Link } from "@material-ui/core"
import { AccessTime } from "@material-ui/icons"
import { Fade } from "react-reveal"

const styles = theme => ({
    listItem: {
        paddingLeft: 30
    }
})

const images = {
    consciencia: require('../images/courses/curso-consciencia-financeira.png'),
    lavagem: require('../images/courses/curso-lavagem-dinheiro.png'),
}


const Courses = ({ classes }) => {
    return (
        <>
            <section className="courses-section w-full relative">
                <Grid container direction="column" alignItems="center" justify="flex-start">
                    <Grid item className="text-center">
                        <h2 className="text-blue-base">CURSOS GRATUITOS</h2>
                        <Typography variant={"h6"} component={"p"}>
                            Em consonância com o Banco Central, desenvolvemos o programa {<span className="font-bold">"Crédito Só Consciente"</span>},
                            disponibilizando breves cursos de conscientização  financeira às empresas parceiras e seus colaboradores.
                      </Typography>
                        <Typography variant={"h6"} component={"p"}>
                            O conteúdo de nossos cursos são diretos, fáceis de aprender
                            e lhe darão a base necessária para lidar corretamente com seu dinheiro. Aproveite!
                      </Typography>
                    </Grid>
                    <Grid item>
                        <Card className="card-course">
                            <Grid container alignItems="center" justify="center">
                                <Grid item md={4} xs={12}>
                                    <img src={images.consciencia} alt="" />
                                </Grid>
                                <Grid item md={8} xs={12} className="p-8">
                                    <Typography variant={"h5"} component={"p"} >
                                        Curso Básico de Conscientização Financeira
                                    </Typography>
                                    <Typography variant={"body1"} className="description" >
                                        O curso básico: "Conscientização Financeira" orienta você a identificar seu
                                        perfil financeiro; planejar e organizar sua vida financeira em caso de endividamento.
                                        Ao fim do curso, você saberá responder: Por que devo administrar meu dinheiro?, Eu "preciso" ou "quero" isso?,
                                        Devo comprar à vista ou no crédito?, O consumo me faz feliz?
                                    </Typography>
                                    <div className="actions">
                                        <a href="">Se inscrever</a>
                                        <a href="">Ver Mais</a>
                                        <span><AccessTime /> 2h</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card className="card-course">
                            <Grid container alignItems="center" justify="center">
                                <Grid item md={4} xs={12}>
                                    <img src={images.lavagem} alt="" />
                                </Grid>
                                <Grid item md={8} xs={12} className="p-8">
                                    <Typography variant={"h5"} component={"p"} >
                                        Curso Básico de Prevenção e Combate à Lavagem de Dinheiro
                                    </Typography>
                                    <Typography variant={"body1"} className="description" >
                                        Descubra como funciona a lavagem de dinheiro no Brasil através de uma
                                        abordagem prática, que demonstra quais são os instrumentos dessa prática
                                        criminosa e como são utilizados.
                                    </Typography>
                                    <Typography variant={"body1"} className="description" >
                                        Saba também através deste curso como o Brasil atua contra esta prática.
                                    </Typography>
                                    <div className="actions">
                                        <a href="">Se inscrever</a>
                                        <a href="">Ver Mais</a>
                                        <span><AccessTime /> 2h</span>
                                    </div>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>

                </Grid>
            </section>
        </>
    )
}
export default withStyles(styles, { withTheme: true })(Courses);
