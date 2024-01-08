'use client'
import * as React from 'react'
import emailjs from '@emailjs/browser'
import {
    Grid,
    Box,
    TextField,
    Typography,
    FormGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
    Checkbox,
    Button,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

import '../../styles/parallax.css'

import NameInput from './name-input'
import EmailInput from './email-input'
import CategorySelect from './category-select'
import AnotherInput from './another-input'
import ChannelInput from './channel-input'
import FormSnackbar from './form-snackbar'
import NicheInput from './niche-input'

export default function Section() {
    const [checked, setChecked] = React.useState([false, false])
    const handleCheckEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked])
    }
    const handleCheckWhatsapp = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([event.target.checked, checked[1]])
    }

    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [category, setCategory] = React.useState('')
    const [niche, setNiche] = React.useState('')
    const [text, setText] = React.useState('')
    const [chars, setChars] = React.useState(0)
    const [channel, setChannel] = React.useState('')
    const [anotherCategory, setAnotherCategory] = React.useState('')
    const [values, setValues] = React.useState({
        name: false,
        preference: false,
        phone: false,
        email: false,
        category: false,
        niche: false,
        chars: false,
        channel: false,
        anotherCategory: false,
    })
    const [open, setOpen] = React.useState(false)
    const [success, setSuccess] = React.useState(false)
    const [message, setMessage] = React.useState('')

    const countWords = () => {
        const trimmedText: string = text.trim()
        const words: string[] = trimmedText.split(/\s+/)
        const filteredWords: string[] = words.filter((word) => word !== '')
        setChars(filteredWords.length)
    }

    // const validateEmail = async (email: string) => {
    //   const api_key = process.env.NEXT_PUBLIC_API_KEY;
    //   const { data } = await axios({
    //     method: 'get',
    //     url: `https://emailvalidation.abstractapi.com/v1/?api_key=${api_key}&email=${email}`,
    //   });
    //   return data;
    // };

    const emailTemplate = (name: string, email: string) => {
        let message = ''
        if (category === 'Outra') {
            message = `Olá, meu nome é ${name} e desejo pedir um orçamento para minha locução

Eu estou precisando de uma locução do tipo: ${anotherCategory}

O nicho da locução é: ${niche}

O número de palavras é: ${chars}

O meio de divulgação da narração é: ${channel} 

${text === '' ? '' : `O texto da locução é: ${text}`}
      `
        } else {
            message = `Olá, meu nome é ${name} e desejo pedir um orçamento para minha locução

Eu estou precisando de uma locução do tipo: ${anotherCategory}

O nicho da locução é: ${niche}

O número de palavras é: ${chars}

O meio de divulgação da narração é: ${channel} 

${text === '' ? '' : `O texto da locução é: ${text}`}
      `
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }
        if (
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
        ) {
            emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
        }
        setOpen(true)
        setSuccess(true)
        setMessage('Orçamento enviado com sucesso pelo email!')
    }

    const sendMessageByEmail = async () => {
        setOpen(true)
        setSuccess(true)
        setMessage('Orçamento enviado com sucesso pelo email!')
        emailTemplate(name, email)

        emailTemplate(name, email)
    }

    const sendMessageByWhatsapp = async () => {
        let message = ''
        if (category === 'Outra') {
            message = `Olá, meu nome é *${name}* e desejo pedir um orçamento para minha locução

*Eu estou precisando de uma locução do tipo*: ${anotherCategory}

*O nicho da locução é*: ${niche}

*O número de palavras é*: ${chars}

*O meio de divulgação da narração é*: ${channel} 

${text === '' ? '' : `*O texto da locução é*: ${text}`}
      `
        } else {
            message = `Olá, meu nome é *${name}* e desejo pedir um orçamento para minha locução

*Eu estou precisando de uma locução do tipo*: ${category}
      
*O nicho da locução é*: ${niche}
      
*O número de palavras é*: ${chars}
      
*O meio de divulgação da narração é*: ${channel} 

${text === '' ? '' : `*O texto da locução é*: ${text}`}
            `
        }

        window.open(
            `https://api.whatsapp.com/send?phone=71988078997&text=${encodeURIComponent(
                message
            )}`,
            '_blank'
        )
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const errors = [
            !(name.length >= 3 && name.length <= 50),
            !checked[0] && !checked[1],
            false,
            checked[1] &&
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email),
            category === '',
            niche === '',
            chars === 0,
            channel === '',
            category === 'Outra' && anotherCategory === '',
        ]

        setValues({
            name: errors[0],
            phone: false,
            preference: errors[1],
            email: errors[3],
            category: errors[4],
            niche: errors[5],
            chars: errors[6],
            channel: errors[7],
            anotherCategory: errors[8],
        })

        if (errors.some((e) => e === true)) {
            setOpen(true)
            setSuccess(false)
            setMessage('Preencha todos os campos corretamente')
            return
        }

        if (checked[0]) {
            setOpen(true)
            setSuccess(true)
            setMessage('Link com mensagem pronta gerado com sucesso!')
            await sendMessageByWhatsapp()
        }

        if (checked[1]) {
            await sendMessageByEmail()
        }
    }

    const theme = useTheme()
    const style = {
        pl: '0 !important',
        pt: '2px !important',
    }

    return (
        <Box sx={{ background: 'linear-gradient(180deg, #171E40 0%, #000 100%)' }}>
            <Grid
                id={'Orçamento'}
                container
                className="image-container"
                sx={{
                    height: {
                        xs: 'fit-content',
                    },
                    width: {
                        xs: '100%',
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: {
                            xs: 'column',
                        },
                        marginTop: {
                            xs: '100px',
                        },
                        width: {
                            xs: '100%',
                        },
                        padding: {
                            xs: '0 0',
                        },
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            width: {
                                xs: '95%',
                            },
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: {
                                xs: 'center',
                                md: 'flex-end',
                            },
                            alignItems: {
                                xs: 'flex-end',
                                md: 'flex-end',
                            },
                            marginBottom: '100px',
                            ml: {
                                xs: '0',
                            },
                        }}
                    >
                        <Grid item xs={0} md={6}></Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            container
                            spacing={2}
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                p: {
                                    xs: '10px 32px !important',
                                },
                                borderRadius: '10px',
                                width: {
                                    xs: '100%',
                                },
                                marginLeft: {
                                    xs: '0',
                                },
                                textAlign: {
                                    xs: 'left',
                                },
                                border: `1px solid ${theme.palette.text.primary}`,
                            }}
                        >
                            {/* Nome */}
                            <Grid item xs={12} sx={style}>
                                <NameInput
                                    name={name}
                                    setName={setName}
                                    values={values}
                                    setValues={setValues}
                                />
                            </Grid>

                            {/* Checkbox de preferencia (email ou whatsapp) */}
                            <Grid item xs={12} sx={style}>
                                <Typography variant="body1">
                  Prefere que o contato seja via e-mail ou whatsapp?
                                </Typography>
                                <FormControl
                                    component="fieldset"
                                    error={values.preference}
                                    sx={{
                                        width: {
                                            xs: '100%',
                                        },
                                    }}
                                >
                                    {values.preference ? (
                                        <FormLabel
                                            component="legend"
                                            color={checked[0] || checked[1] ? 'success' : 'error'}
                                            sx={{ fontSize: '16px' }}
                                        >
                      Selecione pelo menos 1
                                        </FormLabel>
                                    ) : (
                                        <></>
                                    )}
                                    <FormGroup
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: {
                                                xs: 'space-between',
                                                mm: 'flex-start',
                                            },
                                        }}
                                    >
                                        <FormControlLabel
                                            sx={{
                                                marginRight: {
                                                    mm: '100px',
                                                },
                                            }}
                                            control={
                                                <Checkbox
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLInputElement>
                                                    ) => {
                                                        setValues({ ...values, preference: false })
                                                        handleCheckWhatsapp(e)
                                                    }}
                                                />
                                            }
                                            label="Whatsapp"
                                        />
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    onChange={(
                                                        e: React.ChangeEvent<HTMLInputElement>
                                                    ) => {
                                                        setValues({ ...values, preference: false })
                                                        handleCheckEmail(e)
                                                    }}
                                                />
                                            }
                                            label="Email"
                                        />
                                    </FormGroup>
                                </FormControl>
                                {checked[1] ? (
                                    <EmailInput
                                        email={email}
                                        setEmail={setEmail}
                                        values={values}
                                        setValues={setValues}
                                    />
                                ) : (
                                    <></>
                                )}
                            </Grid>

                            <Grid item xs={12} sx={style}>
                                <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                  Selecione a categoria desejada e me fale um pouco sobre o
                  nicho da locução
                                </Typography>
                            </Grid>

                            {/* Categoria de locução */}
                            <Grid item xs={12} md={4} sx={style}>
                                <CategorySelect
                                    category={category}
                                    setCategory={setCategory}
                                    values={values}
                                    setValues={setValues}
                                />
                            </Grid>

                            {/* Nicho */}
                            <Grid item xs={12} md={8} sx={style}>
                                <NicheInput
                                    niche={niche}
                                    setNiche={setNiche}
                                    values={values}
                                    setValues={setValues}
                                />
                            </Grid>

                            {category === 'Outra' ? (
                                <Grid item xs={12} sx={style}>
                                    <AnotherInput
                                        anotherCategory={anotherCategory}
                                        setAnotherCategory={setAnotherCategory}
                                        values={values}
                                        setValues={setValues}
                                    />
                                </Grid>
                            ) : (
                                <></>
                            )}

                            {/* Subtitle */}
                            <Grid item xs={12} sx={style} mt={'10px'}>
                                <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                  Qual o número total de palavras para essa narração? *
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{ mb: '5px', color: theme.palette.text.secondary }}
                                >
                  Caso não saiba, digite o texto e calcularemos a número de
                  palavras
                                </Typography>
                            </Grid>

                            {/* Texto da locução + caracteres */}
                            <Grid item xs={12} sm={9.5} sx={style}>
                                <TextField
                                    label="Digite o texto da locução caso não saiba o número de palavras"
                                    multiline
                                    value={text}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setText(e.target.value)
                                        setValues({ ...values, chars: false })
                                    }}
                                    onBlur={countWords}
                                    sx={{
                                        pr: {
                                            xs: '0',
                                            sm: '8px !important',
                                        },
                                    }}
                                ></TextField>
                            </Grid>

                            {/* Número de palavras */}
                            <Grid
                                item
                                xs={12}
                                sm={2.5}
                                mt={{
                                    xs: '20px',
                                    sm: '0',
                                }}
                                sx={style}
                            >
                                <TextField
                                    type={'number'}
                                    label="Palavras"
                                    helperText={'Nº de palavras'}
                                    sx={{
                                        width: {
                                            xs: '100%',
                                        },
                                    }}
                                    value={chars}
                                    error={values.chars}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        setValues({ ...values, chars: false })
                                        if (e.target.value === '') {
                                            setChars(0)
                                        } else {
                                            setChars(parseInt(e.target.value))
                                        }
                                    }}
                                    color={chars > 0 ? 'success' : 'error'}
                                ></TextField>
                            </Grid>

                            {/* Meio de divulgação */}
                            <Grid item xs={12} sx={style}>
                                <ChannelInput
                                    channel={channel}
                                    setChannel={setChannel}
                                    values={values}
                                    setValues={setValues}
                                />
                            </Grid>

                            {/* Botão de submit */}
                            <Grid
                                container
                                justifyContent={{ xs: 'center', sm: 'space-between' }}
                                alignItems="center"
                                sx={{
                                    display: 'flex',
                                    mt: '20px',
                                    mb: '20px',
                                }}
                            >
                                <Grid item>
                                    <Button variant="contained" type="submit">
          PEDIR ORÇAMENTO
                                    </Button>
                                </Grid>
                                <Grid item sx={{marginLeft: 'auto'}}>
                                    <Button variant="contained" >
          Whatsapp
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <FormSnackbar
                            open={open}
                            setOpen={setOpen}
                            message={message}
                            success={success}
                        />
                    </Grid>
                </Box>
            </Grid>
        </Box>
    )
}
