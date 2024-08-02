import styles from "./Cadastro.module.css"

import Form from "../../components/Form/Form"
import EntrarFacebook from "../../components/EntrarFacebook/EntrarFacebook"
import Divider from "../../components/Divider/Divider"
import Input from "../../components/Input/Input"

const Cadastro = () => {

  const sayBye = (e) => {
    e.preventDefault();
    alert("bye");
  }

  return (
    <section className="container">
      <main>
        <Form event={sayBye}>
          <p className={styles.mediumText}>Cadastre-se para ver fotos e vídeos dos seus amigos.</p>
          <button className={`${styles.cadastrarFace} btn`}><EntrarFacebook /></button>
          <Divider />
          <Input type={"text"} placeholder={"Nome de usuário ou Email"} />
          <Input type={"text"} placeholder={"Nome completo"} />
          <Input type={"text"} placeholder={"Nome de usuário"} />
          <Input type={"password"} placeholder={"Senha"} />
          <p className={styles.smallText}>As pessoas que usam nosso serviço podem ter enviado suas informações de contato para MyGram. <span>Saiba mais.</span></p>
          <p className={styles.smallText}>Ao se cadastrar, você concorda com nossos <span>Termos, Políticas de Privacidade e Política de Cookies.</span></p>
          <button className="btn" type='submit'>Cadastre-se</button>
        </Form>
      </main>
    </section>
  )
}

export default Cadastro