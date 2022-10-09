
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
const port = 4848;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

const _releaseJobs= [
    {
        "name" : "Deli GCS daily",
        "project" : "deli-ground-control-software",
        "branch" : "development",
        "prepScript" :"prep/install.sh",
        "buildCommand" : "npm run dist",
        "versionNumberStrategy" : "from package.json",
        "webHookUrl" : "",
        "targetLocationForWindows" : "release/win-unpacked/deli-gcs.exe",
        "targetLocationForLinux" : "release/deli-gcs.AppImage",
        "releaseType" : "daily"
    },
    {
        "name" : "Deli GCS stable",
        "project" : "deli-ground-control-software",
        "branch" : "master",
        "prepScript" :"prep/install.sh",
        "buildCommand" : "npm run dist",
        "versionNumberStrategy" : "from package.json",
        "webHookUrl" : "",
        "targetLocationForWindows" : "release/win-unpacked/deli-gcs.exe",
        "targetLocationForLinux" : "release/deli-gcs.AppImage",
        "releaseType" : "stable"
    }
]

app.get('/release-jobs', (req, res) => {
  res.send(JSON.stringify(_releaseJobs))
})

app.post('/save-release-job', (req, res)=>{
    console.log(req.body)
    _releaseJobs.push(req.body)
    res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
