import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./signin.scss";

export const Signin = () => {
  return (
    <div className="signin__modalWrapper">
      <div className="signin__modal">
        <div className="signin">
          <div className="signin__form">
            <h2 className="signin__title">Авторизация</h2>
            <div className="signin__inputBox">
              <div className="signin__input">
                <Input name="email" type="text" placeholder="Введите email" />
              </div>
              <div className="signin__input">
                <Input
                  name="password"
                  type="text"
                  placeholder="Введите пароль"
                />
              </div>
            </div>
          </div>
          <div className="signin__btnBox">
            <Button title="Войти" />
          </div>
        </div>
      </div>
    </div>
  );
};
