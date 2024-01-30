import "./App.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import toast from "react-hot-toast";


function App() {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<number>(0.0);

  const calculate = () => {
    const isValidInput =
      !isNaN(totalItems) && !isNaN(score) && totalItems !== 0;

    if (isValidInput) {
      const calculatedResult = (score / totalItems) * 60 + 40;
      setResult(calculatedResult);

      if (calculatedResult >= 75) {
        toast.success("Congrats, 'tol!");
      } else {
        toast.error("Sorry, bawi na lang!");
      }
    } else {
      setResult(0.0);
      toast.error("Check mo input, baka may kulang.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      calculate();
    }
  };

  return (
    <main className="flex flex-col md:justify-center items-center justify-start h-screen w-screen p-2">
      <Card className="w-full max-w-lg flex flex-col">
        <CardHeader>
          <CardTitle>Grade Calculator 🐐</CardTitle>
          <CardDescription>Hindi mo na kailagan mag-isip</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4 text-center flex-wrap">
              <Input
                type="number"
                placeholder="Total items"
                className="w-full"
                onChange={(e) => setTotalItems(e.target.valueAsNumber)}
                onKeyDown={handleKeyDown}
              />
              <Input
                type="number"
                placeholder="Score"
                className="w-full"
                onChange={(e) => setScore(e.target.valueAsNumber)}
                onKeyDown={handleKeyDown}
              />

              <Button onClick={calculate}>Calculate</Button>
            </div>
            <p className="text-5xl font-semibold text-center pt-2">
              {result.toFixed(2)}
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <div className="mt-4 flex flex-col text-center">
            <span className="text-sm text-foreground">@gubriyeeel</span>
            <div className="flex gap-4 text-center">
              <a
                href="https://github.com/gubriyeeel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </a>
              <i>·</i>
              <a
                href="https://www.facebook.com/gubriyeeel/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}

export default App;
