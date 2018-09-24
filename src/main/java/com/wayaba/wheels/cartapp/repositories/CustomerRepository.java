package com.wayaba.wheels.cartapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.wayaba.wheels.cartapp.models.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {

	@Query("SELECT u FROM Customer u WHERE u.username = ?1 and u.password = ?2")
    public List<Customer> isUserExist(String username,String password);
}
