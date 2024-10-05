"use server"

import { revalidatePath } from "next/cache";
import dbconnect from "@/lib/mongoose";
import { user_db } from "@/schemas/passwordSchema";

async function formsubmit(formdata) {

    try {

        await dbconnect()

        const user_details = new user_db({
            siteName: formdata.get("sitename") ,
            link: formdata.get("link"),
            username: formdata.get("username"),
            password: formdata.get("password"),
        })

        user_details.save()
        revalidatePath('/')
        
        console.log({ msg: "Succesfully Added Data" });
        return 
    } catch (error) {
        console.log({ errMsg: error.message });
        return
    }

}

export { formsubmit }