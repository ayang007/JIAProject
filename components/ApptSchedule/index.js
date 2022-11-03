import React, {Component} from 'react';
import { Text, View, ImageBackground, StackNavigator, Button, TextInput, SafeAreaView} from 'react-native';
import styles from './styles.js';
import StyledButton from '../StyledButton/index.js';
import { NavigationContainer } from '@react-navigation/native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



const ApptSchedule = ({navigation}) => {
  return (
    <SafeAreaView style={styles.image}>

    <CalendarList
      // Callback which gets executed when visible months change in scroll view. Default = undefined
      onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={15}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={15}
      // Enable or disable scrolling of calendar list
      scrollEnabled={true}
      // Enable or disable vertical scroll indicator. Default = false
      showScrollIndicator={true}
      onDayPress={day => {
        console.log('selected day', day);
      }}
      markedDates={{
        '2021-07-13': {selected: true, marked: true, selectedColor: 'blue'},
        '2021-07-26': {selected: true, marked: true, selectedColor: 'orange'},
        '2021-08-30': {selected: true, marked: true, selectedColor: 'red'}
      }}
    />

   


    </SafeAreaView>

);
};

export default ApptSchedule;


/*
 <Agenda
      // The list of items that have to be displayed in agenda. If you want to render item as empty date
      // the value of date key has to be an empty array []. If there exists no value for date key it is
      // considered that the date in question is not yet loaded
      items={{
        '2021-05-22': [{name: 'item 1 - any js object'}],
        '2021-05-23': [{name: 'item 2 - any js object', height: 80}],
        '2021-05-24': [],
        '2021-05-25': [{name: 'item 3 - any js object'}, {name: 'any js object'}]
      }}
      // Callback that gets called when items for a certain month should be loaded (month became visible)
      loadItemsForMonth={(month) => {console.log('trigger items loading')}}
      // Callback that fires when the calendar is opened or closed
      onCalendarToggled={(calendarOpened) => {console.log(calendarOpened)}}
      // Callback that gets called on day press
      onDayPress={(day) => {console.log('day pressed')}}
      // Callback that gets called when day changes while scrolling agenda list
      onDayChange={(day) => {console.log('day changed')}}
      // Initially selected day
      selected={'2021-07-05'}
      // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
      minDate={'2020-04-10'}
      // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
      maxDate={'2022-10-31'}
      // Max amount of months allowed to scroll to the past. Default = 50
      pastScrollRange={15}
      // Max amount of months allowed to scroll to the future. Default = 50
      futureScrollRange={15}
      // Specify how each item should be rendered in agenda
      renderItem={(item, firstItemInDay) => {return (<View />);}}
      // Specify how each date should be rendered. day can be undefined if the item is not first in that day
      renderDay={(day, item) => {return (<View />);}}
      // Specify how empty date content with no items should be rendered
      renderEmptyDate={() => {return (<View />);}}
      // Specify how agenda knob should look like
      renderKnob={() => {return (<View />);}}
      // Specify what should be rendered instead of ActivityIndicator
      renderEmptyData = {() => {return (<View />);}}
      // Specify your item comparison function for increased performance
      rowHasChanged={(r1, r2) => {return r1.text !== r2.text}}
      // Hide knob button. Default = false
      hideKnob={true}
      // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
      showClosingKnob={false}
      // By default, agenda dates are marked if they have at least one item, but you can override this if needed
      markedDates={{
        '2021-05-16': {selected: true, marked: true},
        '2021-05-17': {marked: true},
        '2021-05-18': {disabled: true}
      }}
      // If disabledByDefault={true} dates flagged as not disabled will be enabled. Default = false
      disabledByDefault={true}
      // If provided, a standard RefreshControl will be added for "Pull to Refresh" functionality. Make sure to also set the refreshing prop correctly
      onRefresh={() => console.log('refreshing...')}
      // Set this true while waiting for new data from a refresh
      refreshing={false}
      // Add a custom RefreshControl component, used to provide pull-to-refresh functionality for the ScrollView
      refreshControl={null}
      // Agenda theme
      theme={{
        agendaDayTextColor: 'yellow',
        agendaDayNumColor: 'green',
        agendaTodayColor: 'red',
        agendaKnobColor: 'blue'
      }}
      // Agenda container style
      style={{}}
    />
*/