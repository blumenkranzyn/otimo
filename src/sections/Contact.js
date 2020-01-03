import React, { useState } from "react"
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import NumberFormatCustom from "../components/FormattedInputs/NumberFormatCustom";
import { Grid, Typography, TextField } from "@material-ui/core"
import Button from '@material-ui/core/Button';
import { Fade } from "react-reveal"


const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        mobilePhone: "",
        message: "",
    })

    return (
        <>
            <section className="contact-section" id="contact">
                <Grid container direction="row" alignItems="center" justify="flex-start">
                    <Grid item xs={12} md={6} lg={6}>
                        <h2 className="text-blue-dark">FALE CONOSCO</h2>
                        <Typography variant={"h6"} component={"p"}>
                            FICOU ALGUMA DÚVIDA, SUGESTÃO OU OPINIÃO?
                            ENCAMINHE-NOS O QUE VOCÊ ACHA!
                      </Typography>
                        <Typography variant={"h6"} component={"p"}>
                            SERÁ UM PRAZER RECEBER SUA MENSAGEM!
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Grid container direction="column" justify="center" alignItems="stretch" spacing={3}>
                            <Grid item>
                                <TextField
                                    required
                                    fullWidth
                                    id="name"
                                    name="name"
                                    label="Nome completo"
                                    value={form.name}
                                    className="bg-white mb-10"
                                    onChange={e => setForm({ ...form, name: e.target.value })}
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    fullWidth
                                    required
                                    id="email"
                                    name="email"
                                    label="E-mail"
                                    className="bg-white my-4"
                                    value={form.email}
                                    onChange={e => setForm({ ...form, email: e.target.value })}
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item>
                                <NumberFormatCustom
                                    fullWidth
                                    required
                                    id="mobilePhone"
                                    name="mobilePhone"
                                    label="Telefone"
                                    className="bg-white my-4"
                                    value={form.mobilePhone}
                                    format={'(##) #####-####'}
                                    onBlur={e => setForm({ ...form, mobilePhone: e.target.value })}
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    required
                                    fullWidth
                                    multiline
                                    rows="4"
                                    id="message"
                                    name="message"
                                    label="Sua Mensagem"
                                    className="bg-white my-4"
                                    value={form.message}
                                    onChange={e => setForm({ ...form, message: e.target.value })}
                                    variant="filled"
                                />
                            </Grid>
                        </Grid>
                        <div className="flex items-center w-full mt-5  justify-center">
                            <button className="btn btn-blue-dark">
                                ENVIAR
                            </button>
                        </div>
                    </Grid>
                </Grid>
            </section>
        </>
    )
}

export default Contact