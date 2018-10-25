export const createProject = (project) => {
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		// make async call to database
		const firestore = getFirestore();
		const profile = getState().firebase.profile;
		const uid = getState().firebase.auth.uid;
		firestore.collection('projects').add({ 
			...project, 
			authorFirstName: profile.fullname, 
			authorLastName: profile.fullname, 
			createdAt: new Date(), 
			authorId: uid 
		}).then(() => 
		{
			dispatch({ type: 'CREATE_PROJECT', project });
		}).catch((err) => {
			dispatch({ type: 'CREATE_PROJECT_ERROR', err});
		})
	}
}