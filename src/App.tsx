import GradeCalculator from "@/components/grade-calculator";
import AverageCalculator from "@/components/average-calculator";

function App() {
  return (
    <main className="h-full w-screen bg-gradient-to-t from-slate-600 to-slate-900 sm:h-screen">
      <section className="flex flex-col items-center  justify-start w-screen md:justify-center md:flex-row   gap-4 p-4 md:p8 md:items-start md:pt-8">
        <GradeCalculator />
        <AverageCalculator />
      </section>
    </main>
  );
}

export default App;
