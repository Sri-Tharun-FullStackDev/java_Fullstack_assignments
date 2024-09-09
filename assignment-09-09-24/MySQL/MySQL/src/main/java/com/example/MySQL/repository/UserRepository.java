package com.example.MySQL.repository;


import com.example.MySQL.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}

