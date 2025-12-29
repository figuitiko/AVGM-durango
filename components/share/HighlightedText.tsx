export const HighlightedText = ({
  text1,
  text2,
}: {
  text1: string;
  text2: string;
}) => {
  return (
    <div className="flex justify-center">
      <h2 className="text-3xl md:text-5xl font-bold flex gap-1 items-center">
        <span className="text-fourth">{text1}</span>
        <span className="text-third">{text2}</span>
      </h2>
    </div>
  );
};
