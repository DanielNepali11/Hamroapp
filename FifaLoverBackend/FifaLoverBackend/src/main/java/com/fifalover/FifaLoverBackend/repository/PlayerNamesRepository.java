package com.fifalover.FifaLoverBackend.repository;

import com.fifalover.FifaLoverBackend.model.PlayerNames;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerNamesRepository extends JpaRepository<PlayerNames, Integer> {
    PlayerNames findByName(String playerName);
}
