import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekSumarry } from '../functions/get-week-summary'

export const getWeekSummaryRoute: FastifyPluginAsyncZod = async app => {
  app.get('/summary', async request => {
    const { summary } = await getWeekSumarry()

    return { summary }
  })
}
