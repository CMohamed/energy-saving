import React, { lazy, Suspense, useState } from "react";
// @ts-ignore
import { Redirect, Route, Switch } from 'react-router';

export const PATHS = {
    HOME: 'home',
    REGISTER: 'register',
    LOGIN: 'login',
    BAD_REQUEST: 'bad-request',
};

const Home = null;

const Routes: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <Switch>
                <Route exact path={PATHS.HOME} component={Home} />
                <Redirect to={PATHS.BAD_REQUEST} />
            </Switch>
        </Suspense>
    )
}

