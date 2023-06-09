import { initializeApp } from 'firebase/app';
import {
    getAuth, GoogleAuthProvider, signInWithPopup,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    onAuthStateChanged, signOut
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, writeBatch } from 'firebase/firestore';



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

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    const user = await createUserWithEmailAndPassword(auth, email, password);
    return user;
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    const user = await signInWithEmailAndPassword(auth, email, password);
    return user;
}


export const createUserDocumnet = async (userAuth, info) => {
    const { uid, displayName, email } = userAuth;
    const userDocRef = doc(db, 'users', uid);
    const userSnapshot = await getDoc(userDocRef);
    const createdAt = new Date();

    if (!userSnapshot.exists()) {
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...info
            })
        }
        catch (err) {
            console.log('error creating user', err.message);
        }
    }
    return userSnapshot;
}

export const getEmailList = async (email) => {
    const usersSnapshot = await getDocs(collection(db, 'users'));
    return usersSnapshot.docs.map((doc) => doc.data().email);
}


export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(
            auth,
            (user) => {
                unsubscribe();
                resolve(user);
            },
            reject);
    });
}


export const signOutListner = async () => {
    await signOut(auth);

}
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const colRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(colRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('Done');
}

export const getCategoriesData = async () => {
    const categoriesSnapshot = await getDocs(collection(db, 'categories'))
    const categories = categoriesSnapshot.docs.map((doc) => doc.data())
    return categories;
}