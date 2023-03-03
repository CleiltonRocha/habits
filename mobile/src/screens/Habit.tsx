import { useState, useEffect } from "react";
import { ScrollView, View, Text, Alert } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import dayjs from 'dayjs';
import { generateProgressPercentage } from "../utils/generate-progress-percentage"; 
import { ProgressBar } from "../components/ProgressBar";
import { CheckBox } from "../components/CheckBox";
import { Loading } from "../components/Loading";
import { HabitsEmpty } from "../components/HabitsEmpty";
import { api } from "../lib/axios";
import clsx from "clsx";

interface Params {
    date: string
}

interface DayInfoProps {
    completedHabits: string[];
    possibleHabits: {
        id: string,
        title: string;
    }[];
}

export function Habit(){

    const [loading, setLoading] = useState(true);
    const[dayInfo, setDayInfo] = useState<DayInfoProps | null>(null);
    const[completedHabits, setCompletedHabits] = useState<string[]>([])

    const route = useRoute();
    const { date } = route.params as Params;

    const parsedDate = dayjs(date);
    const dayOfWeek = parsedDate.format('dddd');
    const dayAndMonth = parsedDate.format('DD/MM')

    const isDateInPast = parsedDate.endOf('day').isBefore(new Date())

    const habitsProgress = dayInfo?.possibleHabits.length 
        ? generateProgressPercentage(dayInfo.possibleHabits.length, completedHabits.length) 
        : 0;

    async function fetchHabits() {
        try {
            setLoading(true);

            const response = await api.get('/day', {params: { date }})
            
            setDayInfo(response.data);
            setCompletedHabits(response.data.completedHabits)

        } catch (error) {
            console.log(error)
            Alert.alert('Erro', 'Não foi possivel carregar as informações dos hábitos')
        }
        finally {
            setLoading(false);
        }
    }

    async function handleTogglehabit(habitId: string) {

        try {

            await api.patch(`/habits/${habitId}/toggle`);

            if(completedHabits.includes(habitId)) {
                setCompletedHabits(prevState => prevState.filter(habit => habit !== habitId));
            } else {
                setCompletedHabits(prevState => [...prevState, habitId])
            }

        } catch (error) {
            console.log(error);
            Alert.alert('Ops!','Não foi possível atualizar o status do Hábito!');
        }

        
    }

    useEffect(() => {
        fetchHabits();
    }, [])

    if(loading) {
        return (
            <Loading />
        )
    }
    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}
            >
                <BackButton />

                <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
                    {dayOfWeek}
                </Text>

                <Text className="text-white mt-2 font-extrabold text-3xl">
                    {dayAndMonth}
                </Text>

                <ProgressBar 
                    progress={habitsProgress}
                />

                <View className="mt-6">
                    
                    {
                        dayInfo!.possibleHabits.length > 0 ? 
                        dayInfo?.possibleHabits.map(habit => (
                            <CheckBox
                                key={habit.id} 
                                title={habit.title}
                                onPress={() => handleTogglehabit(habit.id)}
                                checked={completedHabits.includes(habit.id)}
                                className={clsx("", {
                                    ["opacity-50"]: isDateInPast
                                })}
                            />
                        ))
                        :
                        <HabitsEmpty />

                       }
                    
                </View>

                {
                    isDateInPast && (
                        <Text
                            className="text-white mt-10 text-center"
                        >
                            Você não pode editar hábitos de uma data passada.
                        </Text>
                    )
                }

            </ScrollView>
        </View>
    )
}