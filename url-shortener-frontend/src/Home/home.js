const Home = () => {
  const long_url = document.getElementById("long_url_field");
  return (
    <div>
      <form method="post">
        <input
          id="long_url_field"
          type="text"
          placeholder="Enter the long url"
        ></input>
        <br />
        <br />

        <input type="submit" value="Generate"></input>
      </form>
    </div>
  );
};

export default Home;
