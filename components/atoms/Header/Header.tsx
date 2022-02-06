import classNames from 'classnames';
import React, { FC, useEffect } from 'react';
import styles from './styles.module.scss';


export const Header: FC = () => {
    return (
        <nav className={classNames('flex items-center justify-between flex-wrap p-6',
            styles.header
        )}>
            <ul className="flex justify-between sm:justify-around w-full">
            <h1 className="text-3xl">スイタイ</h1>
            </ul>
        </nav>
    )
}