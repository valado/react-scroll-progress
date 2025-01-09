import { FC } from "react";
import { ScrollProgressIndicator } from "../lib/ScrollProgressIndicator";

const COUNT = 150;
const LoremIpsumParagraph: FC<{ idx: number }> = ({ idx }) => (
  <p>
    {idx} Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem
    Ipsum
  </p>
);

const App: FC = () => (
  <>
    <div style={{ textAlign: "center", width: "100%" }}>
      {Array.from({ length: COUNT }, (_, i) => (
        <LoremIpsumParagraph idx={i} />
      ))}
    </div>
    <ScrollProgressIndicator startColor="pink" endColor="purple" />
  </>
);

export default App;
