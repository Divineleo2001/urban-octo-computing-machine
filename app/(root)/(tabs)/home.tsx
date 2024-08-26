import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '~/components/CustomButton'

export default function Page() {
  const { user } = useUser()

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
      <SignedOut>
        <Link href="/sign-in">
          <Text>Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>

      <CustomButton
        title='sign Out'
        onPress={() => signOut()}
      />
    </SafeAreaView>
  )
}