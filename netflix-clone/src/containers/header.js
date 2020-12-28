import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="https://o.remove.bg/downloads/6ed5d4c9-f0ec-4dfc-a940-42b86ee68adc/netflix-logo-removebg-preview.png" alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}