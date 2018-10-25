
export const signIn = (credentials) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const firebase = getFirebase();
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((res) => {
            // console.log(res, newUser);
            return firestore.collection('users').doc(res.user.uid).set({
                fullname: newUser.fullname,
                initials: newUser.fullname[0] + (newUser.fullname.split(" ")[1])[0]
            });
        })
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err });
        })
    }
}