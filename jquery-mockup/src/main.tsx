import 'bootstrap'
import './main.scss';

import * as React from "react";
import * as ReactDom from "react-dom";

import { Header } from "./_header.tsx";

ReactDom.render(
    <Header />,
    document.getElementById('header-placeholder')
);