import Header from "../components/Header";

export default function signup() {
  return (
    <div>
      <Header />
      <div>
        <div>Sign up</div>
        <form>
          <label>
            First, choose a unique username
            <input type="text" name="name"></input>
          </label>
          <label>
            Enter a password (must contain min. 6 characters)
            <input type="text" name="password"></input>
          </label>
          <label>
            Enter your email
            <input type="text" name="email"></input>
          </label>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    </div>
  );
}
