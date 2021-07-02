interface Comment {
    _id: string,
    commenterPseudo: string,
    message: string,
    valid: boolean,
    timestamp: Number;
}

export default Comment