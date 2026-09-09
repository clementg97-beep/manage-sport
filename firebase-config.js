// ---------------------------------------------------------------
// À REMPLIR : colle ici la config de TON projet Firebase.
//
// Comment l'obtenir (2 minutes) :
// 1. Va sur https://console.firebase.google.com/ et connecte-toi avec ton compte Google.
// 2. "Ajouter un projet" -> nomme-le (ex. "creneau-everton") -> crée-le
//    (tu peux désactiver Google Analytics, pas nécessaire).
// 3. Dans le projet : menu de gauche > Compilation > Firestore Database
//    -> "Créer une base de données" -> mode "Production" -> choisis une
//    région proche (ex. northamerica-northeast1 pour Montréal).
// 4. Toujours dans le projet : icône ⚙️ (en haut à gauche) > "Paramètres du projet".
//    Descends jusqu'à "Vos applications" -> clique sur l'icône Web "</>"
//    -> donne un nom (ex. "creneau-web") -> "Enregistrer l'application".
// 5. Firebase affiche un bloc de code avec un objet `firebaseConfig` :
//    copie-le et remplace l'objet ci-dessous par le tien.
// 6. Va dans Firestore Database > onglet "Règles" et colle le contenu
//    du fichier firestore.rules fourni à côté de ce fichier, puis "Publier".
// ---------------------------------------------------------------

var firebaseConfig = {
  apiKey: "AIzaSyDpp8Yc5ZHmhAVBLVHmV79H5PVQOUj9ep8",
  authDomain: "manage-sport.firebaseapp.com",
  projectId: "manage-sport",
  storageBucket: "manage-sport.firebasestorage.app",
  messagingSenderId: "1016460412310",
  appId: "1:1016460412310:web:0bab02a8ce07b72341c9b7"
};

firebase.initializeApp(firebaseConfig);
