import experiences from 'src/shared/mock/experiences.json'
import categories from 'src/shared/mock/categories.json'
import experienceCategories from 'src/shared/mock/experience_categories.json'
import { Experience, Category, ExperienceCategory } from 'src/shared/mock/MockTypes'

// Helper to get categories for an experience
export const getCategoriesForExp = (exp_id: string) => {
  const catIds = (experienceCategories as ExperienceCategory[])
    .filter(ec => ec.exp_id === exp_id)
    .map(ec => ec.cat_id)
  return (categories as Category[]).filter(cat => catIds.includes(cat.cat_id)).map(cat => cat.name)
}

// Helper to get categories for a business (aggregate all categories from its experiences)
export const getCategoriesForBusiness = (business_id: string) => {
  // Find all experiences for this business
  const bizExps = (experiences as Experience[]).filter(exp => exp.business_id === business_id)
  // Collect all category names from those experiences
  const catNames = new Set<string>()
  bizExps.forEach(exp => {
    getCategoriesForExp(exp.exp_id).forEach(name => catNames.add(name))
  })
  return Array.from(catNames)
}
