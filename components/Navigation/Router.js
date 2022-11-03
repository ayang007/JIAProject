import React from 'react';
import 'react-native-gesture-handler';
import {decode, encode} from 'base-64'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from '../HomePage';
import EntryPage from '../EntryPage/welcomePage';
import Registration from '../Registration'
import NewDailyEntry from '../NewDailyEntry'
import ReviewHistory from '../ReviewHistory';
import CareRoutine from '../CareRoutine';
import MyCareTeam from '../MyCareTeam';
import ApptSchedule from '../ApptSchedule';

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

const Router = (props) => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EntryPage">
                <Stack.Screen 
                    name="EntryPage"
                    component={EntryPage}
                    options={{headerShown: false }}
                />
                <Stack.Screen 
                    name="Registration"
                    component={Registration}
                    options={{headerShown: false }}
                />                
                <Stack.Screen 
                    name="HomePage"
                    component={HomePage}
                    options={{headerShown: false }}
                />
                <Stack.Screen 
                    name="NewDailyEntry"
                    component={NewDailyEntry}
                    options={{headerShown: false }}
                />
                <Stack.Screen 
                    name="ReviewHistory"
                    component={ReviewHistory}
                    options={{headerShown: false }}
                />
                <Stack.Screen 
                    name="CareRoutine"
                    component={CareRoutine}
                    options={{headerShown: false }}
                />
                <Stack.Screen 
                    name="MyCareTeam"
                    component={MyCareTeam}
                    options={{headerShown: false }}
                />
                <Stack.Screen 
                    name="ApptSchedule"
                    component={ApptSchedule}
                    options={{headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );

};

export default Router;