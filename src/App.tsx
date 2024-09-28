import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import GradeCalculator from "@/components/grade-calculator";
import AverageCalculator from "@/components/average-calculator";
import Credits from "@/components/credits";

function App() {
  return (
    <main>
      <section className="flex flex-col items-center justify-start pt-8 px-4">
        <Tabs defaultValue="grade-calculator" className="w-full max-w-sm">
          <TabsList className="w-full h-fit p-1">
            <TabsTrigger className="w-full" value="grade-calculator">
              Grade Calculator
            </TabsTrigger>
            <TabsTrigger className="w-full" value="average-calculator">
              Average Calculator
            </TabsTrigger>
          </TabsList>

          <TabsContent className="w-full" value="grade-calculator">
            <GradeCalculator />
          </TabsContent>
          <TabsContent value="average-calculator">
            <AverageCalculator />
          </TabsContent>
        </Tabs>
      </section>
      <Credits />
    </main>
  );
}

export default App;
