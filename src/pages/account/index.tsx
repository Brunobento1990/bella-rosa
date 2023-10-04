import { useEffect, useState } from "react";
import { useThemeApp } from "../../hooks/theme-app";
import { useAuth } from "../../hooks/use-auth";
import { ContainerPage } from "../../layout/styles";
import { useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/use-api";

export function Account() {
  const themeApp = useThemeApp();
  const { get } = useApi();

  useEffect(() => {
    async function init() {
        const client = await get('get-client');
        console.log(client)
    }
    init();
  }, []);

  return (
    <ContainerPage
      backGroudColorTo={themeApp.color.pink}
      backGroudColorFrom={themeApp.color.gray}
    >
      <p>Account</p>
    </ContainerPage>
  );
}
