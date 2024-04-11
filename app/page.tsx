import { redirect } from "next/navigation";
import { login, logout } from "./lib";

export default function SignIn() {
  return (
    <div className="body-style"><div className="container">
      <form
        className="form"
        action={async (formdata) => {
          "use server";
          console.log(formdata);
          var success = await login(formdata);
          if (success) {
            redirect("/home");
          } else {
            console.log("login failed");
          }
        }}
      >
        <h1 className="form__title">Welcome back</h1>
        <div className="form__input-group">
          <input className="form__input"  type="email" name="email" id="email" placeholder="Email" />
          <div className="padding"></div>
          <input className="form__input" type="password" name="password" id="password" placeholder="Password"/>
          <div className="padding"></div>
          <input className="form__input" type="submit" name="submit" id="submit" />
        </div>
      </form>

      <form
        action={async (formdata) => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button type="submit">Logout</button>
        <h1>mandre361@west-mec.org and 1234</h1>
      </form>
    </div></div>
    
  );
}
