import React, { useRef } from "react";
import { useFetch } from "./customHooks/useFetch";

const UserList = () => {
  /*To prevent from fetching data on unmounted component, we can use another Hook,
   useRef. The purpose is that it should run code within useEffect only if the component 
   is mounted to the view. Otherwise, you might warning:
  */
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    isComponentMounted,
    []
  );

  return (
    <div>
      {loading ? (
        <div>Loading data...</div>
      ) : (
        data.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;