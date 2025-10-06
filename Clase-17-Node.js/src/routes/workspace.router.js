import express from 'express'
import WorkspaceRepository from '../repositories/workspace.repository.js'
import WorkspaceController from '../controllers/workspace.controller.js'

const workspaceRouter = express.Router()


workspaceRouter.get(
    '/all',
    WorkspaceController.getAll
)



export default workspaceRouter