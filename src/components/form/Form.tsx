import { FC } from "react";
import { View } from "react-native";
import { TFormProps } from "./types";
import Input from "../../UI/inputs/Input/Input";
import IntervalInput from "../../UI/inputs/Interval/Interval";
import TextArea from "../../UI/inputs/TextArea/TextArea";
import Selection from "../../UI/inputs/Selection/Selection";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import BigButton from "../../UI/buttons/Big/BigButton";

const Form: FC<TFormProps> = ({ inputs, onSubmit, submitTitle }) => {
  return (
    <View>
      {inputs?.noTitle?.map((input, index) => {
        switch (input.type) {
          case "input":
            return <Input key={input.id} {...input} />;

          case "interval":
            return <IntervalInput key={input.id} {...input} />;
          case "textArea":
            return <TextArea key={input.id} {...input} />;
          case "selection":
            return <Selection key={input.id} {...input} />;
          case "segment":
            return <SegmentedControl key={input.id} {...input} />;
          // case "address":
          // case "photo":
        }
      })}
      <BigButton title={submitTitle} onPress={onSubmit} />
    </View>
  );
};

export default Form;
