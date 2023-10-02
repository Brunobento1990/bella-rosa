import FavoriteIcon from "@mui/icons-material/Favorite";
import { useThemeApp } from "../../hooks/theme-app";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as S from "./styles";

const lis = [
  {
    icon: <AccountCircleIcon />,
    title: "Conta",
    path: "/account",
    value: "account"
  },
  {
    icon: <FavoriteIcon />,
    title: "Favoritos",
    path: "/favorites",
    value: "favorites"
  },
  {
    icon: <HomeIcon />,
    title: "Home",
    path: "/",
    value: ""
  },
  {
    icon: <CategoryIcon />,
    title: "Categorias",
    path: "/categories",
    value: "categories"
  },
];

export default function NavBottomNavigation() {

  const themeApp = useThemeApp();
  const navigate = useNavigate();
  const path = window.location.pathname.split('/');

  function handleNavigate(path: string){
    navigate(path)
  }

  return (
    <S.ContainerMain>
      <S.Nav>
        {lis.map((item, index) => (
          <S.NavLi key={index}>
            <S.ContainerIcon
              backGroud={item.value === path[1] ? themeApp.color.pink : "tranparent"}
              top={item.value === path[1] ? "-33px" : "0"}
              borderRadius={item.value === path[1] ? "50%" : "0"}
              border={item.value === path[1] ? `5px solid ${themeApp.color.gray}` : "0"}
              onClick={() => handleNavigate(item.path)}
            >
              {item.icon}
            </S.ContainerIcon>
            <S.Text display={item.value === path[1] ? "block" : "none"} color={themeApp.color.pink}>
              {item.title}
            </S.Text>
          </S.NavLi>
        ))}
      </S.Nav>
    </S.ContainerMain>
  );
}