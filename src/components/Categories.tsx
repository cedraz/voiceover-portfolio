'use client';
import * as React from 'react';
import {
  Typography,
  ListItemIcon,
  ListItem,
  ListItemText,
  List,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTheme } from '@mui/material/styles';

export default function Categories() {
  const theme = useTheme();

  const categories = [
    'Cartas de Vendas (VSL)',
    'Vídeos para canal do Youtube',
    'Vídeo Institucional',
    'Áudios para Whatsapp',
    'URAs humanizadas',
    'E-learning',
    'Vídeos internos',
    'Comerciais e propagandas',
    'E muito mais...',
  ];

  return (
    <div className="background">
      <Typography variant="h4">Categorias de locução</Typography>
      <Typography variant="subtitle1" color={'text.secondary'}>
        Abaixo estão as categorias de locuções que eu produzo
      </Typography>
      <List>
        {categories.map((category) => (
          <ListItem key={category}>
            <ListItemIcon>
              <CheckCircleIcon
                sx={{
                  color: theme.palette.primary.main,
                }}
              ></CheckCircleIcon>
            </ListItemIcon>
            <ListItemText>{category}</ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
