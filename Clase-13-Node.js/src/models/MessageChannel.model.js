import mongoose from "mongoose";
const MessageChannelSchema= new mongoose.Schema(
    {
        chanel_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'Channel',
        },
        sender_member_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'MemberWorkspace',
        },
        content:{
            type:String,
            required:true,
        },
        created_at:{
            type:Date,
            default:Date.now,
            required:true,
        }
    }
)
const MessageChannel= mongoose.model('ChannelMessages', MessageChannelSchema)
export default MessageChannel