export default function Login({setUser}) {
    return(
        <>
        <h2>Login</h2>
        <button onClick={()=> setUser('Already user')}>Login</button>
        &nbsp;
        <button onClick={() => setUser()}>Logout</button>
        </>
    )
}