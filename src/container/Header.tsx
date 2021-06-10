import Button from './Button'

const Header = () => {
    const onClick=()=>{
        console.log('click')
    }

    return (
        <div  className='header'>
            <h1>Sign in</h1>
            <h2>Sign in on the internal platform</h2>
            <Button color='blue' text='Login with Facebook' onClick={onClick}/>
            <Button color='blue' text='Login with Google' onClick={onClick}/>
            <h3>or login with email address</h3>
            <label><b>Email Adress</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required></input>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>
            <Button color='blue' text='Sign in now' onClick={onClick}/>
            <h3>Don't have an account? Sign up</h3>
        </div>
    )
}
Header.defaultProps={
    title:'Login'
}
// CSS in JS
// const headingStyle={
//     color:'red', backgroundColor:'black'
// }

export default Header