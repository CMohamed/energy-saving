import {
    Box,
    Button,
    Checkbox,
    Container,
    Grid,
    Link,
    TextField,
    Typography
} from '@material-ui/core';



const Register = () => {
    const onClick = () => {
        console.log('click')
    }

    return (
        <Box className='css-1nxm6du'>
            <Container className='MuiContainer-root MuiContainer-maxWidthSm css-cuefkz-MuiContainer-root'>
                <form className='container'>
                    <Box className='css-1gm9hch'>
                        <Typography className='MuiTypography-root MuiTypography-h2 css-zoocp0-MuiTypography-root'>
                            Create new account
                        </Typography>
                        <Typography className='MuiTypography-root MuiTypography-body2 MuiTypography-gutterBottom css-13dgf1y-MuiTypography-root'>
                            Use your email to create new account
                        </Typography>
                    </Box>
                    <TextField
                        className='MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root'
                        label="First name"
                        margin="normal"
                        name="First name"
                        type="text"
                        variant="outlined"
                    />
                    <TextField
                        className='MuiFormControl-root MuiFormControl-marginNormal MuiFormControl-fullWidth MuiTextField-root css-17vbkzs-MuiFormControl-root-MuiTextField-root'
                        label="Last name"
                        margin="normal"
                        name="Last name"
                        variant="outlined"
                    />
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
                    <Box className='css-l28hz2'>

                        <Checkbox
                            name="policy"
                        />
                        <Typography className='MuiTypography-root MuiTypography-body1 css-ngt9wa-MuiTypography-root'>
                            I have read the
                            {' '}
                            <Link
                                className='MuiTypography-root MuiTypography-h6 MuiLink-root MuiLink-underlineAlways css-1eheey-MuiTypography-root-MuiLink-root'
                                color="primary"
                                to="#"
                                underline="always"
                                variant="h6"
                            >
                                Terms and Conditions
                            </Link>
                        </Typography>
                    </Box>
                    <Grid className='css-3n9w57'>
                        <Button
                            className='MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeLarge MuiButton-containedSizeLarge MuiButton-fullWidth MuiButtonBase-root css-1h67mkt-MuiButtonBase-root-MuiButton-root'
                            variant="contained"
                            color="primary"
                            onClick={onClick}
                        >
                            Sign up now
                        </Button>
                    </Grid>

                    <Typography className='MuiTypography-root MuiTypography-body1 css-ngt9wa-MuiTypography-root'>
                        Have an account?
                        {' '}
                        <Link
                            className='MuiTypography-root MuiTypography-h6 MuiLink-root MuiLink-underlineHover css-1lwfupp-MuiTypography-root-MuiLink-root'
                            href='/login'
                        >
                            Sign in
                        </Link>
                    </Typography>
                </form>
            </Container >
        </Box >


    )
}
Register.defaultProps = {
    title: 'Register'
}
// CSS in JS
// const headingStyle={
//     color:'red', backgroundColor:'black'
// }

export default Register