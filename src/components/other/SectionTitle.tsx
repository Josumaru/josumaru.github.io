import { NextPage } from "next";

interface Props {
  props: {
    title: string;
    subtile: string;
  };
}

const SectionTitle: NextPage<Props> = ({ props }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="text-2xl font-medium">{props.title}</p>
      <p className="text-xl font-medium text-muted-foreground">
        {props.subtile}
      </p>
    </div>
  );
};

export default SectionTitle;
