import { db } from "../firebase/firebase-config"

export const loadUsers = async(uid) => {
    
    const usersSnap = await db.collection(`${uid}/records/users`).get();
    const usersList = [];

    usersSnap.forEach( userChild => {
        
        usersList.push({
            id: userChild.id,
            ...userChild.data()
        })
    });

    return usersList;
}