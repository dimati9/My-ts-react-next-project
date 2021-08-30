import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {Paragraph} from "mdast";

export interface TagProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode;
    size?: 's' | 'm';
    color?: 'ghost' | 'green' | 'red' | 'gray' | 'primary';
    href?: string;
}