import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Drawer screenOptions={{ headerShown: false }}>
      {/*TelaInicial*/}
      <Drawer.Screen
        name="index" 
        options={{
          drawerLabel: 'Início',
          title: 'Bem vindo!',
          drawerIcon: () => <Ionicons name="home-outline" size={18} color="#3A98FF" />
        }}
      />
      {/*TelaPrimero*/}
      <Drawer.Screen
        name="primeiro" 
        options={{
          drawerLabel: 'Primeiro Componente',
          title: 'Primeiro Componente',
          drawerIcon: () => <Ionicons name="heart-dislike-circle-outline" size={18} color="#3A98FF" />
        }}
      />

      {/*TelaContador*/}
      <Drawer.Screen
        name="contador" 
        options={{
          drawerLabel: 'Contador',
          title: 'Contador',
          drawerIcon: () => <Ionicons name="add" size={18} color="#3A98FF" />
        }}
      />

      {/*TelaContador*/}
      <Drawer.Screen
        name="tabs" 
        options={{
          drawerLabel: 'tabs',
          title: 'tabs',
          drawerIcon: () => <Ionicons name="albums-outline" size={18} color="#3A98FF" />
        }}
      />

      {/*TelaStack*/}
      <Drawer.Screen
        name="stack" 
        options={{
          drawerLabel: 'Stack',
          title: 'Stack',
          drawerIcon: () => <Ionicons name="logo-stackoverflow" size={18} color="#3A98FF" />
        }}
      />

    </Drawer>
  </GestureHandlerRootView>
  );
}
