"use server"

import dbconnect from "@/lib/mongoose"
import { user_db } from "@/schemas/passwordSchema";

export const load_data = async () => {

    dbconnect()

    try {
        const data = await user_db.find({});
        // Use user.toObject({flattenObjectIds: true}) to avoid warnings
        return data.map(user => user.toObject({flattenObjectIds: true}))
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }

}