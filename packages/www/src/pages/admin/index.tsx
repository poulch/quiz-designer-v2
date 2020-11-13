import React from 'react';

const Admin: React.FC = () => {
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    fetch('http://localhost:4004/auth/user').then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>
      Admin Page is Logged:
      {isLogged}
    </div>
  );
};

export default Admin;
