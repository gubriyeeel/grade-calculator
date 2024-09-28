import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, RotateCcw, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AverageCalculator = () => {
  const [grades, setGrades] = useState([""]);

  const calculateAverage = () => {
    const validGrades = grades
      .map((grade) => parseFloat(grade))
      .filter((grade) => !isNaN(grade) && grade !== 0);

    if (validGrades.length === 0) {
      return "0.00";
    }

    const sum = validGrades.reduce((a, b) => a + b, 0);

    return (sum / validGrades.length).toFixed(2);
  };

  const addGrade = () => {
    setGrades([...grades, ""]);
  };

  const resetGrades = () => {
    setGrades([""]);
  };

  const handleChange = (index: number, value: string) => {
    const newGrades = [...grades];
    newGrades[index] = value;
    setGrades(newGrades);
  };

  const deleteGrade = (index: number) => {
    const newGrades = [...grades];

    if (newGrades.length === 1) {
      return;
    }

    newGrades.splice(index, 1);
    setGrades(newGrades);
  };

  return (
    <Card className="w-full flex flex-col">
      <CardHeader>
        <CardTitle>Average Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="text-center">
            <p className="text-6xl font-semibold pb-2">{calculateAverage()}</p>
          </div>
          <div className="flex flex-col gap-4 pb-4">
            {grades.map((grade, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center gap-4"
              >
                <Input
                  type="number"
                  value={grade}
                  onChange={(e) => handleChange(index, e.target.value)}
                  placeholder="Grade"
                />
                {grades.length > 1 && (
                  <X
                    className="size-4 cursor-pointer hover:scale-105"
                    onClick={() => deleteGrade(index)}
                    color="#9CA3AF"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <Button
              size="sm"
              variant="ghost"
              className="gap-2"
              onClick={resetGrades}
            >
              <RotateCcw size={16} />
            </Button>
            <Button
              variant="default"
              className="gap-2 text-background"
              onClick={addGrade}
            >
              <Plus size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AverageCalculator;
