import Channel from "../models/Channel.model.js"

class ChannelRepository {
    static async create(workspace_id, name) {
        try {
            await Channel.insertOne({
                id_workspace: workspace_id,
                name: name
            })
            console.log('[SERVER] Canal creado exitosamente')
        }
        catch (error) {
            console.error('[SERVER ERROR] No se pudo crear el canal, ', error)
            throw error
        }
    }
    static async getAll() {
        try {
            const found_channels = await Channel.find()
            return found_channels
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }
    static async getById(channel_id) {
        try {
            const found_channel = await Channel.findById(channel_id)
            return found_channel
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }
    static async deleteById(channel_id) {
        try {
            const response = await Channel.findByIdAndDelete(channel_id)
            return response
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }
    static async updateById(channel_id, update_channel) {
        try {
            const response = await Channel.findByIdAndUpdate(channel_id, update_channel)
            return response
        }
        catch (error) {
            console.error(error)
            throw error
        }
    }
}
export default ChannelRepository