import Botao from "@/components/Botao";
import styles from "@/constants/styles";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function TelaInicial() {
    return (
        <View style={styles.centralizado}>
            <Text>Tela Inicial</Text>
            <Botao>
            <Link href="/stack/nova" style={{color: '#fff'}}>Ir para Tela Nova</Link>
            </Botao>
            
        </View>
    )
}