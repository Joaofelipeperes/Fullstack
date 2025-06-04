package com.fullstack.projeto.services;

import com.fullstack.projeto.model.Calendario;
import com.fullstack.projeto.repository.CalendarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CalendarioService {

    @Autowired
    private CalendarioRepository calendarioRepository;

    public List<Calendario> listarTodos() {
        return calendarioRepository.findAll();
    }

    public Optional<Calendario> buscarPorId(Long id) {
        return calendarioRepository.findById(id);
    }

    public Calendario criar(Calendario calendario) {
        return calendarioRepository.save(calendario);
    }

    public Optional<Calendario> atualizar(Long id, Calendario calendarioAtualizado) {
        return calendarioRepository.findById(id).map(calendario -> {
            calendarioAtualizado.setId(id);
            return calendarioRepository.save(calendarioAtualizado);
        });
    }

    public boolean deletar(Long id) {
        if (calendarioRepository.existsById(id)) {
            calendarioRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
