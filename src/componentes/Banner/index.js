import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

const Banner = () => {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo!</h1>
                <p className={styles.paragrafo}>Formado em Análise e Desenvolvimento de Sistemas, atuo como desenvolvedor back-end, com foco principal na automação de processos de entrega de software. Possuo experiência prática em desenvolvimento de API's REST com Python e Flask, bem como em serviços de Cloud AWS, como Lambda, DynamoDB, API Gateway, RDS e SES, além de conhecimentos em Git, GitFlow, Serverless, Scrum e elaboração de documentação técnica.</p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden
                    alt="Círculo"
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Pedro Henrique"
                />
            </div>
        </div>
    );
}

export default Banner;
