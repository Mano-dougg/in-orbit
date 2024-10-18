import fastify from 'fastify'
import { createGoalRoute } from '../routes/create-goal'
import { createCompletionRoute } from '../routes/create-completion'
import { getPedingGoalsRoute } from '../routes/get-peding-goals'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { getWeekSummaryRoute } from '../routes/get-week-summary'
import fastifyCors from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(createGoalRoute)
app.register(createCompletionRoute)
app.register(getPedingGoalsRoute)
app.register(getWeekSummaryRoute)

app
  .listen({
    port: 3000,
  })
  .then(() => {
    console.log('Http server running!')
  })
