import React from 'react';
import  {useRouter} from 'next/router'
import Head from "next/head"; // getting name of user

const Profile = () => {
    const  router = useRouter()
    const {username} = router.query;
    return (

        <div>
            <Head>
                <title>{username} Profile Page</title>
            </Head>
            Hello {username}
        </div>
    );
};

    export default Profile;