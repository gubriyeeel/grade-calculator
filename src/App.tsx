import GradeCalculator from "@/components/grade-calculator";
import AverageCalculator from "@/components/average-calculator";
import Credits from "./components/credits";

function App() {
  return (
    <main className="flex flex-col justify-between h-full min-h-screen w-screen pb-4 ">
      <section className="flex flex-col items-center  justify-start w-screen sm:justify-center sm:flex-row gap-4 p-4 sm:p8 sm:items-start sm:pt-8">
        <GradeCalculator />
        <AverageCalculator />
      </section>
      <Credits />
    </main>
  );
}

export default App;
