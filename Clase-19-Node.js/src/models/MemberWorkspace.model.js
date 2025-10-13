import mongoose from "mongoose"

const memberWorkspaceSchema =  new mongoose.Schema(
    {
        id_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        id_workspace: {
            //id_workspace sera un id de mongoDB
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace',
            required: true
        },
        role: {
            type: String,
            default: 'user'
        },
        created_at: {
            type: Date,
            default: Date.now,
            required: true
        }
    }
)

const MemberWorkspace = mongoose.model('MemberWorkspace', memberWorkspaceSchema)

export default MemberWorkspace
