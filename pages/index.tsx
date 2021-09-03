import React, {useEffect, useState} from "react";
import {Button, Htag, P, Tag, Rating} from "../components";
import {withLayout} from "../layout/Layout";
import {GetStaticProps} from "next";
import axios from "axios";
import {MenuItem} from "../inferfaces/menu.interface";

function Home({ menu, firstCategory}: HomeProps): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4);

    return (
        <>
            <Htag tag="h2">Значение: {counter}</Htag>
            <P size="s">Small</P>
            <P size="m">Middle</P>
            <Tag href="https://yandex.ru" color="green" size={"m"}>Ссылка</Tag>
            <Tag color="red" size={"m"}>Не ссылка</Tag>
            <Tag color="primary" size={"s"} href="https://e-metall.ru">E-metall</Tag>

            <P size="h">High</P>
            <Button appearance={"primary"} arrow="down" onClick={() => {
                setCounter(x => x + 1)
            }}>Добавить</Button>
            <Button appearance={"ghost"} arrow='right' className={'hely'} onClick={() => {
                setCounter(x => x - 1)
            }}>Вычесть</Button>
            <Rating rating={4} />
            <Rating rating={rating} isEditable={true} setRating={setRating} />
            <ul>
                {menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
            </ul>
        </>
    )
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory,
    });
    return {
        props: {
            menu,
            firstCategory,
        }
    }
};

interface HomeProps extends Record<string, unknown>{
    menu: MenuItem[],
    firstCategory: number,
}