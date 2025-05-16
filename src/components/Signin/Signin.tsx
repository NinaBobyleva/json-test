import { useNavigate } from "react-router-dom";
// import { useUser } from "../../context/userContext";
import { useInputChange } from "../../hooks/useInputChanged";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./signin.scss";
import { paths } from "../../paths";
import { useAppDispatch } from "../../store/store";
import { setIsAuth, setUser, User } from "../../store/features/userSlice";
import { authUser } from "../../api/authApi";

export const Signin = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const { getToken } = useUser();
  const email = useInputChange({
    initialValue: "",
    validations: {
      isEmpty: true,
    },
  });
  const password = useInputChange({
    initialValue: "",
    validations: {
      isEmpty: true,
    },
  });

  const handleLogin = () => {
    try {
      authUser({
        email: email.value,
        password: password.value,
      }).then((userData: User) => {
        console.log(userData);
        localStorage.setItem("token", JSON.stringify(userData.token));
        dispatch(setUser(userData));
        dispatch(setIsAuth(true));
        // getToken(userData.token);
        navigate(paths.HOME);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="signin__modalWrapper">
      <div className="signin__modal">
        <div className="signin">
          <div className="signin__form">
            <h2 className="signin__title">Авторизация</h2>
            <div className="signin__inputBox">
              <div className="signin__input">
                <Input
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                  value={email.value}
                  error={email.isDirty && email.isEmpty}
                  name="email"
                  type="text"
                  placeholder="Введите email"
                />
                {email.error && <p className="errorText">{email.error}</p>}
              </div>
              <div className="signin__input">
                <Input
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                  value={password.value}
                  error={password.isDirty && password.isEmpty}
                  name="password"
                  type="text"
                  placeholder="Введите пароль"
                />
                {password.error && (
                  <p className="errorText">{password.error}</p>
                )}
              </div>
            </div>
          </div>
          <div className="signin__btnBox">
            <Button
              onClick={handleLogin}
              disabled={!email.value || !password.value}
              title="Войти"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
