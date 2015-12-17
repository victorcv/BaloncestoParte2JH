package com.xavipandis.liga.repository;

import com.xavipandis.liga.domain.Equipo;

import com.xavipandis.liga.domain.Jugador;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

import java.util.List;

/**
 * Spring Data JPA repository for the Equipo entity.
 */
public interface EquipoRepository extends JpaRepository<Equipo,Long> {

        @Query("SELECT j from Jugador j WHERE j.equipo.id=:id order by j.canastasTotales desc")
        List<Jugador> findByEquipoOrderByCanastasTotales(@Param("id") Long id);
        @Query("SELECT j from Jugador j WHERE j.equipo.id=:id order by j.fechaNacimiento asc")
        List<Jugador> findByEquipoOrderByFechaNacimientoAsc(@Param("id") Long id);
}
