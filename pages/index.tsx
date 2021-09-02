import React, {useEffect, useState} from "react";
import {Button, Htag, P, Tag, Rating} from "../components";
import {withLayout} from "../layout/Layout";

function Home(): JSX.Element {
    const [counter, setCounter] = useState<number>(0);
    const [rating, setRating] = useState<number>(4);

    // in mounted
    useEffect(() => {
        console.log(`mounted`);
    }, []);

    useEffect(() => {
        console.log(`Counter: ${counter}`);
    }, [counter]);


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
        </>
    )
}

export default withLayout(Home);