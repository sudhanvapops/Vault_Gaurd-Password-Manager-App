"use server"
import { revalidatePath } from "next/cache";


async function formsubmit(formdata) {
    console.log(formdata);
    revalidatePath('/')
}

export {formsubmit}