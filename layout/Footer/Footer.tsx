import styles from './Footer.module.css';
import {FooterProps} from "./Footer.props";
import { format } from 'date-fns';
// @ts-ignore
import cn from 'classnames';
import React from "react";

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, styles.footer)} {...props}>
            <div>
                MyTopBestAmazing (c) {format(new Date(), 'yyyy')} - All right
            </div>
            <a href="#/" target="_blank">Пользовательное соглашение</a>
            <a href="#/" target="_blank">Политика котфиденциальности</a>
        </footer>
    )
};