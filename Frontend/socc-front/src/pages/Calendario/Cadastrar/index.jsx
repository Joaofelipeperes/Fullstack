import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Typography,
  AppBar,
  Toolbar,
  TextField, 
  IconButton,
  Select,
  MenuItem,
} from '@mui/material';
import { Home, Event } from '@mui/icons-material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import './style.css';  
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CadastrarCalendario() {
  const [formData, setFormData] = useState({
    anoSemestre: "",
    semestreLetivoInicio: null,
    semestreLetivoFim: null,
    matrizDemandaCursosInicio: null,
    matrizDemandaCursosFim: null,
    matrizDemandaServicosInicio: null,
    matrizDemandaServicosFim: null,
    matrizDemandaGlobalInicio: null,
    matrizDemandaGlobalFim: null,
    matrizOfertaCursosInicio: null,
    matrizOfertaCursosFim: null,
    ajustesMatrizOfertaCursosInicio: null,
    ajustesMatrizOfertaCursosFim: null,
    matrizOfertaServicosInicio: null,
    matrizOfertaServicosFim: null,
    ajustesMatrizOfertaServicosInicio: null,
    ajustesMatrizOfertaServicosFim: null,
    matrizOfertaGlobalInicio: null,
    matrizOfertaGlobalFim: null,
    manifestacaoIntencaoInicio: null,
    manifestacaoIntencaoFim: null,
    resolucaoAnomaliasInicio: null,
    resolucaoAnomaliasFim: null,
    consolidacaoMatrizDemandaGlobalInicio: null,
    consolidacaoMatrizDemandaGlobalFim: null,
    ofertaTurmaSIGAAInicio: null,
    ofertaTurmaSIGAAFim: null,
  });

  const navigate = useNavigate();

  // Função para lidar com a mudança nos campos de texto (como Ano/Semestre)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Função para lidar com a mudança nas datas do DatePicker
  const handleDateChange = (name, date) => {
    setFormData(prev => ({ ...prev, [name]: date }));
  };

  const handleCadastrar = () => {
    const { anoSemestre } = formData;

    console.log("Ano/Semestre selecionado:", anoSemestre);

    // Mapeia todos os blocos com nome + tipo + datas
    const blocos = [
      {
        nome: 'Semestre Letivo',
        tipo: 'SEMESTRE_LETIVO',
        inicio: formData.semestreLetivoInicio,
        fim: formData.semestreLetivoFim
      },
      {
        nome: 'Matriz de Demanda de Cursos',
        tipo: 'MATRIZ_DE_DEMANDA_DE_CURSOS',
        inicio: formData.matrizDemandaCursosInicio,
        fim: formData.matrizDemandaCursosFim
      },
      {
        nome: 'Matriz de Demanda de Serviços',
        tipo: 'MATRIZ_DE_DEMANDA_DE_SERVICOS',
        inicio: formData.matrizDemandaServicosInicio,
        fim: formData.matrizDemandaServicosFim
      },
      {
        nome: 'Matriz de Demanda Global',
        tipo: 'MATRIZ_DE_DEMANDA_DE_GLOBAL',
        inicio: formData.matrizDemandaGlobalInicio,
        fim: formData.matrizDemandaGlobalFim
      },
      {
        nome: 'Matriz de Oferta de Cursos',
        tipo: 'MATRIZ_DE_OFERTAS_DE_CURSOS',
        inicio: formData.matrizOfertaCursosInicio,
        fim: formData.matrizOfertaCursosFim
      },
      {
        nome: 'Ajustes na Matriz de Oferta de Cursos',
        tipo: 'AJUSTES_DA_MATRIZ_DE_OFERTAS_DE_CURSOS',
        inicio: formData.ajustesMatrizOfertaCursosInicio,
        fim: formData.ajustesMatrizOfertaCursosFim
      },
      {
        nome: 'Matriz de Oferta de Serviços',
        tipo: 'MATRIZ_DE_OFERTA_DE_SERVICOS',
        inicio: formData.matrizOfertaServicosInicio,
        fim: formData.matrizOfertaServicosFim
      },
      {
        nome: 'Ajustes na Matriz de Oferta de Serviços',
        tipo: 'AJUSTES_NA_MATRIZ_DE_OFERTAS_DE_SERVICOS',
        inicio: formData.ajustesMatrizOfertaServicosInicio,
        fim: formData.ajustesMatrizOfertaServicosFim
      },
      {
        nome: 'Matriz de Oferta Global',
        tipo: 'MATRIZ_DE_OFERTA_GLOBAL',
        inicio: formData.matrizOfertaGlobalInicio,
        fim: formData.matrizOfertaGlobalFim
      },
      {
        nome: 'Manifestação de Intenção de Ministrar Componente Curricular',
        tipo: 'MANIFESTACAO_DE_INTENCAO_DE_MINISTRAR_COMPONENTE_CURRICULAR',
        inicio: formData.manifestacaoIntencaoInicio,
        fim: formData.manifestacaoIntencaoFim
      },
      {
        nome: 'Resolução de Anomalias nas Ofertas de Componentes Curriculares',
        tipo: 'RESOLUCAO_DE_ANOMALIAS_NAS_OFERTAS_DE_COMPONENTES_CURRICULARES',
        inicio: formData.resolucaoAnomaliasInicio,
        fim: formData.resolucaoAnomaliasFim
      },
      {
        nome: 'Consolidação da Matriz de Demanda Global da Unidade Acadêmica',
        tipo: 'CONSOLIDACAO_DA_MATRIZ_DE_DEMANDA_GLOBAL_DA_UNIDADE_ACADEMICA',
        inicio: formData.consolidacaoMatrizDemandaGlobalInicio,
        fim: formData.consolidacaoMatrizDemandaGlobalFim
      },
      {
        nome: 'Oferta de Turma no SIGAA',
        tipo: 'OFERTAS_DE_TURMA_NO_SIGAA',
        inicio: formData.ofertaTurmaSIGAAInicio,
        fim: formData.ofertaTurmaSIGAAFim
      }
    ];

    const blocosPreenchidos = blocos.filter(b => b.inicio && b.fim);

    Promise.all(
      blocosPreenchidos.map((bloco) =>
        axios.post('http://localhost:8080/calendarios', {
          nome: bloco.nome,
          descricao: `Cadastro de ${bloco.nome}`,
          dataInicio: bloco.inicio.format('YYYY-MM-DD'),
          dataFim: bloco.fim.format('YYYY-MM-DD'),
          anoSemestre: anoSemestre.replace('/', '.'),
          tipo: bloco.tipo
        })
      )
    )
      .then(() => {
        alert('Todos os calendários foram cadastrados com sucesso!');
        navigate('/calendario'); 
      })
      .catch((error) => {
        console.error('Erro ao cadastrar:', error);
        alert('Erro ao cadastrar. Veja o console.');
      });
  };

  // Função para lidar com o clique no botão "Cancelar"
  const handleCancelar = () => {
    console.log("Cadastro cancelado.");
    alert("Cadastro cancelado!");
    navigate('/calendario'); 
  };

  const renderDateField = (label, startName, endName) => (
    <Box key={startName} display="flex" justifyContent="space-between" alignItems="center" mb={2}>
      <Typography variant="body1" sx={{ flexShrink: 0, minWidth: '200px' }}>{label}</Typography>
      <Box display="flex" gap={1} flexGrow={1} alignItems="center">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Data de início" // Mudança do label
            value={formData[startName]}
            onChange={(newValue) => handleDateChange(startName, newValue)}
            format="DD/MM/YYYY"
            slotProps={{ textField: { size: 'small', fullWidth: true } }}
          />
        </LocalizationProvider>
        <Typography variant="body1">-</Typography>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Data de fim" // Mudança do label
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
          <Box className="caixa" sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>Cadastrar calendário</Typography>

            {/* Campo Ano/Semestre - agora como TextField */}
            <Box display="flex" justifyContent="space-between" mb={3}>
              <FormControl size="small" sx={{ minWidth: 200, mr: 2 }}>
                <InputLabel id="semestre-label">Ano/Semestre</InputLabel>
                <Select
                  labelId="semestre-label"
                  label="Ano/Semestre"
                  name="anoSemestre"
                  value={formData.anoSemestre}
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

              {renderDateField("Semestre Letivo", "semestreLetivoInicio", "semestreLetivoFim")}
            </Box>

            {/* Seções de Matriz de Demanda */}
            {renderDateField("Matriz de Demanda de Cursos", "matrizDemandaCursosInicio", "matrizDemandaCursosFim")}
            {renderDateField("Matriz de Demanda de Serviços", "matrizDemandaServicosInicio", "matrizDemandaServicosFim")}
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
              <Button variant="contained" sx={{ backgroundColor: '#004c6d' }} onClick={handleCadastrar}>
                Cadastrar
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default CadastrarCalendario;