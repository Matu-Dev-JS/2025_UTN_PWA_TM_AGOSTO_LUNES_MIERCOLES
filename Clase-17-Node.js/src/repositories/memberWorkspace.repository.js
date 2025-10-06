import MemberWorkspace from "../models/MemberWorkspace.model.js";

class MemberWorkspaceRepository {
    static async create(user_id, workspace_id, role) {
        try {
            await MemberWorkspace.insertOne({
                user_id: user_id,
                workspace_id: workspace_id,
                role: role
            })
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo crear el miembro de workspace', error);
            throw error
        }
    }
    static async getAll() {
        try {
            const member_worksapces = await MemberWorkspace.find()
            return member_worksapces
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo obtener la lista de miembros')
            throw error
        }
    }
    static async getById(member_id) {
        try {
            const member_found = await MemberWorkspace.findById(member_id)
            return member_found
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo eliminar el miembro con el id' + member_id, error);
            throw error
        }
    }
    static async deleteById(member_id) {
        try {
            const member_workspeace_delete = await MemberWorkspace.findByIdAndDelete(member_id)
            return member_workspeace_delete
        }
        catch (error) {
            console.error('[SERVER ERROR]: no se pudo eliminar el miembro con el id' + member_id, error);
            throw error
        }
    }
    static async updateById(member_id, member_update) {
        try {
            const update = await MemberWorkspace.findByIdAndUpdate(member_id, member_update)
            return update
        }
        catch (error) {
            {
                console.error('[SERVER ERROR]: no se pudo actualizar el miembro', error)
                throw error
            }
        }
    }
}

export default MemberWorkspaceRepository