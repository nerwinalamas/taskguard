import { createClient } from "@/utils/supabase/server";

const Profile = async () => {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();

    if (error) {
        return <p>{error.message}</p>;
    }

    return (
        <div className="p-4 lg:px-10 lg:py-5">
            <h1 className="text-xl font-bold">Profile</h1>
            <p>Email: {data.user.email}</p>
        </div>
    );
};

export default Profile;
