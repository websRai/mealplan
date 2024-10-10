import React, { useState } from 'react'
import axios from 'axios'
import { MealPlanData } from '../types'

interface MealPlanFormProps {
  onSubmit: (mealPlan: MealPlanData) => void
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

const MealPlanForm: React.FC<MealPlanFormProps> = ({ onSubmit }) => {
  // ... (rest of the component code remains the same)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await axios.post<MealPlanData>(`${API_URL}/generate-meal-plan`, formData)
      onSubmit(response.data)
    } catch (err) {
      setError('Failed to generate meal plan. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // ... (rest of the component code remains the same)
}

export default MealPlanForm