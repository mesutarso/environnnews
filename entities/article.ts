import Comment from './comment'

export default interface Article{
    _id: string;
    titre: string;
    attaque: string;
    legende: string;
    contenu: string;
    file: string;
    auteur: string;
    categorie: string;
    views: Number;
    comments: Comment[];
    createdAt: Date
}