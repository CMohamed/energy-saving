import {Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


const Header = () => {
    const onClick=()=>{
        console.log('click')
    }

    return (
        <form  className='container'>
            <div className='css-1gm9hch'>
                <h2  className='MuiTypography-root MuiTypography-h2 css-zoocp0-MuiTypography-root'>Sign in</h2>
                <p>Sign in on the internal platform</p>
            </div>
            <div className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-h51dfx-MuiGrid-root'>
                <Button variant="contained" color="primary" onClick={onClick}>Login with Facebook</Button>
                <Button variant="contained" color="primary" onClick={onClick}>Login with google</Button>
            </div>
            <h3>or login with email address</h3>
            <div>
            <label><b>Email Adress</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required></input>
            </div>
            <div>
            <label><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required></input>
            </div>
            <div>
            <Button variant="contained" color="primary" onClick={onClick}>Sign in now</Button>
            </div>
            
            <p>Don't have an account? Sign up</p>
        </form>
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