const Login = (e) => {
  return (
    <div>
      <div className="login_header">
        <h2>Short Link Squad</h2>
      </div>
      <form className="login form">
        <label for="user_name">Username: </label>
        <br />
        <input type="text" id="user_name" placeholder="Enter name"></input>
        <br />
        <br />

        <label for="user_name">Username: </label>
        <br />
        <input type="email" id="user_email" placeholder="Enter email"></input>
        <br />
        <br />

        <label for="user_name">Username: </label>
        <br />
        <input
          type="password"
          id="login_pwd"
          placeholder="Enter password"
        ></input>
        <br />
        <br />
        <input type="button" value="login"></input>
      </form>
    </div>
  );
};

export default Login;
