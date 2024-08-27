import { Image } from "react-native";
import {
  Card,
 
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";

function CardComponent({
  title, imageUrl, key
}: {
  key:number;
  title: string;
  imageUrl: string;
}) {

  const keyUnique = `${key + title}`;
  return (
    <Card key={keyUnique} className="flex m-1">
      <CardHeader>
      <CardTitle>{
title}</CardTitle>
        <Image
          source={{
            uri: `${imageUrl}`,
          }}
          width={100}
          height={100}
        />
       

      </CardHeader>
     
    </Card>
  );
}

export default CardComponent;
