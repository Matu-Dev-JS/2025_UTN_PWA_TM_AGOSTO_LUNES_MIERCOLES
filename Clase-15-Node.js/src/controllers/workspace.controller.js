import WorkspaceRepository from "../repositories/workspace.repository.js"

class WorkspaceController {
    static async getAll (request, response){
        const workspaces = await WorkspaceRepository.getAll()

        response.send(
            {
                workspaces: workspaces
            }
        )
    }
}

export default WorkspaceController