import { FC, useEffect, useContext } from 'react'
import Link from 'next/link';
import Router from 'next/router'
import classNames from 'classnames';
import firebase from '../../lib/firebase'
import { AuthContext } from '../../context/Auth';
import styles from './styles.module.scss';


export type LoginPageProps = {
    signIn: () => void;
  };

export const SignIn: FC<LoginPageProps> = ({ signIn }) => {
    
    const { currentUser } = useContext(AuthContext);
    
    useEffect(() => {
        currentUser && Router.push('/')
    }, [currentUser])

    
    const login = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider);
        
    }

    return (
        <div className={classNames('text-center', styles.wrapper)}>
            <div>
            <button className="inline-block mb-4 px-4 py-1 rounded border border-primary text-primary" onClick={login}>
                Googleログイン
                </button>
            <p>User: { currentUser?.displayName }</p>
                <div>
                <Link href="/">
                    <a className="inline-block mb-4 px-4 py-1 rounded border border-sub text-sub">トップ</a>
                </Link>
                </div>
            </div>
       </div>
    )
}