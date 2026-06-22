import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await fetch('/api/users', {
          signal: controller.signal
        });

        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        setUsers(data);
      } catch (err: any) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {users.map((user: { id: number; name: string }) => (
        <p key={user?.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default Users;