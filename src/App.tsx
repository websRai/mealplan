import React, { useState } from 'react'
import { Utensils, Activity, AlertCircle } from 'lucide-react'
import MealPlanForm from './components/MealPlanForm'
import MealPlan from './components/MealPlan'
import { MealPlanData } from './types'

function App() {
  const [mealPlan, setMealPlan] = useState<MealPlanData | null>(null)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Personalized Meal Plan Generator</h1>
        <p className="text-gray-600">Create your custom meal plan based on your goals and preferences</p>
      </header>
      <main className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center">
            <Utensils className="text-green-500 mr-2" />
            <span>Tailored Recipes</span>
          </div>
          <div className="flex items-center">
            <Activity className="text-blue-500 mr-2" />
            <span>Fitness Goal Oriented</span>
          </div>
          <div className="flex items-center">
            <AlertCircle className="text-red-500 mr-2" />
            <span>Dietary Restrictions Considered</span>
          </div>
        </div>
        {mealPlan ? (
          <MealPlan mealPlan={mealPlan} onReset={() => setMealPlan(null)} />
        ) : (
          <MealPlanForm onSubmit={setMealPlan} />
        )}
      </main>
    </div>
  )
}

export default App