import {
    Box,
    Button,
    Container,
    Grid,
    Link,
    TextField,
    Typography
} from '@material-ui/core';
import Facebook from '../icons/Facebook';
import Google from '../icons/Google';


const Header = () => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <Box className='css-1nxm6du'>
            <Container className='MuiContainer-root MuiContainer-maxWidthSm css-cuefkz-MuiContainer-root'>
                <form className='container'>
                    <Box className='css-1gm9hch'>
                        <Typography className='MuiTypography-root MuiTypography-h2 css-zoocp0-MuiTypography-root'>
                            Sign in
                        </Typography>
                        <Typography className='MuiTypography-root MuiTypography-body2 MuiTypography-gutterBottom css-13dgf1y-MuiTypography-root'>
                            Sign in on the internal platform
                        </Typography>
                    </Box>
                    <Grid
                        className='MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3 css-h51dfx-MuiGrid-root'>
                        <Grid className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 css-13liyab-MuiGrid-root'>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={onClick}
                                startIcon={<Facebook />}
                                className='MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root css-1h67mkt-MuiButtonBase-root-MuiButton-root'
                            >
                                Login with Facebook</Button>
                        </Grid>
                        <Grid className='MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 css-13liyab-MuiGrid-root'>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={onClick}
                                startIcon={<Google />}
                                className='MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root css-1h67mkt-MuiButtonBase-root-MuiButton-root'
                            >
                                Login with google
                            </Button>
                        </Grid>
                    </Grid>
                    <Box className='css-1wqng4v'>
                        <Typography className='MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter css-17el6lh-MuiTypography-root'>or login with email address</Typography>

                    </Box>
                    <TextField
                        className='MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root'
                        label="Email Address"
                        margin="normal"
                        name="email"
                        type="email"
                        variant="outlined"
                    />
                    <TextField
                        className='MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root'
                        label="Password"
                        margin="normal"
                        name="password"
                        variant="outlined"
                    />
                    <Grid className='css-3n9w57'>
                        <Button
                            className='MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root css-1h67mkt-MuiButtonBase-root-MuiButton-root'
                            variant="contained"
                            color="primary"
                            onClick={onClick}
                        >
                            Sign in now
                        </Button>
                    </Grid>

                    <Typography className='MuiTypography-root MuiTypography-body1 css-ngt9wa-MuiTypography-root'>
                        Don't have an account?
                        <Link
                            className='MuiTypography-root MuiTypography-h6 MuiLink-root MuiLink-underlineHover css-1lwfupp-MuiTypography-root-MuiLink-root'
                            href='/register'
                        >
                            Sign up
                        </Link>
                    </Typography>
                </form>
            </Container >
        </Box >


    )
}
Header.defaultProps = {
    title: 'Login'
}
// CSS in JS
// const headingStyle={
//     color:'red', backgroundColor:'black'
// }

export default Header