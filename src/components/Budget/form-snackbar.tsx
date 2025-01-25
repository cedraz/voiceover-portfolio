'use client'
import * as React from 'react'
import { Snackbar, Alert } from '@mui/material'

interface formSnackbarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  success: boolean;
}

export default function FormSnackbar({
  open,
  setOpen,
  message,
  success,
}: formSnackbarProps) {
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={handleClose} severity={success ? 'success' : 'error'}>
        {message}
      </Alert>
    </Snackbar>
  )
}
