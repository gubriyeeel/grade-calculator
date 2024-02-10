import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, RotateCcw, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const AverageCalculator = () => {
  const [grades, setGrades] = useState([0]);

  const calculateAverage = () => {
    const validGrades = grades.filter((grade) => grade !== 0);

    if (validGrades.length === 0) {
      return "0.00";
    }

    const sum = validGrades.reduce((a, b) => a + b, 0);

    return (sum / validGrades.length).toFixed(2);
  };

  const addGrade = () => {
    setGrades([...grades, 0]);
  };

  const resetGrades = () => {
    setGrades([0]);
  };

  const handleChange = (index: number, value: string) => {
    const parsedValue = parseFloat(value);
    const newGrades = [...grades];
    if (!isNaN(parsedValue)) {
      newGrades[index] = parsedValue;
    } else {
      newGrades[index] = 0;
    }
    setGrades(newGrades);
  };

  const deleteGrade = (index: number) => {
    const newGrades = [...grades];

    if (newGrades.length === 1) {
      return;
    }

    newGrades.splice(index, 1);
    setGrades(newGrades);
  }

  return (
    <Card className="w-full max-w-sm flex flex-col">
      <CardHeader>
        <CardTitle>Average Calculator</CardTitle>
        <CardDescription>
          Get your average grade with this calculator
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="text-center">
          <p className="text-6xl font-semibold pb-2">{calculateAverage()}</p>
        </div>
        <div className="flex flex-col gap-4 pb-4">
          {grades.map((_, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-center gap-4"
            >
              <Input
                type="number"
                onChange={(e) => handleChange(index, e.target.value)}
                placeholder="Grade"
              />
              {index === grades.length - 1 && grades.length > 1 && (
                <X
                  className="h-6 w-6 cursor-pointer hover:scale-110"
                  onClick={() => deleteGrade(index)}
                  color="#9CA3AF"
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-row items-center justify-between gap-2">
          <Button variant="destructive" className="gap-2" onClick={resetGrades}>
            <RotateCcw size={16} />
          </Button>
          <Button variant="default" className="gap-2" onClick={addGrade}>
            <Plus size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AverageCalculator;
