import {ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {Paragraph} from "mdast";

export interface PProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    size?: 's' | 'm' | 'h';
}