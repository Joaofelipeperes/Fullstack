// src/App.js

import React from 'react';
// Importando componentes de layout do MUI
import {
  AppBar, Box, CssBaseline, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Toolbar, Typography
} from '@mui/material';
// Importando ícones
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// Importando nossa página de calendário
import PaginaCalendario from './Components/PaginaCalendario';

const drawerWidth = 240; // Largura do menu lateral

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* 'CssBaseline' normaliza os estilos CSS em diferentes navegadores */}
      <CssBaseline />

      {/* Cabeçalho Superior (AppBar) */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#fff', color: '#000' }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            SOCC
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Menu Lateral (Drawer) */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar /> {/* Espaçador para o conteúdo ficar abaixo do AppBar */}
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Página Inicial" />
              </ListItemButton>
            </ListItem>
            {/* Item de menu selecionado */}
            <ListItem disablePadding sx={{ backgroundColor: 'rgba(0, 0, 0, 0.08)' }}>
              <ListItemButton>
                <ListItemIcon>
                  <CalendarMonthIcon />
                </ListItemIcon>
                <ListItemText primary="Calendário" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      {/* Conteúdo Principal */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar /> {/* Espaçador para o conteúdo ficar abaixo do AppBar */}
        <PaginaCalendario />
      </Box>
    </Box>
  );
}

export default App;