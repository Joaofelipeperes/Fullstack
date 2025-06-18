package com.fullstack.projeto.controller;
import com.fullstack.projeto.model.Calendario;
import com.fullstack.projeto.services.CalendarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

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
