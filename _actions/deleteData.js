"use server"

import { user_db } from "@/schemas/passwordSchema"

export const deleteData = async (id) => {
    
    await user_db.deleteOne({_id:id})

    return
}