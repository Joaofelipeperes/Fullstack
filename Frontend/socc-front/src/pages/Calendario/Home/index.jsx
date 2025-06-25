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
import DehazeIcon from '@mui/icons-material/Dehaze';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';

import './style.css';
import { DateRangePicker } from 'rsuite';

/*const dadosCalendario = [
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
];*/

const colunas = [
  { field: 'nome', headerName: 'Nome', flex: 1 },
  {
    field: 'dataInicio',
    headerName: 'Data de início',
    width: 150,
    renderCell: (params) => {
      const date = new Date(params.value);
      return date.toLocaleDateString('pt-BR');
    }
  },
  {
    field: 'dataFim',
    headerName: 'Data de fim',
    width: 150,
    renderCell: (params) => {
      const date = new Date(params.value);
      return date.toLocaleDateString('pt-BR');
    }
  },
];

function Calendario() {
  const [modalAberto, setModalAberto] = useState(false);

  const [anoSemestre, setAnoSemestre] = React.useState('2023/2');
  const [calendarios, setCalendarios] = useState([]);

  const navigate = useNavigate(); // Inicialize useNavigate

  const handleEditarClick = () => {
    // Em um cenário real, você passaria o ID do calendário selecionado
    navigate('/calendario/editar');
  };

  // NOVA FUNÇÃO: Lida com o clique no botão "Criar" para navegar para a tela de cadastro
  const handleCriarClick = () => {
    navigate('/calendario/cadastrar');
  };

  // Buscar todos os calendarios
  // React.useEffect(() => {
  //   axios.get('http://localhost:8080/calendarios')
  //     .then(response => {
  //       console.log("Dados recebidos:", response.data);
  //       setCalendarios(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Erro ao buscar dados:', error);
  //     });
  // }, []);

  const handleChange = (event) => {
    const valor = event.target.value;
    setAnoSemestre(valor);

    // Chama a API com o valor escolhido (transformando para o formato com ponto)
    const valorFormatado = valor.replace('/', '.');

    axios.get(`http://localhost:8080/calendarios/ano-semestre/${valorFormatado}`)
      .then(response => {
        setCalendarios(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar calendários:', error);
      });
  };

  return (
    
    <Box sx={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      {/* Barra superior com logo */}
      <Toolbar>
        <Box display="flex" alignItems="center" gap={3}>
          <DehazeIcon fontSize="medium" />
          <Typography variant="h3" component="div">
            SOCC
          </Typography>
        </Box>
      </Toolbar>

      {/* Corpo da página com Sidebar e conteúdo */}
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Box className="sidebar">
          <ul className="sidebar-menu">
            <li><Home fontSize="medium" /> <span>Página Inicial</span></li>
            <li className="ativo"><Event fontSize="medium" /> <span>Calendário</span></li>
          </ul>
        </Box>

        {/* Conteúdo principal */}
        <Box flexGrow={1} p={3} sx={{ backgroundColor: '#d3d3d3' }}>
          <Box className="caixa">
            <Typography variant="h5" gutterBottom>Calendário</Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <FormControl size="small" sx={{ minWidth: 180 }}>
                <InputLabel id="semestre-label">Ano/Semestre</InputLabel>
                <Select
                  labelId="semestre-label"
                  value={anoSemestre}
                  label="Ano/Semestre"
                  onChange={handleChange}
                >
                  <MenuItem value="2019/1">2019/1</MenuItem>
                  <MenuItem value="2019/2">2019/2</MenuItem>

                  <MenuItem value="2020/1">2020/1</MenuItem>
                  <MenuItem value="2020/2">2020/2</MenuItem>

                  <MenuItem value="2021/1">2021/1</MenuItem>
                  <MenuItem value="2021/2">2021/2</MenuItem>

                  <MenuItem value="2022/1">2022/1</MenuItem>
                  <MenuItem value="2022/2">2022/2</MenuItem>

                  <MenuItem value="2023/1">2023/1</MenuItem>
                  <MenuItem value="2023/2">2023/2</MenuItem>

                  <MenuItem value="2024/1">2024/1</MenuItem>
                  <MenuItem value="2024/2">2024/2</MenuItem>

                  <MenuItem value="2025/1">2025/1</MenuItem>
                  <MenuItem value="2025/2">2025/2</MenuItem>
                </Select>
              </FormControl>

              <Box display="flex" gap={1}>
                <Button variant="contained" sx={{ backgroundColor: '#004c6d' }} onClick={handleCriarClick} >Criar</Button>
                <Button variant="contained" sx={{ backgroundColor: '#76c7e0' }} onClick={handleEditarClick} >Editar</Button>
                <Button variant="contained" sx={{ backgroundColor: '#d84315' }} onClick={() => setModalAberto(true)}>Excluir</Button>
              </Box>
            </Box>

            {/* DataGrid */}
            <Box height={500}>
              <DataGrid
                rows={calendarios}
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
