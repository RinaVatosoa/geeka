export type Members = {
    adresse: String,
    email: String,
    nom: String,
    prenom: String,
}

export type Query = {
    allMemberses : Members[];
}