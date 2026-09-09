# Créneau

App mobile pour Everton Volleyball : planification des séances par équipe,
disponibilités des joueurs, gestion des coachs par un administrateur, et
localisation des gymnases avec carte et itinéraire.

## 1. Créer le projet Firebase (base de données)

1. Va sur https://console.firebase.google.com/ et connecte-toi avec un compte Google.
2. "Ajouter un projet" → nomme-le (ex. `creneau-everton`) → crée-le (Google
   Analytics non nécessaire, tu peux le désactiver).
3. Dans le projet : menu de gauche → **Compilation** → **Firestore Database**
   → "Créer une base de données" → mode **Production** → région proche
   (ex. `northamerica-northeast1` pour Montréal).
4. Icône ⚙️ (en haut à gauche) → **Paramètres du projet** → onglet
   **Général** → section "Vos applications" → icône Web `</>` → nomme
   l'app (ex. `creneau-web`) → "Enregistrer l'application".
5. Firebase affiche un objet `firebaseConfig`. Copie-le et colle-le dans
   [`firebase-config.js`](firebase-config.js) à la place des valeurs
   `"REMPLACE_MOI"`.
6. Retourne dans **Firestore Database** → onglet **Règles** → colle le
   contenu de [`firestore.rules`](firestore.rules) → **Publier**.

> Remarque : la clé `apiKey` d'un projet Firebase web n'est **pas un
> secret** — elle est censée être visible côté client. La vraie sécurité
> vient des règles Firestore (`firestore.rules`), pas de la clé.

## 2. Héberger sur GitHub Pages

```bash
cd creneau-app
git init                      # si pas déjà fait
git add .
git commit -m "Créneau - première version"
git branch -M main
git remote add origin https://github.com/<ton-compte>/<ton-repo>.git
git push -u origin main
```

Puis sur GitHub : **Settings** → **Pages** → Source : `Deploy from a
branch` → Branch : `main` / `(root)` → **Save**. L'app sera accessible
quelques minutes plus tard à `https://<ton-compte>.github.io/<ton-repo>/`.

## 3. Premier lancement

1. Ouvre l'URL GitHub Pages sur ton téléphone.
2. Entre ton nom exact (`Clément Gustin`), clique **"Je suis
   l'administrateur du club"**, code `2026`.
3. Crée ta première équipe depuis le sélecteur en haut.
4. Dans **Administration** (⚙️) : ajoute les coachs autorisés pour cette
   équipe. Les 9 gymnases d'Everton Volleyball sont pré-remplis
   automatiquement au premier lancement (avec leurs coordonnées GPS pour
   la carte).

## Fonctionnement des rôles

- Pas de vrai mot de passe : chacun tape son nom au premier lancement.
- Un seul administrateur, identifié par nom exact + code PIN codés en
  dur dans `index.html` (`ADMIN_NAME` / `ADMIN_PIN`) — change-les avant
  de déployer si tu veux un autre nom/code.
- Le rôle "Coach" n'est actif que si l'administrateur a ajouté ce nom
  dans la liste blanche de l'équipe (panneau Administration). Sinon la
  personne reste "Joueur" avec un bandeau d'attente.

## Carte et itinéraires

- Chaque séance affiche une carte Leaflet/OpenStreetMap intégrée
  (gratuite, sans clé API) centrée sur le gymnase.
- Le bouton "Itinéraire depuis ma position" utilise la géolocalisation
  du téléphone et ouvre Google Maps en mode transport en commun — sans
  clé Google ni facturation. **Nécessite HTTPS** (GitHub Pages est en
  HTTPS par défaut, donc ok).
- Un gymnase ajouté depuis Administration sans coordonnées connues est
  géolocalisé automatiquement via l'API gratuite Nominatim/OpenStreetMap
  à partir de l'adresse saisie.

## Limites connues

- Pas de vraie authentification : n'importe qui avec le lien peut lire
  et écrire les données (même modèle de confiance qu'avant). Adapté à
  un usage interne de club, pas à des données sensibles.
- Usage prévu ~200+ utilisateurs : largement dans le tier gratuit
  Firebase Firestore (50k lectures / 20k écritures par jour, 1 Go).
