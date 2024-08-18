import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Platform,
} from "react-native";
import React from "react";
import { InputFieldProps } from "@/types/type";

const InputField = ({
  label,
  labelStyle,
  icon,
  secureTextEntry = false,
  containerStyle,
  inputStyle,
  iconStyle,
  className,
  ...props
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback>
        <View className="my-2 w-full ">
          <Text className={`text-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View
            className={`flex flex-row justify-start items-center relative bg-neutral-100 shadow-md shadow-neutral-950/70 rounded-xl border border-neutral-100 focus:border-primary-500 ${containerStyle}`}
          >
            {icon && <Image source={icon} className={`w-6 h-6 mx-3 ${iconStyle}`} />}
            <TextInput
         
                className={`rounded-xl p-2 font-JakartaSemiBold text-[12px] flex-1 ${inputStyle} text-left`} 
                secureTextEntry={secureTextEntry}
                {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InputField;
