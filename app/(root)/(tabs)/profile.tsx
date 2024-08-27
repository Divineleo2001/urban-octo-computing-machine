import { ScrollView, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CardComponent from "~/components/trial/CardComponent";
import { useGetEventItems } from "~/app/backend/use-get-event-items";

const Profile = () => {


const {data}  = useGetEventItems();

console.log(data?.map((event) => event.itemImagePath));



// console.log(data)



  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Profile</Text>
        <View className="p-5">
          <View className=" flex-1 flex-row flex-wrap">
            <View className="flex-1 flex-row flex-wrap">
              {
                data?.map((event) => <CardComponent 
                key={event.itemId}
                  title={event.itemName}
                  imageUrl={event.itemImagePath}
                />)
              }
             
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
