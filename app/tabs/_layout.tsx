import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function Layout(props: any) {

    function icone(nome: any) {
        return (props: any) => <Ionicons name={nome} size={18} color={props.focused ? '#3A98FF' : '#000'} />
    }

    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name='index' options={{
                title: "Home",
                tabBarIcon: icone("home-outline")
                }}
            />    
            <Tabs.Screen name='cursos' options={{
                title: "Cursos",
                tabBarIcon: icone("play-outline")
                }}
            />
            <Tabs.Screen name='config' options={{
                title: "Configurações",
                tabBarIcon: icone("settings-outline")
                }}
            />
            <Tabs.Screen name='mais' options={{
                title: "Configurações",
                tabBarIcon: icone("settings-outline")
                }}
            />                             
        </Tabs>

        
    )
}