import { z } from 'zod'

export const FindBloodBankFormSchema = z.object({
  state: z.string({
    required_error: "Please select a State",
  }),
  city: z.string({
    required_error: 'Please select a City',
  }),
  bloodtype: z.string({
    required_error: 'Please select a Blood Type',
  }),
  component: z.string({
    required_error: 'Please select a Blood Component',
  })
})
