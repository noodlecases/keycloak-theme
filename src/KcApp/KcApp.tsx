import "./KcApp.css";
import type { KcContext } from "./kcContext";
import KcAppBase, { defaultKcProps, useI18n } from "keycloakify";
import {useEffect} from "react";

export type Props = {
    kcContext: KcContext;
};

export default function KcApp(props: Props) {
    useEffect(() => {
        document.title = "NoodleID";
    }, []);

    const { kcContext } = props;

    const i18n = useI18n({
        kcContext,
        // NOTE: Here you can override the default i18n messages
        // or define new ones that, for example, you would have
        // defined in the Keycloak admin UI for UserProfile
        // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
        "extraMessages": {
            // "en": {
            //     "foo": "foo in English",
            //     // Here we overwrite the default english value for the message "doForgotPassword"
            //     // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
            //     "doForgotPassword": "I forgot my password"
            // },
            // "fr": {
            //     /* spell-checker: disable */
            //     "foo": "foo en Francais",
            //     "doForgotPassword": "J'ai oublié mon mot de passe"
            //     /* spell-checker: enable */
            // },
        },
    });

    //NOTE: Locale not yet downloaded
    if (i18n === null) {
        return null;
    }

    return (
        <KcAppBase
            kcContext={kcContext}
            i18n={i18n}
            {...{
                ...defaultKcProps,
                // NOTE: The classes are defined in ./KcApp.css
                "kcHeaderWrapperClass": "noodlecases-logo",
            }}
            //Uncomment the following line if you want to prevent the default .css to be downloaded
            //doFetchDefaultThemeResources={false} 
        />
    );
}
