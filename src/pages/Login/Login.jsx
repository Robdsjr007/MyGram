import styles from './Login.module.css';

import Divider from '../../components/Divider/Divider';
import Input from '../../components/Input/Input';

import { Link } from 'react-router-dom';

import Form from '../../components/Form/Form';
import EntrarFacebook from '../../components/EntrarFacebook/EntrarFacebook';

const Login = () => {

    const sayHello = (e) => {
        e.preventDefault();
        alert("Hello");
    } 

    return (
        <section className="container">
            {/* <img className={styles.imageCell2} src={`../../img/MyGram.png`} alt="" /> */}
            <main>
                <Form event={sayHello}>
                    <Input type={"text"} placeholder={"Nome de usuário ou Email"} />
                    <Input type={"password"} placeholder={"Senha"} />
                    <button className="btn" type='submit'>Entrar</button>
                    <Divider />
                    <EntrarFacebook color={'blue'}/>
                    <a href="#">Esqueceu a senha?</a>
                </Form>
                <footer>
                    <p>Não tem uma conta? <Link className={styles.linkRegister} to='cadastro'>Cadastre-se</Link></p>
                </footer>
            </main>
        </section>
    );
}

export default Login;
