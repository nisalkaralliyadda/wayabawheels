package com.wayaba.wheels.cartapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wayaba.wheels.cartapp.models.BodyPart;


public interface PartsRepository extends JpaRepository<BodyPart, Integer> {
}
