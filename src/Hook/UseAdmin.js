import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(`https://resale-planet-server.vercel.app/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setIsloading(false);
        });
    }
  }, [email]);
  return [isAdmin, isLoading];
};
export default useAdmin;
