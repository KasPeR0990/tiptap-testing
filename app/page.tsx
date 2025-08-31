import RichTextEditor from "@/components/rich-text-editor";
import { Button } from "../components/ui/button";

export default function Home() {
  return (
    <div>
      <div className="text-center mt-20 text-3xl font-sans font-bold">
        <h1>TipTap + React</h1>
      </div>
      <div className="min-height-[100%] overflow-y-auto flex justify-center align-center mt-40">
        <RichTextEditor />
      </div>
    </div>
  );
}
