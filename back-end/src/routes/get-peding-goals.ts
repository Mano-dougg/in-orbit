import z from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { createGoal } from "../functions/create-goal";
import { getWeekPendingGoals } from "../functions/get-week-pending-goals";

export const getPedingGoalsRoute: FastifyPluginAsyncZod = async (app) => {
    app.get('/pedingGoals', async request => {
        const { pedingGoals } = await getWeekPendingGoals()
      
        return { pedingGoals }
      })
}