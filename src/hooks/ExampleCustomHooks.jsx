import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)
        let intervalID = setInterval(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setLoading(false)
                setData(data)
            })
            .catch(error => setError(error))
        }, 3000)
        return () => {
            clearInterval(intervalID)
        }
    }, [url])

    return [data, loading, error]
}


const ExampleCustomHooks = () => {

    const [users, loadingUsers, errorUsers] = useFetch('https://jsonplaceholder.typicode.com/users');
    const [posts, loadingPosts, errorPosts] = useFetch('https://jsonplaceholder.typicode.com/posts');

    return (
        <>
            <h5>Users</h5>
            {!!errorUsers && <p>Error: {errorUsers?.message}</p>}
            {loadingUsers && users === null && (
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            <ul>
                {!!users && users.length > 0 && users.map((user) => <li key={user.id}>{user.name}</li>)}
            </ul>

            <h5>Posts</h5>
            {!!errorPosts && <p>Error: {errorPosts?.message}</p>}
            {loadingPosts && <p>Loading...</p>}
            <ul>
                {!!posts && posts.length > 0 && posts.map((post) => <li key={post.id}>{post.title}</li>)}
            </ul>
        </>
    )
}

export default ExampleCustomHooks