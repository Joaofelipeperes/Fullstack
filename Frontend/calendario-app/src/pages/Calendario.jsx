import React, { useState } from 'react';
import './Calendario.css';

const dadosCalendario = [
  { nome: "Semestre Letivo", inicio: "23/12/2023", fim: "23/12/2023" },
  { nome: "Matriz de Demanda de Cursos", inicio: "28/08/2023", fim: "02/09/2023" },
  { nome: "Matriz de Demanda de Serviços", inicio: "28/08/2023", fim: "02/09/2023" },
  { nome: "Matriz de Demanda Global", inicio: "28/08/2023", fim: "02/09/2023" },
  { nome: "Matriz de Oferta de Cursos", inicio: "03/09/2023", fim: "06/09/2023" },
  { nome: "Ajustes na Matriz de Oferta de Cursos", inicio: "07/09/2023", fim: "09/09/2023" },
  { nome: "Matriz de Oferta de Serviços", inicio: "03/09/2023", fim: "06/09/2023" },
  { nome: "Ajustes na Matriz de Oferta de Serviços", inicio: "07/09/2023", fim: "09/09/2023" },
  { nome: "Matriz de Oferta Global", inicio: "03/09/2023", fim: "08/09/2023" },
  { nome: "Manifestação de Intenção de Ministrar Componente Curricular", inicio: "11/09/2023", fim: "12/09/2023" },
  { nome: "Resolução de Anomalias nas Ofertas de Componentes Curriculares", inicio: "13/09/2023", fim: "14/09/2023" },
  { nome: "Consolidação da Matriz de Demanda Global da Unidade Acadêmica", inicio: "15/09/2023", fim: "16/09/2023" },
  { nome: "Oferta de Turma no SIGAA", inicio: "17/09/2023", fim: "17/09/2023" },
];

function Calendario() {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h1 className="logo">SOCC</h1>
        <ul>
          <li>Página Inicial</li>
          <li className="ativo">Calendário</li>
        </ul>
      </aside>

      {/* Conteúdo principal */}
      <div className="conteudo">
        <div className="caixa">
          <h2>Calendário</h2>

          {/* Filtro */}
          <div className="topo">
            <select>
              <option value="2023/2">2023/2</option>
            </select>

            <div className="botoes">
              <button className="criar">Criar</button>
              <button className="editar">Editar</button>
              <button className="excluir" onClick={() => setModalAberto(true)}>Excluir</button>
            </div>
          </div>

          {/* Tabela */}
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Data de início</th>
                <th>Data de fim</th>
              </tr>
            </thead>
            <tbody>
              {dadosCalendario.map((item, index) => (
                <tr key={index}>
                  <td>{item.nome}</td>
                  <td>{item.inicio}</td>
                  <td>{item.fim}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {modalAberto && (
          <div className="modal-bg">
            <div className="modal">
              <p>Deseja deletar o calendário?</p>
              <div className="modal-botoes">
                <button onClick={() => setModalAberto(false)}>CANCELAR</button>
                <button className="confirmar">CONFIRMAR</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Calendario;
