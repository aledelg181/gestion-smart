import PropTypes from 'prop-types';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Typography
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';
import useScriptRef from 'hooks/useScriptRef';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const JWTLogin = ({ loginProp, ...others }) => {
    const theme = useTheme();
    const scriptedRef = useScriptRef();
    const navigate = useNavigate();  // Hook para redirigir

    const [checked, setChecked] = React.useState(true);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // Datos mockeados
    const mockUser = {
        email: 'poseidon@poseidon.com',
        password: '123456'
    };

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Debe ser un email válido').max(255).required('El Email / Usuario es obligatorio'),
                password: Yup.string().max(255).required('La contraseña es obligatoria')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                try {
                    if (values.email === mockUser.email && values.password === mockUser.password) {
                        console.log('Login exitoso, redirigiendo al dashboard');
                        navigate('/dashboard/default');
                    } else {
                        console.log('Credenciales incorrectas');
                        setErrors({ submit: 'Usuario o contraseña incorrectos' });
                    }
            
                    if (scriptedRef.current) {
                        setStatus({ success: true });
                        setSubmitting(false);
                    }
                } catch (err) {
                    console.error('Error en el login:', err);
                    if (scriptedRef.current) {
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                        sx={{ ...theme.typography.customInput, color: '#000' }}
                    >
                        <InputLabel htmlFor="outlined-adornment-email-login">Correo / Usuario</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email-login"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            inputProps={{}}
                            sx={{ color: '#000' }}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                {errors.email}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <FormControl
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                        sx={{ ...theme.typography.customInput, marginTop: '10px', color: '#000' }}
                    >
                        <InputLabel htmlFor="outlined-adornment-password-login">Contraseña</InputLabel>
                        <OutlinedInput
                            sx={{ color: '#000' }}
                            id="outlined-adornment-password-login"
                            type={showPassword ? 'text' : 'password'}
                            value={values.password}
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        size="large"
                                    >
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                        {touched.password && errors.password && (
                            <FormHelperText error id="standard-weight-helper-text-password-login">
                                {errors.password}
                            </FormHelperText>
                        )}
                    </FormControl>

                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="Mantenerme Logueado"
                            />
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="subtitle1"
                                component={Link}
                                to={
                                    loginProp
                                        ? `/pages/forgot-password/forgot-password${loginProp}`
                                        : '/pages/forgot-password/forgot-password3'
                                }
                                color="secondary"
                                sx={{ textDecoration: 'none' }}
                            >
                                ¿Olvidaste tu contraseña?
                            </Typography>
                        </Grid>
                    </Grid>

                    {errors.submit && (
                        <Box sx={{ mt: 3 }}>
                            <FormHelperText error>{errors.submit}</FormHelperText>
                        </Box>
                    )}
                    <Box sx={{ mt: 2 }}>
                        <AnimateButton>
                            <Button color="secondary" disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained">
                                Iniciar Sesión
                            </Button>
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik>
    );
};

JWTLogin.propTypes = {
    loginProp: PropTypes.number
};

export default JWTLogin;