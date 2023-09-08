'use client';
import * as React from 'react';
import InputMask from 'react-input-mask';
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
  const [country, setCountry] = React.useState('');
  const [checked, setChecked] = React.useState([false, false]);
  const [name, setName] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };
  const handleCheckEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };
  const handleCheckWhatsapp = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const nameInputRef = React.useRef<HTMLInputElement | null>(null);

  const handleNameInput = () => {
    if (nameInputRef.current) {
      setName(nameInputRef.current.value);
    }
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
        backgroundColor: 'background.secondary',
      }}
    >
      <Box
        component={'form'}
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
            {/* Input do nome */}
            <Grid item xs={12}>
              <Typography variant="body1" sx={{ mb: '5px' }}>
                Qual o seu nome?
              </Typography>
              <TextField
                id="standard-basic"
                label="Nome"
                variant="outlined"
                required
                inputProps={{ ref: nameInputRef }}
                onBlur={handleNameInput}
                color={
                  name.length < 4 || name.length > 65 ? 'error' : 'success'
                }
                helperText={
                  name.length >= 4 && name.length <= 65
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
                // <TextField
                //   label="Digite seu número de telefone"
                //   variant="outlined"
                //   required
                //   sx={{ mb: '20px' }}
                //   inputProps={{ ref: phoneInputRef }}
                //   onBlur={handlePhoneInput}
                //   color={
                //     phone.length < 4 || phone.length > 65 ? 'error' : 'success'
                //   }
                //   helperText={
                //     phone.length >= 4 && phone.length <= 65
                //       ? ''
                //       : 'Digite um número de telefone no formato: 71 99999-9999'
                //   }
                // />
                <PhoneInput />
              ) : (
                <></>
              )}
              {checked[1] ? (
                <TextField
                  id="standard-basic"
                  label="Digite seu email"
                  variant="outlined"
                  required
                />
              ) : (
                <></>
              )}
              {/* <TextField
                id="standard-basic"
                label="Email ou número de telefone"
                variant="outlined"
                required
              /> */}
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                Qual tipo de locução você precisa?
              </Typography>
              <TextField
                id="demo-simple-select"
                label="Selecione"
                value={country}
                onChange={handleChange}
                select
                fullWidth
                required
                SelectProps={{ MenuProps: { disableScrollLock: true } }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Aatt</MenuItem>
                <MenuItem value={30}>Bar</MenuItem>
                <MenuItem value={40}>Ber</MenuItem>
                <MenuItem value={50}>GHE</MenuItem>
                <MenuItem value={60}>GDAg</MenuItem>
              </TextField>
            </Grid>

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
              ></TextField>
            </Grid>

            <Grid item xs={8.2}>
              <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                Qual o número total de palavras para essa narração? *
              </Typography>

              <TextField
                label="Digite um número ou envie o texto completo"
                multiline
                helperText={
                  'Caso não saiba, digite o texto e calcularemos os caracteres'
                }
              ></TextField>
            </Grid>

            <Grid
              item
              xs={3.8}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
              }}
            >
              <TextField
                type={'number'}
                label="Caracteres"
                helperText={'Digite um número de caracteres'}
              ></TextField>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ mb: '5px' }}>
                Onde esta narração será divulgada?
              </Typography>
              <TextField
                label="Em que meio será divulgada?"
                required
              ></TextField>
            </Grid>

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
              <Button
                variant="contained"
                sx={{
                  width: '80%',
                  alignSelf: 'center',
                  justifySelf: 'center',
                }}
              >
                PEDIR ORÇAMENTO
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
