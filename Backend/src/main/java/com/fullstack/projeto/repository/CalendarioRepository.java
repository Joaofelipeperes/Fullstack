package com.fullstack.projeto.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.projeto.model.Calendario;

public interface CalendarioRepository extends JpaRepository<Calendario, Long> {
    List<Calendario> findAllByAnoSemestre(String anoSemestre);;
}