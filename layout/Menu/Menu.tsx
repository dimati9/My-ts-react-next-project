import React, {useContext} from "react";
import styles from './Menu.module.css';
import {AppContext} from "../../context/app.context";
import {FirstLevelMenuItem} from "../../inferfaces/menu.interface";
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/service.svg';
import ProductsIcon from './icons/product.svg';
import BooksIcon from './icons/books.svg';
import {TopLevelCategory} from "../../inferfaces/page.interface";
import cn from 'classnames';

const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name:'Курсы', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
    { route: 'services', name:'Сервисы', icon: <ServicesIcon />, id: TopLevelCategory.Services },
    { route: 'books', name:'Книги', icon: <BooksIcon />, id: TopLevelCategory.Books },
    { route: 'products', name:'Продукты', icon: <ProductsIcon />, id: TopLevelCategory.Products },
];

export const Menu = (): JSX.Element => {
    const {menu, setMenu, firstCategory} = useContext(AppContext);

    const buildFirstLevel = () => {
        return (
          <>
              {firstLevelMenu.map(menu => (
                  <div key={menu.route}>
                      <a href={`/${menu.route}`}>
                          <div className={cn(styles.firstLevel, {
                              [styles.firstLevelActive]: menu.id == firstCategory
                          })}>
                              {menu.icon}
                              <span>{menu.name}</span>
                          </div>
                      </a>
                      {menu.id == firstCategory && buildSecondLevel()}
                  </div>
              ))}
          </>
        );
    };

    const buildSecondLevel = () => {
        return (
            <div>
                {menu.map(m => (
                    <div key={m._id.secondCategory}>
                        <div className={styles.secondLevel}>{}</div>
                    </div>
                ))}
            </div>
        );
    };

    const buildThirdLevel = () => {

    };

    return (
        <div className={styles.menu}>
            {buildFirstLevel()}
        </div>
    )
};