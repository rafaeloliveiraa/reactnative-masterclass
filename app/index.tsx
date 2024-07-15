import styles from "@/constants/styles";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function TelaInicial() {
  return (
    <View
      style={styles.centralizado}
    >
      <Ionicons name="logo-react" size={100} />
      <View>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Materclass React Native</Text>
        <Text style={{ fontSize: 16}}>Expo Router</Text>
      </View>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
