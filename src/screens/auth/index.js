import React, {useState, useReducer} from "react"
import { View, Text, TouchableOpacity, Button, TextInput, KeyboardAvoidingView } from "react-native"
import { useDispatch } from "react-redux"
import { Input } from '../../components'
import { UPDATED_FORM, onInputChange } from "../../utils/forms"
import { colors } from '../../constants/themes'
import { styles } from "./style"
import { signUp } from "../../store/actions/index"

//estado inicial para el formulario
const initialState = {
    //campos requeridos
    email: { value: '', error: '', touched: false, hasError: true},
    password: { value: '', error: '', touched: false, hasError: true},
    isFormValid: false,
}
//recibe estado y accion, como un reductor
const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATED_FORM: 
        const { name, value, hasError, error, touched, isFormValid} = action.data;
        return {
            //copia del estado original
            ...state,
            [name]: {
                //recibimos copia de ese estado, del campo name
                ...state[name],
                value,
                hasError,
                error,
                touched,
            },
            isFormValid
        }
        default: 
            return state;
    }
}

const Auth = ({ navigation }) => {
    //al momento de dar click al boton de registro, se despacha signuo
    const dispatch = useDispatch()
    const [isLogin, setIsLogin] = useState(true)
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    //estado de formulario va gestionar el tema de mail y password
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const title = isLogin ? 'Login' : 'Registro';
    const message = isLogin ? '¿No tienes una cuenta?' : '¿Ya tienes una cuenta?';
    const messageAction = isLogin ? 'Ingresar' : 'Registrarse';

    const onHandleSubmit = () => {
        console.log(email, password)
        const { password, email } = formState;
        //aqui despachamos el signup
        // dispatch(signUp(email, password))
        dispatch(signUp(formState.email.value, formState.password.value))
    };

    const onHandleChange = (value, type) => {
        //tenemos que crear la funcion onInputChange
        onInputChange(type, value, dispatchFormState, formState)
    }

    return (
        
        <KeyboardAvoidingView style={styles.keyboardContainer} behavior="padding" >
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Input
                    style={styles.input}
                    label="Email"
                    placeholder="ingrese su email"
                    //nuevo estado formState
                    value={formState.email.value}
                    placeholderTextColor={colors.gray}
                    keyboardType="email-adress"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'email')}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                />
                <Input
                    style={styles.input}
                    label="Password"
                    placeholderTextColor={colors.grey}
                    value={formState.password.value}
                    placeholder="ingrese su contraseña"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => onHandleChange(text, 'password')}
                    hasError={formState.email.hasError}
                    error={formState.email.error}
                    touched={formState.email.touched}
                />
                <Button
                    title={messageAction}
                    color={colors.primary}
                    onPress={onHandleSubmit}
                    disabled={!formState.isFormValid}
                />
                <View style={styles.prompt}>
                <TouchableOpacity style={styles.promptButton} onPress={() => setIsLogin(!isLogin)}>
                    <Text style={styles.promptMessage}>{message}</Text>
                </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Auth