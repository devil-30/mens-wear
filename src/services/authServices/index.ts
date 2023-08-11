import ApiCall from "@/utils/APICall"

export const url=process.env.NEXT_PUBLIC_BACKEND_URL

export const login= async (username: string, password:string) => {
    return ApiCall(`${url}/login`, 'POST',{username, password});
}