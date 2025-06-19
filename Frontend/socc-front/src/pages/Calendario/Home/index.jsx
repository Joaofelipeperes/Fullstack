import React, { useState } from 'react';
import {
  Box,
  Button,
  Modal,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  AppBar,
  Toolbar,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Home, Event } from '@mui/icons-material';
import './style.css';

const dadosCalendario = [
  { id: 1, nome: "Semestre Letivo", inicio: "23/12/2023", fim: "23/12/2023" },
  { id: 2, nome: "Matriz de Demanda de Cursos", inicio: "28/08/2023", fim: "02/09/2023" },
  { id: 3, nome: "Matriz de Demanda de Serviços", inicio: "28/08/2023", fim: "02/09/2023" },
  { id: 4, nome: "Matriz de Demanda Global", inicio: "28/08/2023", fim: "02/09/2023" },
  { id: 5, nome: "Matriz de Oferta de Cursos", inicio: "03/09/2023", fim: "06/09/2023" },
  { id: 6, nome: "Ajustes na Matriz de Oferta de Cursos", inicio: "07/09/2023", fim: "09/09/2023" },
  { id: 7, nome: "Matriz de Oferta de Serviços", inicio: "03/09/2023", fim: "06/09/2023" },
  { id: 8, nome: "Ajustes na Matriz de Oferta de Serviços", inicio: "07/09/2023", fim: "09/09/2023" },
  { id: 9, nome: "Matriz de Oferta Global", inicio: "03/09/2023", fim: "08/09/2023" },
  { id: 10, nome: "Manifestação de Intenção de Ministrar Componente Curricular", inicio: "11/09/2023", fim: "12/09/2023" },
  { id: 11, nome: "Resolução de Anomalias nas Ofertas de Componentes Curriculares", inicio: "13/09/2023", fim: "14/09/2023" },
  { id: 12, nome: "Consolidação da Matriz de Demanda Global da Unidade Acadêmica", inicio: "15/09/2023", fim: "16/09/2023" },
  { id: 13, nome: "Oferta de Turma no SIGAA", inicio: "17/09/2023", fim: "17/09/2023" },
];

const colunas = [
  { field: 'nome', headerName: 'Nome', flex: 1 },
  { field: 'inicio', headerName: 'Data de início', width: 150 },
  { field: 'fim', headerName: 'Data de fim', width: 150 },
];

function Calendario() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      {/* Barra superior com logo */}
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: 1 }}>
          SOCC
        </Typography>
      </Toolbar>

      {/* Corpo da página com Sidebar e conteúdo */}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Box className="sidebar">
          <ul className="sidebar-menu">
            <li><Home fontSize="small" /> <span>Página Inicial</span></li>
            <li className="ativo"><Event fontSize="small" /> <span>Calendário</span></li>
          </ul>
        </Box>

        {/* Conteúdo principal */}
        <Box flexGrow={1} p={3} sx={{ backgroundColor: '#d3d3d3' }}>
          <Box className="caixa">
            <Typography variant="h5" gutterBottom>Calendário</Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <FormControl size="small" sx={{ minWidth: 180 }}>
                <InputLabel id="semestre-label">Ano/Semestre</InputLabel>
                <Select labelId="semestre-label" defaultValue="2023/2" label="Ano/Semestre">
                  <MenuItem value="2023/2">2023/2</MenuItem>
                </Select>
              </FormControl>

              <Box display="flex" gap={1}>
                <Button variant="contained" sx={{ backgroundColor: '#004c6d' }}>Criar</Button>
                <Button variant="contained" sx={{ backgroundColor: '#76c7e0' }}>Editar</Button>
                <Button variant="contained" sx={{ backgroundColor: '#d84315' }} onClick={() => setModalAberto(true)}>Excluir</Button>
              </Box>
            </Box>

            {/* DataGrid */}
            <Box height={500}>
              <DataGrid
                rows={dadosCalendario}
                columns={colunas}
                pageSize={10}
                rowsPerPageOptions={[5, 10]}
                disableRowSelectionOnClick
                sx={{ backgroundColor: '#fff', borderRadius: 1 }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Modal de confirmação */}
      <Modal open={modalAberto} onClose={() => setModalAberto(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 3,
            borderRadius: 1,
            minWidth: 300,
          }}
        >
          <Typography variant="body1" mb={2}>Deseja deletar o calendário?</Typography>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={() => setModalAberto(false)} sx={{ color: '#d84315' }}>CANCELAR</Button>
            <Button variant="text" sx={{ color: '#d84315', fontWeight: 'bold' }}>CONFIRMAR</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default Calendario;
