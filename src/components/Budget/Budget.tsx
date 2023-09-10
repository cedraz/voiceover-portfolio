'use client';
import * as React from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
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
  MenuItem,
  Button,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

import NameInput from './name-input';
import PhoneInput from './phone-input';
import EmailInput from './email-input';
import CategorySelect from './category-select';
import ChannelInput from './channel-input';
import FormSnackbar from './form-snackbar';
import WhatsappModal from './whatsapp-modal';

export default function Section() {
  const [checked, setChecked] = React.useState([false, false]);
  const handleCheckEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  const handleCheckWhatsapp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [niche, setNiche] = React.useState('');
  const [text, setText] = React.useState('');
  const [chars, setChars] = React.useState(0);
  const [channel, setChannel] = React.useState('');
  const [values, setValues] = React.useState({
    name: false,
    preference: false,
    phone: false,
    email: false,
    category: false,
    niche: false,
    chars: false,
    channel: false,
  });
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [link, setLink] = React.useState('');
  const [success, setSuccess] = React.useState(false);
  const [message, setMessage] = React.useState('');

  const countWords = () => {
    const trimmedText: string = text.trim();
    const words: string[] = trimmedText.split(/\s+/);
    const filteredWords: string[] = words.filter((word) => word !== '');
    setChars(filteredWords.length);
  };

  const validateEmail = async (email: string) => {
    const api_key = process.env.NEXT_PUBLIC_API_KEY;
    const response = await axios({
      method: 'get',
      url: `https://api.zerobounce.net/v2/validate?api_key=${api_key}&email=${email}&ip_address=`,
    });
    return response;
  };

  const sendMessageByEmail = async () => {
    const { data } = await validateEmail(email);
    const isEmailValid = data.status === 'valid';
    if (isEmailValid) {
      const message = `
      Olá, meu nome é ${name} e desejo pedir um orçamento para minha locução
      Eu estou precisando de uma locução do tipo: ${category}
      O nicho da locução é: ${niche}
      O número de palavras é: ${chars}
      O meio de divulgação da narração é: ${channel} 
    `;
      const templateParams = {
        from_name: name,
        message: message,
        email: email,
      };
      if (
        isEmailValid &&
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      ) {
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        );
      }
    } else {
      return;
    }
  };

  const sendMessageByWhatsapp = async () => {
    const message = `
    Olá, meu nome é ${name} e desejo pedir um orçamento para minha locução
      Eu estou precisando de uma locução do tipo: ${category}
      O nicho da locução é: ${niche}
      O número de palavras é: ${chars}
      O meio de divulgação da narração é: ${channel} 
    `;

    setLink(
      `https://api.whatsapp.com/send?phone=5571999440042&text=${encodeURIComponent(
        message
      )}`
    );

    setOpenModal(true);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = [
      !(name.length >= 5 && name.length <= 65),
      !checked[0] && !checked[1],
      checked[0] && phone.length !== 11,
      checked[1] &&
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email),
      category === '',
      niche === '',
      chars === 0,
      channel === '',
    ];

    setValues({
      name: errors[0],
      preference: errors[1],
      phone: errors[2],
      email: errors[3],
      category: errors[4],
      niche: errors[5],
      chars: errors[6],
      channel: errors[7],
    });

    if (errors.some((e) => e === true)) {
      setOpen(true);
      setSuccess(false);
      setMessage('Preencha todos os campos corretamente');
      return;
    }

    if (checked[1]) {
      setOpen(true);
      setSuccess(true);
      setMessage('Orçamento enviado com sucesso pelo email!');
      await sendMessageByEmail();
    }

    if (checked[0]) {
      setOpen(true);
      setSuccess(true);
      setMessage('Link com mensagem pronta gerado com sucesso!');
      await sendMessageByWhatsapp();
    }
  };

  const theme = useTheme();
  const style = {
    pl: '0 !important',
  };
  const textFieldStyle = (theme: Theme) => ({
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center !important',
    },
  });

  return (
    <Grid
      id={'Orçamento'}
      container
      className="image-container"
      sx={{
        height: {
          xs: 'fit-content',
          md: 'fit-content',
        },
        paddingBottom: {
          xs: '50px',
        },
        backgroundColor: theme.palette.background.default,
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
            marginBottom: {
              xs: '40px',
            },
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
                xs: '32px 32px !important',
              },
              borderRadius: '10px',
              width: {
                xs: '100%',
              },
              marginLeft: {
                xs: '0',
              },
              textAlign: {
                xs: 'center',
                sm: 'left',
              },
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
                <FormLabel
                  component="legend"
                  color={checked[0] || checked[1] ? 'success' : 'error'}
                  sx={{ fontSize: '16px' }}
                >
                  Selecione pelo menos 1
                </FormLabel>
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
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          setValues({ ...values, preference: false });
                          handleCheckWhatsapp(e);
                        }}
                      />
                    }
                    label="Whatsapp"
                  />
                  <FormControlLabel
                    control={<Checkbox onChange={handleCheckEmail} />}
                    label="Email"
                  />
                </FormGroup>
              </FormControl>
              {checked[0] ? (
                <PhoneInput
                  phone={phone}
                  setPhone={setPhone}
                  values={values}
                  setValues={setValues}
                />
              ) : (
                <></>
              )}
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

            {/* Categoria de locução */}
            <Grid item xs={12} sx={style}>
              <CategorySelect
                category={category}
                setCategory={setCategory}
                values={values}
                setValues={setValues}
              />
            </Grid>

            {/* Nicho */}
            <Grid item xs={12} sx={style}>
              <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                Me fale um pouco sobre o assunto da locução, sobre o que se
                trata o texto?
              </Typography>
              <TextField
                label="Qual o nicho da locução?"
                variant="outlined"
                multiline
                error={values.niche}
                value={niche}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValues({ ...values, niche: false });
                  setNiche(e.target.value);
                }}
                color={niche !== '' ? 'success' : 'error'}
                helperText={
                  niche !== ''
                    ? ''
                    : 'Descreva brevemente o nicho da sua locução'
                }
              ></TextField>
            </Grid>

            {/* Subtitle */}
            <Grid item xs={12} md={8} sx={style}>
              <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                Qual o número total de palavras para essa narração? *
              </Typography>
            </Grid>

            {/* Texto da locução + caracteres */}
            <Grid item xs={12} sm={9} sx={style}>
              <TextField
                label="Digite um número ou envie o texto completo"
                multiline
                helperText={
                  'Caso não saiba, digite o texto e calcularemos os caracteres'
                }
                value={text}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setText(e.target.value);
                  setValues({ ...values, chars: false });
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

            <Grid item xs={12} sm={3} sx={style}>
              <TextField
                type={'number'}
                label="Palavras"
                helperText={'Número de palavras'}
                sx={{
                  width: {
                    xs: '100%',
                  },
                }}
                value={chars}
                error={values.chars}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValues({ ...values, chars: false });
                  if (e.target.value === '') {
                    setChars(0);
                  } else {
                    setChars(parseInt(e.target.value));
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
              item
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: {
                  xs: 'center',
                  md: 'center',
                },
                alignItems: {
                  xs: 'flex-end',
                  md: 'flex-end',
                },
                p: '0',
              }}
            >
              <Button variant="contained" type="submit">
                PEDIR ORÇAMENTO
              </Button>
            </Grid>
          </Grid>
          <FormSnackbar
            open={open}
            setOpen={setOpen}
            message={message}
            success={success}
          />
          <WhatsappModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            link={link}
          />
        </Grid>
      </Box>
    </Grid>
  );
}
