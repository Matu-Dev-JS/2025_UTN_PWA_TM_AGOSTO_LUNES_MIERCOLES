import mongoose from "mongoose";

const channelSchema = new mongoose.Schema(
    {
        id_workspace: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Workspace',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        active: {
            type: Boolean,
            default: true,
        },
        created_at: {
            type: Date,
            default: Date.now,
            required: true
        },
        modified_at: {
            type: Date,
            default: null,
        },
    }
)

const Channel= mongoose.model('Channel', channelSchema);

export default Channel;