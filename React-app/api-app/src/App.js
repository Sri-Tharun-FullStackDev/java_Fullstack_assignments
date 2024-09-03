import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // State variables for each type of data
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  // Loading and error state for each type of data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch all data
    const fetchData = async () => {
      try {
        const [postsResponse, commentsResponse, photosResponse, albumsResponse, todosResponse, usersResponse] = await Promise.all([
          axios.get('https://jsonplaceholder.typicode.com/posts'),
          axios.get('https://jsonplaceholder.typicode.com/comments'),
          axios.get('https://jsonplaceholder.typicode.com/photos'),
          axios.get('https://jsonplaceholder.typicode.com/albums'),
          axios.get('https://jsonplaceholder.typicode.com/todos'),
          axios.get('https://jsonplaceholder.typicode.com/users')
        ]);

        setPosts(postsResponse.data);
        setComments(commentsResponse.data);
        setPhotos(photosResponse.data);
        setAlbums(albumsResponse.data);
        setTodos(todosResponse.data);
        setUsers(usersResponse.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <h1>Comments</h1>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>

      <h1>Photos</h1>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <h3>{photo.title}</h3>
            <img src={photo.url} alt={photo.title} style={{ width: '100px', height: '100px' }} />
          </li>
        ))}
      </ul>

      <h1>Albums</h1>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            <h3>{album.title}</h3>
          </li>
        ))}
      </ul>

      <h1>Todos</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
          </li>
        ))}
      </ul>

      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
