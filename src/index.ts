import './types'
import './hooks'
import { section } from './steps/section'
import { step } from './steps/step'
import { errorMessage } from './steps/errorMessage'

Cypress.Commands.addAll({
  step,
  section,
  errorMessage,
})

export { section, step, errorMessage }