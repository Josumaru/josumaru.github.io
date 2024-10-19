import { NextPage } from "next";

interface Props {
  data: {
    title: string;
    subtile: string;
  };
}

const SectionTitle: NextPage<Props> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <p className="text-2xl font-medium">{data.title}</p>
      <p className="text-xl font-medium text-muted-foreground">
        {data.subtile}
      </p>
    </div>
  );
};

export default SectionTitle;
