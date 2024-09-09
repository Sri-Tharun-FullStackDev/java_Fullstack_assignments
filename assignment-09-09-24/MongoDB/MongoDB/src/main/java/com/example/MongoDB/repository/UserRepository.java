package com.example.MongoDB.repository;




import com.example.MongoDB.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
