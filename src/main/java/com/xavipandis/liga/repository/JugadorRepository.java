package com.xavipandis.liga.repository;

import com.xavipandis.liga.domain.Jugador;

import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Jugador entity.
 */
public interface JugadorRepository extends JpaRepository<Jugador,Long> {

// PARAM PARTE VARIABLE DE UN SELECT
@Query("select j from Jugador j where j.canastasTotales >= :canastasTotales")// : objeto param
List<Jugador> Canastas(@Param("canastasTotales") Integer canastasTotales);//"canastasTotales" es el que comprueba con la query

// Prac2Ej2 HTML
@Query("select j from Jugador j, Equipo eq where j.equipo.id = eq.id and j.canastasTotales >= :consultarCanastasos and j.equipo.id = :consultarEnEquipo")
List<Jugador> CanastasEquipo(@Param("consultarCanastasos") Integer consultarCanastasos, @Param("consultarEnEquipo") Long consultarEnEquipo);
}
