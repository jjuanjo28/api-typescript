import { DataTypes } from "sequelize";
import connect from "../database";

const PersonModel = connect.define("people",{
    idPersona: {type: DataTypes.NUMBER,
        primaryKey: true   
    },
    name:{type: DataTypes.STRING},
    email:{type: DataTypes.STRING},
    password:{type: DataTypes.STRING},
    user_photo:{type: DataTypes.BLOB},
    type_user:{type: DataTypes.STRING}

   })

 export default PersonModel