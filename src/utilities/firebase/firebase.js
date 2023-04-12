import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCYCRBMxDxYhRNgBLtN9GNk9VM3fr64hJg",
    authDomain: "shirtnpant-5c2d5.firebaseapp.com",
    projectId: "shirtnpant-5c2d5",
    storageBucket: "shirtnpant-5c2d5.appspot.com",
    messagingSenderId: "281862096704",
    appId: "1:281862096704:web:9bf91fd832ca6b1cf39ca5"
}

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    'prompt': 'select_account'
})

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

const db = getFirestore(firebaseApp);

export const createUserDocumnet = async (userAuth) => {
    const { uid, displayName, email } = userAuth;
    const userDocRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userDocRef);
    const createdAt = new Date();

    if (!userSnapshot.exists()) {
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
            console.log('successfully created userDocument');
        }
        catch (err) {
            console.log('error creating user', err.message);
        }
    }
    return userDocRef;
}
