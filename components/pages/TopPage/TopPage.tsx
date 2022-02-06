import classNames from 'classnames';
import Link from 'next/link';
import React, { FC, useEffect } from 'react';
import { Header } from '../../atoms/Header'
import styles from './styles.module.scss';
import { GoogleMap } from '../../atoms/GoogleMap'



export const TopPage: FC = () => {
    useEffect(() => {
        if(typeof window === 'undefined'){
            return;
        }
        document.documentElement.style.overflow = ''
    }, [])

    return (
        <div className={classNames(
            'flex flex-col w-full h-screen min-h-max bg-top-bg',
            styles.wrapper
        )}>
            <Header /> 

            <section className="flex flex-col justify-center items-center gap-4 p-5 bg-back-shadow text-center">
                <p className={classNames(
                    'text-sm',
                    styles.textcolor
                    )}>タバコが吸える場所をGoogleMapで探せます</p>
                <p className={classNames(
                    'text-sm',
                    styles.textcolor
                )}></p>
                <GoogleMap />
        <div className="flex flex-col gap-2">
            
        </div>

            </section>
            <section className={classNames('mt-16 pb-8 w-full justify-center items-center', styles.example)}>

            
                
            </section>
            

        </div>
    )
}