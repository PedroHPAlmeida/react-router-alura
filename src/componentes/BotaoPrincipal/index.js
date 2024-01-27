import styles from "./BotaoPrincipal.module.css";

const BotaoPrincipal = ({ children, tamanho }) => {
    return (
        <button className={`
            ${styles.botao} 
            ${styles[tamanho]}
        `}>{children}</button>
    );
}

export default BotaoPrincipal;
