export type User = {
    uid: string;
    username: string;
    name: string;
    email: string;
    phone?: string;
    dob?: string;
    password?: string;
    image?: string | null;
    role: string;
};

export default User;