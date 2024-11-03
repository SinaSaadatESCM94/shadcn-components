import { Button } from "@/src/components";

export default function Home() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Button
        label="submit"
        type="submit"
        onClick={() => console.log("clicked")}
      />
    </div>
  );
}
