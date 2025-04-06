import { FC } from "react";
import { Section } from "./Section";
import { Card, CardContent, CardHeader, CardTitle } from "./cards";

interface AboutItem {
  title: string;
  description: string[];
}

interface Props {
  items: AboutItem[];
}

export const About: FC<Props> = (props:Props) => {
  return (
    <Section id="about" class="p-4">
      {props.items.map((item) => (
        <Card key={item.title}>
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardContent>
              {item.description.map((description, index) => (
                <p key={index} className="whitespace-pre-wrap">{description}</p>
              ))}
            </CardContent>
          </CardHeader>
        </Card>
      ))}
    </Section>
  )
}