'use client';
import * as React from 'react';
import { set, useForm } from 'react-hook-form';
import {
  Grid,
  Box,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Button,
} from '@mui/material';

import PhoneInput from './PhoneInput';

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

  const [values, setValues] = React.useState({
    name: false,
    phone: false,
    email: false,
    category: false,
    niche: false,
    text: false,
    chars: false,
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let phonePreference: boolean = false;
    let emailPreference: boolean = false;
    if (checked[0]) {
      phonePreference = true;
    }
    if (checked[1]) {
      emailPreference = true;
    }

    setValues({
      name: !(name.length >= 5 && name.length <= 65),
      phone: phonePreference && phone.length !== 11,
      email:
        emailPreference &&
        !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email),
      category: category === '',
      niche: niche === '',
      text: false,
      chars: false,
    });
  };

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
        backgroundColor: 'background.default',
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
            xs: '0 60px',
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: {
              xs: '100%',
            },
            display: 'flex',
            flexDirection: 'row',
            justifyContent: {
              xs: 'center',
              md: 'center',
            },
            alignItems: {
              xs: 'flex-end',
              md: 'flex-end',
            },
            marginBottom: {
              xs: '40px',
            },
          }}
        >
          <Grid item xs={6}></Grid>
          <Grid item xs={6} container spacing={2}>
            {/* Nome */}
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ mb: '5px' }}>
                Qual o seu nome?
              </Typography>
              <TextField
                label="Nome"
                variant="outlined"
                required
                error={values.name}
                value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValues({ ...values, name: false });
                  setName(e.target.value);
                }}
                color={
                  name.length >= 5 && name.length <= 65 ? 'success' : 'error'
                }
                helperText={
                  name.length >= 5 && name.length <= 65
                    ? ''
                    : 'Seu nome tem que ter entre 4 a 65 caracteres'
                }
              />
            </Grid>

            {/* Checkbox de preferencia (email ou whatsapp) */}
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ textAlign: 'left' }}>
                Prefere que o contato seja via e-mail ou whatsapp?
              </Typography>
              <FormGroup
                sx={{ display: 'flex', flexDirection: 'row', mb: '10px' }}
              >
                <FormControlLabel
                  sx={{ marginRight: '100px' }}
                  control={<Checkbox onChange={handleCheckWhatsapp} />}
                  label="Whatsapp"
                />
                <FormControlLabel
                  control={<Checkbox onChange={handleCheckEmail} />}
                  label="Email"
                />
              </FormGroup>
              {checked[0] ? (
                <TextField
                  label="Digite seu número de telefone"
                  variant="outlined"
                  required
                  error={values.phone}
                  type="tel"
                  value={phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValues({ ...values, phone: false });
                    setPhone(e.target.value.replace(/[^0-9]/g, ''));
                  }}
                  sx={{ mb: '20px' }}
                  color={/^\d{11}$/.test(phone) ? 'success' : 'error'}
                  helperText={
                    /^\d{11}$/.test(phone)
                      ? ''
                      : 'Digite um número de telefone no formato: 71988888888'
                  }
                />
              ) : (
                <></>
              )}
              {checked[1] ? (
                <TextField
                  label="Digite seu email"
                  type="email"
                  variant="outlined"
                  required
                  error={values.email}
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValues({ ...values, email: false });
                    setEmail(e.target.value);
                  }}
                  color={
                    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
                      email
                    )
                      ? 'success'
                      : 'error'
                  }
                  helperText={
                    /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
                      email
                    )
                      ? ''
                      : 'Digite um email válido: "exemplo@email.com"'
                  }
                />
              ) : (
                <></>
              )}
            </Grid>

            {/* Categoria de locução */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                Qual tipo de locução você precisa?
              </Typography>
              <TextField
                id="demo-simple-select"
                label="Selecione"
                select
                required
                error={values.category}
                value={category}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setValues({ ...values, category: false });
                  setCategory(e.target.value);
                }}
                SelectProps={{ MenuProps: { disableScrollLock: true } }}
                color={category !== '' ? 'success' : 'error'}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Aatt</MenuItem>
                <MenuItem value={30}>Bar</MenuItem>
                <MenuItem value={40}>Ber</MenuItem>
                <MenuItem value={50}>GHE</MenuItem>
                <MenuItem value={60}>GDAg</MenuItem>
              </TextField>
            </Grid>

            {/* Nicho */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                Me fale um pouco sobre o assunto da locução, sobre o que se
                trata o texto?
              </Typography>
              <TextField
                label="Qual o nicho da locução?"
                variant="outlined"
                multiline
                required
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

            {/* Texto da locução */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                Qual o número total de palavras para essa narração? *
              </Typography>
            </Grid>

            {/* Caracteres */}
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
              }}
            >
              <TextField
                label="Digite um número ou envie o texto completo"
                multiline
                helperText={
                  'Caso não saiba, digite o texto e calcularemos os caracteres'
                }
              ></TextField>
              <TextField
                type={'number'}
                label="Palavras"
                helperText={'Número de palavras'}
                sx={{ width: '35%' }}
              ></TextField>
            </Grid>

            {/* Meio de divulgação */}
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                Onde esta narração será divulgada?
              </Typography>
              <TextField
                label="Em que meio será divulgada?"
                required
              ></TextField>
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
              }}
            >
              <Button variant="contained" type="submit">
                PEDIR ORÇAMENTO
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
