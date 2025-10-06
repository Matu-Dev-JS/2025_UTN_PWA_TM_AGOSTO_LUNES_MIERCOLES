import moongoose from "mongoose";

const workspaceSchema = new moongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        url_image: {
            type: String,
        },
        created_at: {
            type: Date,
            default: Date.now,
            required: true
        },
        modified_at: {
            type: Date
        },
        active: {
            type: Boolean,
            default: true,
            required: true
        }
    }
)

const Workspace = moongoose.model('Workspace', workspaceSchema)

export default Workspace