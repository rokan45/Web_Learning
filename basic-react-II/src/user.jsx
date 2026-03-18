import { use } from "react"

export default function User({ userData }) {
    const user = use(userData);
    console.log(user);
    return (
        <>
            {
                user.map((user, id) => (<div className="basic" key={id}>
                    <h2>Name: {user.name}</h2>
                    <h2>Username: {user.username}</h2>
                    <h2>Website: {user.website}</h2>
                    <h2>Contact: {user.phone}</h2>
                </div>))
        }
        </>

    )
}