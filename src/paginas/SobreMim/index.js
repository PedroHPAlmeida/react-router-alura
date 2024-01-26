import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/sobre_mim_foto.jpeg";

const SobreMim = () => {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>Olá, eu sou o Pedro!</h3>
            <img src={fotoSobreMim} alt="Foto Pedro" className={styles.fotoSobreMim}/>

            <p className={styles.paragrafo}>Formado em Análise e Desenvolvimento de Sistemas, atuo como desenvolvedor back-end, com foco principal na automação de processos de entrega de software. Possuo experiência prática em desenvolvimento de API's REST com Python e Flask, bem como em serviços de Cloud AWS, como Lambda, DynamoDB, API Gateway, RDS e SES, além de conhecimentos em Git, GitFlow, Serverless, Scrum e elaboração de documentação técnica.</p>
            <p className={styles.paragrafo}>Durante minha graduação e em projetos pessoais, adquiri conhecimentos em diversas linguagens de programação, frameworks e ferramentas, como Java, Spring Framework, GitHub Actions, Terraform, Docker, MySQL, PostgreSQL e VBA.</p>
            <p className={styles.paragrafo}>Atualmente, meu interesse e foco de estudos estão em ferramentas voltadas para a automação e práticas DevOps, tais como Kubernetes, CI/CD, GitOps e IAC.</p>
        </PostModelo>
    );
}

export default SobreMim;
