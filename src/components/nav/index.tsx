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
  },
  {
    icon: <FavoriteIcon />,
    title: "Favoritos",
    path: "/favorites",
  },
  {
    icon: <HomeIcon />,
    title: "Home",
    path: "/",
  },
  {
    icon: <CategoryIcon />,
    title: "Categorias",
    path: "/categories",
  },
];

export default function NavBottomNavigation() {

  const themeApp = useThemeApp();
  const navigate = useNavigate();
  const path = window.location.pathname;

  function handleNavigate(path: string){
    navigate(path)
  }

  return (
    <S.ContainerMain>
      <S.Nav>
        {lis.map((item, index) => (
          <S.NavLi key={index}>
            <S.ContainerIcon
              backGroud={item.path === path ? themeApp.color.pink : "tranparent"}
              top={item.path === path ? "-33px" : "0"}
              borderRadius={item.path === path ? "50%" : "0"}
              border={item.path === path ? `5px solid ${themeApp.color.gray}` : "0"}
              onClick={() => handleNavigate(item.path)}
            >
              {item.icon}
            </S.ContainerIcon>
            <S.Text display={item.path === path ? "block" : "none"} color={themeApp.color.pink}>
              {item.title}
            </S.Text>
          </S.NavLi>
        ))}
      </S.Nav>
    </S.ContainerMain>
  );
}