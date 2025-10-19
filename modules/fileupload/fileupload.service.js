const db = require('./../../models/index')

const UserData = db.user_datas;


async function fileuploadService(req, res) {
    if (req.files.profile_picture) {
        const path = 'public/photos'
        const basepath = 'public/photos/' + req.files.profile_picture.name

        const file = req.files.profile_picture

        const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

        if (!allowedExtensions.exec(file.name)) {
            return res.status(400).json({
               message : 'Ce type de fichier n\'est pas autorisé.'
            });
        }

        const size_max = 5 * 1024 * 1024;

        if (size_max < (file.size)) {
            return res.status(400).json({
                message : 'Max 5Mo'
            });
        }

        const user_data = await UserData.create({
            profile_picture : basepath
        })

        
        return res.status(200).json({
            message: "sucess",
            "data": user_data
        })



        req.files.profile_picture.mv(basepath, async function (error) {
            console.log(error)
        })
    }
    
}

module.exports = fileuploadService;