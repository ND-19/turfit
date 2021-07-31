function canAddTurf(user){
    return user.role === 'BUSINESS'? true: false
}

module.exports = {
    canAddTurf
}


//
// <script src="https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyBKOY0fq8zyxBtY0Fx3cG80DVsLZ7pLl44",
//     authDomain: "turfit-db8c9.firebaseapp.com",
//     projectId: "turfit-db8c9",
//     storageBucket: "turfit-db8c9.appspot.com",
//     messagingSenderId: "338292733133",
//     appId: "1:338292733133:web:34d30a1981ed60c0186584"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
// </script>