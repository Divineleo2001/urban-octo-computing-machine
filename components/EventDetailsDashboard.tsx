import { View, Text } from 'react-native'
import React from 'react'
import { Events } from '~/types/type'

const EventDashboard = ({event}: {event : Events}) => {
  return (
    <View key={event.eventId}>
      <Text className='text-black text-xl text-center'>
        {event.eventName}
      </Text>
    </View>
  )
}

export default EventDashboard