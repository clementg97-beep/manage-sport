// ---------------------------------------------------------------
// À REMPLIR : configuration EmailJS pour l'envoi de courriels
// "nouvelle séance" aux joueurs.
//
// Comment l'obtenir (5-10 minutes) :
// 1. Va sur https://www.emailjs.com/ et crée un compte gratuit.
// 2. "Email Services" (menu de gauche) -> "Add New Service" -> choisis
//    ton fournisseur (Gmail est le plus simple) -> connecte le compte
//    que tu veux utiliser pour envoyer les courriels du club.
//    -> note le "Service ID" (ex. service_abc1234).
// 3. "Email Templates" -> "Create New Template". Dans le corps du
//    template, utilise ces variables (elles seront remplies
//    automatiquement par l'app) :
//      {{to_name}}       -> prénom du joueur
//      {{to_email}}      -> (mets-le aussi dans le champ "To Email"
//                            du template, en haut du formulaire)
//      {{session_title}} -> ex. "Entraînement"
//      {{session_date}}  -> ex. "Mardi 9 septembre"
//      {{session_time}}  -> ex. "20:00"
//      {{gym_name}}      -> nom du gymnase
//      {{team_name}}     -> nom de l'équipe
//      {{coach_name}}    -> nom du coach qui a créé la séance
//    Exemple de corps de template :
//      "Bonjour {{to_name}}, une nouvelle séance a été ajoutée pour
//      {{team_name}} : {{session_title}} le {{session_date}} à
//      {{session_time}} ({{gym_name}}). Réponds directement dans
//      l'app Manage-sport pour indiquer ta disponibilité."
//    -> note le "Template ID" (ex. template_xyz789).
// 4. Icône compte (en haut à droite) -> "General" -> copie la
//    "Public Key".
// 5. Remplace les 3 valeurs ci-dessous.
// ---------------------------------------------------------------

var EMAILJS_CONFIG = {
  publicKey: "REMPLACE_MOI",
  serviceId: "REMPLACE_MOI",
  newSessionTemplateId: "REMPLACE_MOI"
};

if (typeof emailjs !== "undefined" && EMAILJS_CONFIG.publicKey !== "REMPLACE_MOI") {
  emailjs.init({ publicKey: EMAILJS_CONFIG.publicKey });
}
