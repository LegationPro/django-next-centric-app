import { fetcher } from "@/lib/authentication/server/fetcher";

export async function getCurrentUser() {
    try {
        return await fetcher("/auth/users/me");
    } catch (error) {
        return error;
    }
}
