import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Typography,
  AppBar,
  Toolbar,
  TextField, // Usaremos TextField para os campos de data e texto
  IconButton, // Para o ícone de calendário
  Select, // Para o Ano/Semestre
  MenuItem, // Para as opções do Select
} from '@mui/material';
import { Home, Event } from '@mui/icons-material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'; // Ícone de calendário

// Importações para o DatePicker
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment'; // Importe moment para manipular datas

import './style.css'; // Mantenha seu arquivo de estilos CSS
import { Navigate, useNavigate } from 'react-router-dom';

// Dados de exemplo para preencher o formulário
// Em um cenário real, esses dados viriam de uma requisição a uma API
const dadosCalendarioParaEdicao = {
  anoSemestre: "2023/1",
  semestreLetivoInicio: "25/09/2023",
  semestreLetivoFim: "23/12/2023",
  // ... continue com todos os outros itens conforme a imagem
  matrizDemandaCursosInicio: "28/08/2023",
  matrizDemandaCursosFim: "02/09/2023",
  matrizDemandaServicosInicio: "28/08/2023",
  matrizDemandaServicosFim: "02/09/2023",
  matrizDemandaGlobalInicio: "28/08/2023",
  matrizDemandaGlobalFim: "02/09/2023",
  matrizOfertaCursosInicio: "03/09/2023",
  matrizOfertaCursosFim: "06/09/2023",
  ajustesMatrizOfertaCursosInicio: "07/09/2023",
  ajustesMatrizOfertaCursosFim: "09/09/2023",
  matrizOfertaServicosInicio: "03/09/2023",
  matrizOfertaServicosFim: "06/09/2023",
  ajustesMatrizOfertaServicosInicio: "07/09/2023",
  ajustesMatrizOfertaServicosFim: "09/09/2023",
  matrizOfertaGlobalInicio: "03/09/2023",
  matrizOfertaGlobalFim: "08/09/2023",
  manifestacaoIntencaoInicio: "11/09/2023",
  manifestacaoIntencaoFim: "12/09/2023",
  resolucaoAnomaliasInicio: "13/09/2023",
  resolucaoAnomaliasFim: "14/09/2023",
  consolidacaoMatrizDemandaGlobalInicio: "15/09/2023",
  consolidacaoMatrizDemandaGlobalFim: "16/09/2023",
  ofertaTurmaSIGAAInicio: "17/09/2023",
  ofertaTurmaSIGAAFim: "17/09/2023",
};

function EditarCalendario() {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();

  // Efeito para carregar os dados iniciais quando o componente monta
  useEffect(() => {
    // Aqui, em um cenário real, você faria uma requisição para buscar os dados
    // do calendário a ser editado. Por enquanto, usamos os dados de exemplo.
    const initialData = {};
    for (const key in dadosCalendarioParaEdicao) {
      // Converte as strings de data para objetos moment para o DatePicker
      if (key.endsWith('Inicio') || key.endsWith('Fim')) {
        initialData[key] = dadosCalendarioParaEdicao[key] ? moment(dadosCalendarioParaEdicao[key], "DD/MM/YYYY") : null;
      } else {
        initialData[key] = dadosCalendarioParaEdicao[key];
      }
    }
    setFormData(initialData);
  }, []);

  // Função para lidar com a mudança nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função para lidar com a mudança nas datas do DatePicker
  const handleDateChange = (name, date) => {
    setFormData(prev => ({ ...prev, [name]: date }));
  };

  // Função para lidar com o clique no botão "Editar"
  const handleEditar = () => {
    // Em um cenário real, você enviaria esses dados para sua API
    const dadosParaEnviar = {};
    for (const key in formData) {
      if (key.endsWith('Inicio') || key.endsWith('Fim')) {
        // Formata o objeto moment de volta para string "DD/MM/YYYY" antes de enviar
        dadosParaEnviar[key] = formData[key] ? formData[key].format("DD/MM/YYYY") : null;
      } else {
        dadosParaEnviar[key] = formData[key];
      }
    }
    console.log("Dados a serem editados:", dadosParaEnviar);
    alert("Dados editados (verifique o console para os dados formatados)!");
    navigate('/calendario');
    // Redirecionar de volta para a página do calendário ou mostrar uma mensagem de sucesso
  };

  // Função para lidar com o clique no botão "Cancelar"
  const handleCancelar = () => {
    console.log("Edição cancelada.");
    alert("Edição cancelada!");
    navigate('/calendario'); // Se você estiver usando react-router-dom
  };

  // Helper para renderizar um campo de data
  const renderDateField = (label, startName, endName) => (
    <Box key={startName} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="body1" sx={{ flexShrink: 0, minWidth: '200px' }}>{label}</Typography>
      <Box display="flex" gap={1} flexGrow={1} alignItems="center">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Início"
            value={formData[startName]}
            onChange={(newValue) => handleDateChange(startName, newValue)}
            format="DD/MM/YYYY"
            slotProps={{ textField: { size: 'small', fullWidth: true } }}
          />
        </LocalizationProvider>
        <Typography variant="body1">-</Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Fim"
            value={formData[endName]}
            onChange={(newValue) => handleDateChange(endName, newValue)}
            format="DD/MM/YYYY"
            slotProps={{ textField: { size: 'small', fullWidth: true } }}
          />
        </LocalizationProvider>
        <IconButton size="small" color="primary">
          <CalendarTodayIcon />
        </IconButton>
      </Box>
    </Box>
  );

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
          <Box className="caixa" sx={{ p: 3 }}> {/* Adicione padding à caixa para o formulário */}
            <Typography variant="h5" gutterBottom>Editar calendário</Typography>

            {/* Campos Ano/Semestre e Semestre Letivo */}
            <Box display="flex" justifyContent="space-between" mb={3}>
              <FormControl size="small" sx={{ minWidth: 200, mr: 2 }}>
                <InputLabel id="ano-semestre-label">Ano/Semestre</InputLabel>
                <Select
                  labelId="ano-semestre-label"
                  name="anoSemestre"
                  value={formData.anoSemestre || ''}
                  onChange={handleChange}
                  label="Ano/Semestre"
                >
                  <MenuItem value="2023/1">2023/1</MenuItem>
                  <MenuItem value="2023/2">2023/2</MenuItem>
                  <MenuItem value="2024/1">2024/1</MenuItem>
                </Select>
              </FormControl>

              {renderDateField("Semestre Letivo", "semestreLetivoInicio", "semestreLetivoFim")}
            </Box>

            {/* Seções de Matriz de Demanda */}
            {renderDateField("Matriz de Demanda de Curso", "matrizDemandaCursosInicio", "matrizDemandaCursosFim")}
            {renderDateField("Matriz de Demanda Global", "matrizDemandaGlobalInicio", "matrizDemandaGlobalFim")}

            {/* Seções de Matriz de Oferta */}
            {renderDateField("Matriz de Oferta de Cursos", "matrizOfertaCursosInicio", "matrizOfertaCursosFim")}
            {renderDateField("Ajustes na Matriz de Oferta de Cursos", "ajustesMatrizOfertaCursosInicio", "ajustesMatrizOfertaCursosFim")}
            {renderDateField("Matriz de Oferta de Serviços", "matrizOfertaServicosInicio", "matrizOfertaServicosFim")}
            {renderDateField("Ajustes na Matriz de Oferta de Serviços", "ajustesMatrizOfertaServicosInicio", "ajustesMatrizOfertaServicosFim")}
            {renderDateField("Matriz de Oferta Global", "matrizOfertaGlobalInicio", "matrizOfertaGlobalFim")}

            {/* Outros itens do calendário */}
            {renderDateField("Manifestação de Intenção de Ministrar Componente Curricular", "manifestacaoIntencaoInicio", "manifestacaoIntencaoFim")}
            {renderDateField("Resolução de Anomalias nas Ofertas de Componentes Curriculares", "resolucaoAnomaliasInicio", "resolucaoAnomaliasFim")}
            {renderDateField("Consolidação da Matriz de Demanda Global da Unidade Acadêmica", "consolidacaoMatrizDemandaGlobalInicio", "consolidacaoMatrizDemandaGlobalFim")}
            {renderDateField("Oferta de Turma no SIGAA", "ofertaTurmaSIGAAInicio", "ofertaTurmaSIGAAFim")}


            {/* Botões de Ação */}
            <Box display="flex" justifyContent="flex-end" gap={2} mt={4}>
              <Button variant="outlined" sx={{ color: '#004c6d', borderColor: '#004c6d' }} onClick={handleCancelar}>
                Cancelar
              </Button>
              <Button variant="contained" sx={{ backgroundColor: '#004c6d' }} onClick={handleEditar}>
                Editar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EditarCalendario;