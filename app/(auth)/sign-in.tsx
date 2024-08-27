import CustomButton from "~/components/CustomButton";
import InputField from "~/components/InputField";
import OAuth from "~/components/OAuth";
import { icons, images } from "~/constants";
import { Link, useRouter } from "expo-router";
import { useCallback, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { useSignIn } from "@clerk/clerk-expo";

const SignIn = () => {
  const { isLoaded, setActive, signIn } = useSignIn();
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // const onSignInPress = useCallback(async () => {
  //   if (!isLoaded) {
  //     return;
  //   }

  //   try {
  //     const signInAttempt = await signIn.create({
  //       identifier: form.email,
  //       password: form.password,
  //     });

  //     if (signInAttempt.status === "complete") {
  //       await setActive({ session: signInAttempt.createdSessionId });
  //       router.replace("/");
  //     } else {
  //       // See https://clerk.com/docs/custom-flows/error-handling
  //       // for more info on error handling
  //       console.error(JSON.stringify(signInAttempt, null, 2));
  //     }
  //   } catch (err: any) {
  //     console.error(JSON.stringify(err, null, 2));
  //   }
  // }, [isLoaded, form.email, form.password]);

  const onSignInPress = async () => {
    console.log("clicked")
  }
  

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px] ">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Welcome Back
          </Text>
        </View>
        <View className="p-5">
          <InputField
            label="Email"
            placeholder="Enter your Email"
            icon={icons.email}
            value={form.email}
            onChangeText={(value: string) => setForm({ ...form, email: value })}
          />
          <InputField
            label="Password"
            placeholder="Enter your Password"
            icon={icons.lock}
            secureTextEntry={true}
            value={form.password}
            onChangeText={(value: string) =>
              setForm({ ...form, password: value })
            }
          />
          <CustomButton
            title="Sign Up"
            onPress={onSignInPress}
            className="mt-10"
          />

          <OAuth />
          <Link
            href="/sign-up"
            className="text-center text-general-200 text-sm "
          >
            <View className="flex flex-row items-center gap-2">
              <Text>Don't have an account ?</Text>

              <Text className="text-primary-500 ">Sign up</Text>
            </View>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;
