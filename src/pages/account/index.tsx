import { useEffect, useState } from "react";
import { useThemeApp } from "../../hooks/theme-app";
import { useAuth } from "../../hooks/use-auth";
import { ContainerPage } from "../../layout/styles";
import { useNavigate } from "react-router-dom";

export function Account(){
    const themeApp = useThemeApp();
    const auth = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        async function init(){
            await auth.verifyAuth();
        }

        init();
    },[])

    return (
        <ContainerPage
            backGroudColorTo={themeApp.color.pink}
            backGroudColorFrom={themeApp.color.gray}
        >
            <p>Account</p>
        </ContainerPage>
    )
}