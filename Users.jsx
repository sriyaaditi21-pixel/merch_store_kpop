import { useEffect, useState } from "react";

function Users() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {

    const fetchUsers =
      async () => {

      try {

        const response =
          await fetch(
            "https://dummyjson.com/users"
          );

        if (!response.ok) {
          throw new Error(
            "Failed to fetch users"
          );
        }

        const data =
          await response.json();

        setUsers(data.users);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }
    };

    fetchUsers();

  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div className="api-page">

      <h2>Users</h2>

      {users.map((user) => (

        <div
          className="api-card"
          key={user.id}
        >

          <h3>
            {user.firstName}
            {" "}
            {user.lastName}
          </h3>

          <p>
            {user.email}
          </p>

        </div>

      ))}

    </div>
  );
}

export default Users;