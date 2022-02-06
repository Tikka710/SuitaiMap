import { FC, useEffect, useContext } from 'react'
import Router from 'next/router'
import firebase from '../../lib/firebase'

const Logout = () => (
    <div>
      
      <button onClick={ () => firebase.auth().signOut() }>logout</button>
    </div>
  );

  export default Logout;