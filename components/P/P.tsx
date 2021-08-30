import styles from './P.module.css';
import {PProps} from "./P.props";
// @ts-ignore
import cn from 'classnames';
import React from "react";

export const P = ({size = 's', children, className, ...props}: PProps): JSX.Element => {
    return <p
        className={cn(styles.p, className, {
            [styles.small]: size === 's',
            [styles.middle]: size === 'm',
            [styles.high]: size === 'h',
        })}
        {...props}
    >
        {children}
    </p>
};