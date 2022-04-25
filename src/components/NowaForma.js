import React, { useRef } from 'react';
import { Grid, TextField, Paper, Button} from "@mui/material"

import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

init("user_rPpvZ3anCSOxxkf5Cb1Yx");

function NowaForma() {
    const pStyle = {
        fontSize: "16px",
    }
    const hStyle = {
        textAlign: "justify",
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dj5hezo', 'template_ipwgs0g', form.current, 'user_rPpvZ3anCSOxxkf5Cb1Yx')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
        >
            <Grid item xl={7} lg={6} md={6} sm={10} xs={10}>
                <Grid item lg={12}>
                    <h2 style={hStyle}>
                        Bądźmy w kontakcie!
                    </h2>
                    <p style={{ textAlign: "justify", fontSize: "26px" }}>
                        Jeżeli zainteresowała Cię nasza oferta, masz jakieś pytania lub chciałbyś nam zaproponować współpracę, skontaktuj się z nami!
                    </p>
                </Grid>
                <form ref={form} onSubmit={sendEmail}>
                    <Grid item lg={12}>
                        <TextField style={{ width: "48%", marginRight: "2%" }} label="Imię i nazwisko" id="filled-basic" variant="filled" type="text" name="user_name" />
                        <TextField style={{ width: "48%", marginLeft: "2%" }} label="Adres e-mail" id="filled-basic" variant="filled" type="email" name="user_email" required />
                    </Grid>
                    <Grid item lg={12}>
                            <TextField
                                label="Wiadomość"
                                style={{ width: "100%" }}
                                id="filled-basic standard-multiline-static filled-basic"
                                multiline
                                rows={7}
                                variant="filled"
                                name="message"
                            />
                    </Grid>
                    <Grid item lg={12} >
                        <Button type="submit" value="Send" style={{width:"80%"}} variant="contained">Wyślij</Button>
                    </Grid>
                </form>
            </Grid>
            <Grid item xl={4} lg={5} md={5} sm={10} style={{ textAlign: "left" }}>
                <Paper elevation={10} style={{ padding: "40px", backgroundColor: "#808ba1" }}>
                    <Grid item lg={12} >
                        <p style={{ fontWeight: "700" }}>
                            Odwiedź nasze inne strony!
                        </p>
                        <p style={pStyle}>
                            Ankieta dotycząca twojego wymarzonego sklepu:
                        </p>
                        <p style={pStyle}>
                            Strona internetowa poświęcona naszym kompetencjom:
                        </p>
                        <p style={pStyle}>
                            Sklep internetowy:
                        </p>
                    </Grid>
                    <Grid item lg={12}>
                        <p style={{ fontWeight: "700" }}>
                            Adres:
                        </p>
                        <p style={pStyle}>
                            Niedźwiedź 344,
                        </p>
                        <p style={pStyle}>
                            Małopolska, 34-735
                        </p>
                    </Grid>
                    <Grid item lg={12}>
                        <p style={{ fontWeight: "700" }}>
                            Email:
                        </p>
                        <p style={pStyle}>
                            spszak@gmail.com
                        </p>
                    </Grid>
                    <Grid item lg={12}>
                        <p style={{ fontWeight: "700" }}>
                            Telefon:
                        </p>
                        <p style={pStyle}>
                            112
                        </p>
                    </Grid>

                </Paper>
            </Grid>
        </Grid>
    )
}

export default NowaForma
