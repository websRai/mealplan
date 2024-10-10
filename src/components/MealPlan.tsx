import React from 'react'
import { MealPlanData } from '../types'

interface MealPlanProps {
  mealPlan: MealPlanData
  onReset: () => void
}

const MealPlan: React.FC<MealPlanProps> = ({ mealPlan, onReset }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Your Personalized Meal Plan</h2>
      {mealPlan.days.map((day, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Day {index + 1}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {day.meals.map((meal, mealIndex) => (
              <div key={mealIndex} className="bg-white p-3 rounded shadow">
                <h4 className="font-medium text-lg mb-2">{meal.type}</h4>
                <p>{meal.name}</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
                  {meal.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={onReset}
        className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Generate New Plan
      </button>
    </div>
  )
}

export default MealPlan