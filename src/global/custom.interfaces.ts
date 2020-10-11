import { FastifyReply } from 'fastify';
import { Users} from 'src/users/models/users.entity';
//import {Response} from 'express'

export interface Reply extends FastifyReply{
  view(page: string, data?: object): FastifyReply
}

export type UsersWithCount = {
  users: Users[],
  count?: number
}