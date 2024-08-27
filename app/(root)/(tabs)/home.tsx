import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useGetEvents } from '~/app/backend/use-get-event'
import CustomButton from '~/components/CustomButton'
import EventDashboard from '~/components/EventDetailsDashboard'






export default function Page() {
  const { user } = useUser()

  const { data} = useGetEvents();

  // console.log(data?.map((event) => event.eventName));

  console.log("break")
const router =  useRouter()

const signOut = async () => {
  // await signOutUser();
  router.replace("/(auth)/sign-in");
}

  return (
    <SafeAreaView>

  
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      {
        data?.map((event) => <EventDashboard event={event}/>)
      }



  
    </SafeAreaView>
  )
}