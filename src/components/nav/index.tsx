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

  return (
    <S.ContainerMain>
      <S.Nav>
        {lis.map((item, index) => (
          <S.NavLi key={index}>
            <S.ContainerIcon
              backGroud={
                item.path === path ? themeApp.colors.pink : "transparent"
              }
              top={item.path === path ? "-43px" : "0"}
              borderRadius={item.path === path ? "50%" : "0"}
              border={item.path === path ? "5px solid #f3f2f2" : "0"}
              onClick={() => navigate(item.path)}
            >
              {item.icon}
            </S.ContainerIcon>
            <S.Text display={item.path === path ? "block" : "none"} color={themeApp.colors.pink}>
              {item.title}
            </S.Text>
          </S.NavLi>
        ))}
      </S.Nav>
    </S.ContainerMain>
  );
}

{
  /* <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
            label="Recents"
            icon={<RestoreIcon sx={{color : themeApp.colors.pink}} />} 
            sx={{color : themeApp.colors.pink}}
        />
        <BottomNavigationAction 
            label="Favoritos" 
            sx={{color : themeApp.colors.pink}}
            icon={<FavoriteIcon sx={{color : themeApp.colors.pink}} />} 
        />
        <BottomNavigationAction 
            label="Nearby" 
            icon={<LocationOnIcon sx={{color : themeApp.colors.pink}} />} 
            sx={{color : themeApp.colors.pink}}
        />
      </BottomNavigation>
    </Paper> */
}
