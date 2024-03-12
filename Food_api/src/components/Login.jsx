export default function Login({setLogedIn}){

    const handleSubmit = (event)=>{
        event.preventDefault()
    }

    return (
    <>
    <h1>Logg inn ....</h1>
    <form className="login" onSubmit={handleSubmit}>
        <label htmlFor="username">Brukernavn </label>
        <input type="text" id="username" name="username" placeholder="ackarlse..."/>
        <label htmlFor="password">Passord</label>
        <input type="password" id="password" name="password" placeholder="******" />
        <button type="submit" onClick={()=>setLogedIn(true)}>Logg inn</button> 
    </form>
    </>
    )
}