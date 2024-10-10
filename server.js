import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())

app.post('/generate-meal-plan', (req, res) => {
  const { goal, dietaryRestrictions, preferences } = req.body

  // This is a mock meal plan generator. In a real application, you would use
  // more sophisticated logic or an external API to generate personalized meal plans.
  const generateMockMealPlan = () => {
    const meals = [
      { type: 'Breakfast', name: 'Oatmeal with fruits', ingredients: ['Oats', 'Banana', 'Berries', 'Almond milk'] },
      { type: 'Lunch', name: 'Grilled chicken salad', ingredients: ['Chicken breast', 'Mixed greens', 'Tomatoes', 'Cucumber', 'Olive oil'] },
      { type: 'Dinner', name: 'Baked salmon with vegetables', ingredients: ['Salmon fillet', 'Broccoli', 'Carrots', 'Lemon', 'Olive oil'] },
    ]

    const days = Array(7).fill(null).map(() => ({ meals: [...meals] }))

    return { days }
  }

  const mealPlan = generateMockMealPlan()

  res.json(mealPlan)
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})