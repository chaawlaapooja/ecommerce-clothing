import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBXwppXs-PESay93goNphpxpE2K-msTNko",
    authDomain: "crown-db-4dd40.firebaseapp.com",
    databaseURL: "https://crown-db-4dd40.firebaseio.com",
    projectId: "crown-db-4dd40",
    storageBucket: "crown-db-4dd40.appspot.com",
    messagingSenderId: "406393783272",
    appId: "1:406393783272:web:8dd05d61367e708be71a5d",
    measurementId: "G-L1BG4K86VH"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
	if(!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`)

	const snapShot = await userRef.get();

	if(!snapShot.exists){
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try{
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}catch(error){
			console.log('error creating user', error.message)
		}
	}
	return userRef;
}

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;