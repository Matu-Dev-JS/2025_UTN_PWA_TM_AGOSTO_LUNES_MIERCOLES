import connectToMongoDB from "./config/configMongoDB.config.js";
import User from "./models/User.model.js";
import {promises as filesystem} from 'fs'
import Workspace from "./models/Workspace.model.js";
import MemberWorkspace from "./models/MemberWorkspace.model.js";
import Channel from "./models/Channel.model.js";
import UserRepository from "./repositories/user.repository.js";

connectToMongoDB()


async function crearUsuario (name, email, password){
    try{
        await User.insertOne({
            name: name,
            email: email,
            password: password
        })
        console.log('[SERVER]: usuario creado exitosamente')
    }
    catch(error){
        console.error('[SERVER ERROR]: no se pudo crear el usuario', error)
    }
}


async function crearWorkspace (name, url_image) {
    try{
        await Workspace.insertOne({
            name: name,
            url_image: url_image
        })
        console.log('[SERVER]: workspace creado exitosamente')
    }
    catch(error){
        console.error('[SERVER ERROR]: no se pudo crear el workspace', error)
    }
}



async function crearMiembroWorkspace (user_id, workspace_id, role){
    try{
        await MemberWorkspace.insertOne({
            id_user: user_id,
            id_workspace: workspace_id,
            role: role
        })
        console.log('[SERVER]: miembro creado exitosamente')
    }
    catch(error){
         console.error('[SERVER ERROR]: no se pudo crear el miembro', error)
    }
}


async function crearCanal(workspace_id, name){
    try{
        await Channel.insertOne({
            id_workspace:workspace_id,
            name:name,
        })
        console.log('[SERVER]: se creo el canal exitosamente');
        
    }
    catch(error){
        console.error('[SERVER ERROR]: no se pudo crear el canal', error);
    }
}

//crearCanal('68caa8b6244234ce90c4ad24', 'general')

//UserRepository.create('maria', 'maria@gmail.com', 'maria123')
//UserRepository.getAll()
//UserRepository.getById('68c8278638f013c75284ed29')
//User.findById
//UserRepository.deleteById('68cac4b78b1548fa33bd0a31')

/* UserRepository.updateById(
    '68c8278638f013c75284ed29', 
    {
        name: 'pepesito',
        password: 'pepesito_123'
    }
) */