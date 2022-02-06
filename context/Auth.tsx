import { FC, createContext, useEffect, useState } from 'react';
import firebase from '../lib/firebase'
import 'firebase/firestore';


type User = firebase.User

type AuthContextProps = {
    currentUser: User | null | undefined
  }
  
  const AuthContext = createContext<AuthContextProps>({currentUser: undefined})

  const AuthProvider: FC = ({ children }) => {
      const [ currentUser, setCurrentUser] = useState<User | null | undefined>(undefined);

      console.log('Start useEffect')

      useEffect(() => {
        // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                console.log('SetUser')
            }
          setCurrentUser(user);
        })
      }, []);

      /* 下階層のコンポーネントをラップする */
      return (
        <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
      )
  }

  async function createUserIfNotFound(user: User){
    const db: firebase.firestore.Firestore = firebase.firestore();
    const usersCollection = db.collection('users')
    const userRef = usersCollection.doc(user.uid)

    const document = await db.getDoc(userRef)
  if (document.exists()) {
    // 書き込みの方が高いので！
    return
  }
  }

  
  export { AuthContext, AuthProvider }