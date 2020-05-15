import * as firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyAs84ULuzXuNcHQVC5_JP-FekWLGtqaG7U',
	authDomain: 'vizier-84666.firebaseapp.com',
	databaseURL: 'https://vizier-84666.firebaseio.com',
	projectId: 'vizier-84666',
	storageBucket: 'vizier-84666.appspot.com',
	messagingSenderId: '758998840143',
	appId: '1:758998840143:web:a0ceff64c0935b3d1e4b3a',
	measurementId: 'G-0ME4Y0CY2B',
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export default database
