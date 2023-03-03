import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from '@expo/vector-icons';
import colors from 'tailwindcss/colors';

export function HabitsEmpty() {

    const { navigate } = useNavigation();

    return(
        <View
            className="flex-column justify-center justify-items-center w-full"
        >
            <Text
                className="text-zinc-400 text-base text-center"
            >
                Você ainda não está monitorando nenhum hábito!
            </Text>
            <TouchableOpacity 
            activeOpacity={0.7}
            className="flex-row mt-4 justify-center h-14 px-4 border bg-violet-500 rounded-lg items-center"
            onPress={() => navigate('new')}
        >
            <Feather 
                name="plus"
                color={colors.white}
                size={20}
            /> 
            <Text className="text-white ml-2 font-semibold text-base">
                Novo
            </Text>
        </TouchableOpacity>
        </View>
       
        

        
    )
}