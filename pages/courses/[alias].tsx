import React, {useEffect, useState} from "react";
import {withLayout} from "../../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../../inferfaces/menu.interface";

function Course({ menu, firstCategory}: CourseProps): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4);

    return (
        <>

        </>
    )
}

export default withLayout(Course);

export const getStaticProps: GetStaticProps<CourseProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<CourseProps[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory,
    });
    return {
        props: {
            menu,
            firstCategory,
        }
    }
};

interface CourseProps extends Record<string, unknown>{
    menu: CourseProps[],
    firstCategory: number,
}