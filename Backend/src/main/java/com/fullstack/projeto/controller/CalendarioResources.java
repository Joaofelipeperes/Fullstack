package com.fullstack.projeto.controller;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.projeto.model.Calendario;
import com.fullstack.projeto.services.CalendarioService;

@RestController
@RequestMapping("/calendarios")
public class CalendarioResources {

    @Autowired
    private CalendarioService calendarioService;

    @GetMapping
    public List<Calendario> listarTodos() {
        return calendarioService.listarTodos();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Calendario> buscarPorId(@PathVariable Long id) {
        Optional<Calendario> calendario = calendarioService.buscarPorId(id);
        return calendario.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/ano-semestre/{anoSemestre}")
    public ResponseEntity<List<Calendario>> getPorAnoSemestre(@PathVariable String anoSemestre) {
        List<Calendario> resultados = calendarioService.findByAnoSemestre(anoSemestre);
        return ResponseEntity.ok(resultados);
    }

    @PostMapping
    public Calendario criar(@RequestBody Calendario calendario) {
        return calendarioService.criar(calendario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Calendario> atualizar(@PathVariable Long id, @RequestBody Calendario calendarioAtualizado) {
        Optional<Calendario> atualizado = calendarioService.atualizar(id, calendarioAtualizado);
        return atualizado.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        boolean deletado = calendarioService.deletar(id);
        if (deletado) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome to Spring Boot";
    }
}
