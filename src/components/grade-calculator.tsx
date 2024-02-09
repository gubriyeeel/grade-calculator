import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useState } from "react";
import toast from "react-hot-toast";

const GradeCalculator = () => {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [result, setResult] = useState<number>(0.0);
  const [base, setBase] = useState<number>(60);

  const calculate = () => {
    const isValidInput =
      !isNaN(totalItems) && !isNaN(score) && totalItems !== 0;

    if (isValidInput) {
      const calculatedResult = (score / totalItems) * base + 40;
      setResult(calculatedResult);

      if (calculatedResult >= 75) {
        toast.success("Passed");
      } else {
        toast.error("Failed");
      }
    } else {
      setResult(0.0);
      toast.error("Something went wrong. Please check your input values.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      calculate();
    }
  };

  return (
    <Card className="w-full max-w-sm flex flex-col">
      <CardHeader>
        <CardTitle>Grade Calculator</CardTitle>
        <CardDescription>
          Get your grade percentage with this calculator
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 text-center">
            <p className="text-6xl font-semibold pb-2">
              {result.toFixed(2)}
            </p>
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
            <div className="flex flex-col gap-1 cursor-pointer pb-4">
              <Input
                type="number"
                placeholder="Base"
                className="w-full"
                onChange={(e) => setBase(e.target.valueAsNumber)}
                onKeyDown={handleKeyDown}
                defaultValue={base}
              />
              <TooltipProvider delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger>
                    <p className="text-left text-[12px] text-muted-foreground">
                      What is base?
                    </p>
                  </TooltipTrigger>
                  <TooltipContent align="start">
                    <p>
                      Base is the lowest grade you can get. Change accordingly
                      to your grading system.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <Button onClick={calculate}>Calculate</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GradeCalculator;
