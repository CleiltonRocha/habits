import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { BackButton } from "../components/BackButton";
import { CheckBox } from "../components/CheckBox";
import { useState } from "react";
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import { api } from "../lib/axios";

const availableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']


export function New(){

    const [title, setTitle] = useState('');
    const [weekDays, setWeekDays]  = useState<number[]>([]);

    function handleToggleWeekDay(weekDayIndex: number) {
        if(weekDays.includes(weekDayIndex)) {
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        }
        else {
            setWeekDays(prevState => [...prevState, weekDayIndex])
        }
    }

    async function handleCreateNewHabit() {
        try {
            if (!title.trim() || weekDays.length === 0) {
              return Alert.alert('Novo Hábito', 'Informe o nome do hábito e escolha a periodiciade');
            }
            await api.post('/habits', { title, weekDays });

            setTitle('');
            setWeekDays([]);
            
            Alert.alert('Novo hábito', 'Novo hábito criado com sucesso!');
        } catch (error) {
            console.log(error);
            Alert.alert('Ops', 'Não foi possível criar o novo hábito!');
        }
    }

    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView 
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom:100}}
            >
                <BackButton />

                <Text className="mt-6 text-white font-semibold text-3xl">
                    Criar Hábito
                </Text>

                <Text className="mt-6 text-white font-semibold text-base">
                    Qual o seu comprometimento?
                </Text>

                <TextInput 
                    className="h-14 pl-4 rounded-lg mt-3 bg-zinc-900 text-white border-1 border-zinc-700 focus: border-2 focus:border-violet-500"
                    placeholder="Exercícios, dormir bem, etc..."
                    placeholderTextColor={colors.zinc[600]}
                    onChangeText={setTitle}
                    value={title}
                />

                <Text className="mt-4 mb-3 text-white font-semibold text-base">
                    Qual a recorrência?
                </Text>

                {
                    availableWeekDays.map((weekDay, index) => (
                        <CheckBox
                            key={weekDay}
                            title={weekDay}
                            checked={weekDays.includes(index)}
                            onPress={() => handleToggleWeekDay(index)}
                        />
                    ))    
                }

                <TouchableOpacity
                    activeOpacity={0.7}
                    className="flex flex-row items-center justify-center w-full h-14 bg-green-500 rounded-md mt-6"
                    onPress={ handleCreateNewHabit }
                >
                    <Feather 
                        name="check"
                        size={20}
                        color={colors.white}
                    />
                    <Text className="font-semibold text-base text-white ml-2">
                        Confirmar
                    </Text>
                
                </TouchableOpacity>
               
            </ScrollView>
        </View>
    )
}