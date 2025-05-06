package com.fullstack.projeto;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "calendarios")
public class Calendario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nome;

    @Column(name = "data_inicio")
    private LocalDate dataInicio;

    @Column(name = "data_fim")
    private LocalDate dataFim;

    @Column(name = "ano_semestre")
    private LocalDate anoSemestre;

    @Enumerated(EnumType.STRING)
    private Tipos tipo;
}
