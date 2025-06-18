package com.fullstack.projeto.repository;

import com.fullstack.projeto.model.*;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CalendarioRepository extends JpaRepository<Calendario, Long> {
}