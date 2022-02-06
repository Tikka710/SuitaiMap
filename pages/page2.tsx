import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useContext } from 'react'
import { AuthContext } from '../context/Auth';


export default function Home(){
    const { currentUser } = useContext(AuthContext)

    return (
        <div>
            
        </div>

    )

}

