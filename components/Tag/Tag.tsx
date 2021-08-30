import styles from './Tag.module.css';
import {TagProps} from "./Tag.props";
// @ts-ignore
import cn from 'classnames';
import React from "react";

export const Tag = ({size = 's', color = 'ghost', href, children, className, ...props}: TagProps): JSX.Element => {
    return <div
        className={cn(styles.tag, className, {
            [styles.s]: size === 's',
            [styles.m]: size === 'm',
            [styles.gray]: color === 'gray',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
        })}
        {...props}
    >
        {
            href ?
                <a href={href}>{children}</a>
                : <>{children}</>
        }

    </div>
};