// src/components/PaginaCalendario.js

import React, { useState } from 'react';
// Importando os componentes do MUI que vamos usar
import {
  Box, Typography, Select, MenuItem, Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';

// Importando os dados que criamos no passo anterior
import { eventos } from '../dadosDoCalendario';

function PaginaCalendario() {
  // O hook 'useState' do React nos permite guardar estados no componente.
  // 'semestre' guardará o valor do seletor de Ano/Semestre.
  const [semestre, setSemestre] = useState('2023/2');
  // 'dialogoAberto' controlará a visibilidade da janela de confirmação.
  const [dialogoAberto, setDialogoAberto] = useState(false);

  // Função para lidar com a mudança de valor no seletor de semestre
  const handleSemestreChange = (event) => {
    setSemestre(event.target.value);
  };

  // Funções para abrir e fechar a janela de diálogo
  const handleAbrirDialogo = () => {
    setDialogoAberto(true);
  };

  const handleFecharDialogo = () => {
    setDialogoAberto(false);
  };

  const handleConfirmarExclusao = () => {
    // Aqui você colocaria a lógica para deletar o calendário
    console.log('Calendário excluído!');
    handleFecharDialogo();
  };

  return (
    <Box sx={{ p: 3 }}> {/* 'Box' é um contêiner genérico. 'p: 3' adiciona um espaçamento interno. */}

      {/* Título da Página */}
      <Typography variant="h4" gutterBottom>
        Calendário
      </Typography>

      {/* Seção superior com seletor e botões */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Box>
          <Typography variant="caption">Ano/Semestre</Typography>
          <Select value={semestre} onChange={handleSemestreChange} size="small">
            <MenuItem value={'2023/2'}>2023/2</MenuItem>
            <MenuItem value={'2024/1'}>2024/1</MenuItem>
            <MenuItem value={'2024/2'}>2024/2</MenuItem>
          </Select>
        </Box>
        <Box>
          <Button variant="contained" sx={{ mr: 1 }}>Criar</Button>
          <Button variant="outlined" sx={{ mr: 1 }}>Editar</Button>
          {/* Ao clicar no botão "Excluir", abrimos o diálogo de confirmação */}
          <Button variant="contained" color="error" onClick={handleAbrirDialogo}>
            Excluir
          </Button>
        </Box>
      </Box>

      {/* Tabela de Eventos */}
      <TableContainer component={Paper}> {/* 'Paper' cria uma superfície com sombra, como uma folha de papel. */}
        <Table>
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Data de início</TableCell>
              <TableCell>Data de fim</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Usamos 'map' para percorrer nossa lista de eventos e criar uma linha para cada um */}
            {eventos.map((evento) => (
              <TableRow key={evento.nome}>
                <TableCell>{evento.nome}</TableCell>
                <TableCell>{evento.inicio}</TableCell>
                <TableCell>{evento.fim}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Janela de Confirmação (Modal/Dialog) */}
      <Dialog
        open={dialogoAberto}
        onClose={handleFecharDialogo}
      >
        <DialogTitle>Deseja deletar o calendário?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Esta ação não pode ser desfeita. Todos os eventos associados a este calendário serão perdidos.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleFecharDialogo}>Cancelar</Button>
          <Button onClick={handleConfirmarExclusao} color="primary" autoFocus>
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>

    </Box>
  );
}

export default PaginaCalendario;