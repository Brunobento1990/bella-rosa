import FavoriteIcon from "@mui/icons-material/Favorite";
import { useThemeApp } from "../../hooks/theme-app";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import CategoryIcon from '@mui/icons-material/Category';
import * as S from "./styles";

const lis = [
  {
    icon: <FavoriteIcon />,
    title: "Favoritos",
    path: "/favorites",
    color: '#fb4343'
  },
  {
    icon: <HomeIcon />,
    title: "Home",
    path: "/",
    color: 'rgb(241, 99, 210)'
  },
  {
    icon: <CategoryIcon />,
    title: "Categorias",
    path: "/categories",
    color: '#5050b4'
  },
];

export default function NavBottomNavigation() {

  const themeApp = useThemeApp();
  const navigate = useNavigate();
  const path = window.location.pathname;

  function handleNavigate(color: string, path: string){
    themeApp.handleColor(color)
    navigate(path)
  }

  return (
    <S.ContainerMain>
      <S.Nav>
        {lis.map((item, index) => (
          <S.NavLi key={index}>
            <S.ContainerIcon
              backGroud={
                item.path === path ? themeApp.color : "transparent"
              }
              top={item.path === path ? "-33px" : "0"}
              borderRadius={item.path === path ? "50%" : "0"}
              border={item.path === path ? "5px solid #f3f2f2" : "0"}
              onClick={() => handleNavigate(item.color,item.path)}
            >
              {item.icon}
            </S.ContainerIcon>
            <S.Text display={item.path === path ? "block" : "none"} color={themeApp.color}>
              {item.title}
            </S.Text>
          </S.NavLi>
        ))}
      </S.Nav>
    </S.ContainerMain>
  );
}