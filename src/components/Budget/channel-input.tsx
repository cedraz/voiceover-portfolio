'use client'
import * as React from 'react'
import { TextField, Typography } from '@mui/material'

interface CategorySelectProps {
  channel: string;
  setChannel: React.Dispatch<React.SetStateAction<string>>;
  values: {
    name: boolean;
    preference: boolean;
    phone: boolean;
    email: boolean;
    category: boolean;
    niche: boolean;
    chars: boolean;
    channel: boolean;
    anotherCategory: boolean;
  };
  setValues: React.Dispatch<
    React.SetStateAction<{
      name: boolean;
      preference: boolean;
      phone: boolean;
      email: boolean;
      category: boolean;
      niche: boolean;
      chars: boolean;
      channel: boolean;
      anotherCategory: boolean;
    }>
  >;
}

export default function ChannelInput({
    channel,
    setChannel,
    values,
    setValues,
}: CategorySelectProps) {
    return (
        <>
            <Typography variant="subtitle1" sx={{ mb: '5px' }}>
        Onde esta narração será divulgada?
            </Typography>
            <TextField
                label="Em que meio será divulgada?"
                error={values.channel}
                value={channel}
                multiline
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setValues({ ...values, channel: false })
                    setChannel(e.target.value)
                }}
                color={channel !== '' ? 'success' : 'error'}
                helperText={values.channel ? 'Descreva o meio de divulgação' : ''}
            ></TextField>
        </>
    )
}
