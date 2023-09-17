'use client';
import * as React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

interface formSnackbarProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  link: string;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '10px',
  boxShadow: 24,
  p: '20px 10px',
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
};

export default function WhatsappModal({
  openModal,
  setOpenModal,
  link,
}: formSnackbarProps) {
  const handleClose = () => setOpenModal(false);

  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="subtitle1"
          component="h2"
          sx={{ textAlign: 'center' }}
        >
          Clique no link abaixo para pedir o orçamento diretamente pelo whatsapp
        </Typography>
        <Button
          href={link}
          target="_blank"
          variant="contained"
          sx={{ mt: '10px' }}
          startIcon={<InsertLinkIcon />}
        >
          Link
        </Button>
      </Box>
    </Modal>
  );
}
