import React from 'react';
import arr from "../../../assets/icons/arr.svg";
import Form from "react-bootstrap/Form";
import CatalogPageCards from "../../CatalogPage/components/CatalogPageCards/CatalogPageCards";
import secondCatalog from "../../../components/constants/secondCatalog";
import heart from "../../../assets/icons/favourite.svg";
import {Link} from "react-router-dom";
import {HandySvg} from "handy-svg";
import cart from "../../../assets/icons/cart.svg";
import PaginationComp from "../../../components/Pagination";

const SubCategoryPageCards = () => {

    const newCatalog = secondCatalog.map((elem) => {
        return (
            <>
                <div className='catalogPagePopular__catalogs__cards__card'>
                    <div className='catalogPagePopular__catalogs__cards__card__heart'>
                        <img src={heart} alt='heart'/>
                    </div>
                    <div className='catalogPagePopular__catalogs__cards__card__img'>
                        <Link to='/products'>
                            <img className='d-block w-100' src={elem.img} alt='First slide'/>
                        </Link>
                    </div>
                    <div className='catalogPagePopular__catalogs__cards__card__descr'>
                        <Link to='/products'>
                            <h5>{elem.description}</h5>
                        </Link>
                        <div className='catalogPagePopular__catalogs__cards__card__cart'>
                            <Link to='/products'>
                                <p>{elem.price}</p>
                            </Link>
                            <span>
                                <HandySvg src={cart} className='icon' width='30' height='30'/>
                            </span>
                        </div>
                    </div>
                    <div className="catalogPagePopular__catalogs__cards__card__quantity">
                        <button type="button" className="btn btn-info">-</button>
                        <input type="text" className="form-control form-control-color" defaultValue={1}/>
                        <button type="button" className="btn btn-info">+</button>
                    </div>
                </div>
            </>
        );
    });

    return (
        <div className="subCategoryPageCards">
            <div className='catalogPage'>
                <div className='catalogPage__top'>
          <span>
            Главная <img src={arr} alt='' />
          </span>
                    <span>Каталог</span>
                    <h2>Каталог</h2>
                </div>
                <div className='catalogPage__mid'>
                    <div></div>
                    <div className='catalogPage__mid__select'>
                        <select name='' id=''>
                            <option value='1'>По популярности</option>
                            <option value='1'>По цене</option>
                            <option value='1'>По дате</option>
                        </select>
                    </div>
                </div>
                <div className='catalogPage__content'>
                    <div className='catalogPage__content__left'>
                        <span>Параметры</span>
                        <div className='catalogPage__content__left__price'>
                            <Form.Label>Цена</Form.Label>
                            <Form.Range />
                            от 100.000 до 500.000
                        </div>
                    </div>
                    <div className='catalogPage__content__right'>
                        <div className='catalogPagePopular__catalogs__cards'>{newCatalog}</div>
                        <PaginationComp/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubCategoryPageCards;