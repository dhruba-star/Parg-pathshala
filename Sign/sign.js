// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const form = document.getElementById('signInForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = form['name'].value;
  const email = form['email'].value;
  const phone = form['phone'].value;
  const password = form['password'].value;
  const confirmPassword = form['confirmPassword'].value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(email, password);
    await userCredential.user.sendEmailVerification();
    await db.collection("users").doc(userCredential.user.uid).set({
      name,
      email,
      phone,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
    document.getElementById('emailPopup').style.display = 'block';
  } catch (error) {
    alert(error.message);
  }
});

function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
    .then(result => {
      alert("Signed in with Google");
    })
    .catch(error => {
      alert(error.message);
    });
}

function closePopup() {
  document.getElementById('emailPopup').style.display = 'none';
}
