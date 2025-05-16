// import { useEffect } from "react";
import { AppRoutes } from "./AppRoutes";
// import { useAppDispatch } from "./store/store";
// import { setIsAuth, setUser } from "./store/features/userSlice";
// import { checkToken } from "./api/authApi";

function App() {
  // const dispatch = useAppDispatch();
  //   useEffect(() => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       // Проверяем токен через API
  //       console.log(token);
  //       checkToken(token)
  //       .then((res) => {
  //         console.log(res);
  //         dispatch(setIsAuth(true));
  //         dispatch(setUser(res.user));
  //       })
  //       .catch(() => {
  //         localStorage.removeItem("token")
  //       })
  //     }
  //   }, [dispatch]);
  return <AppRoutes />;
}

export default App;
