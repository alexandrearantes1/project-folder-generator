const { execSync } = require('child_process');
const fs = require('fs');

// get folderName from command line argument
const folderName = process.argv[2];

// check if the user passed a folder name
if(folderName === undefined) {
    console.log('Specify a valid directory name');
} 
else if (fs.existsSync(folderName)) {
      console.log(`Project name ${folderName} already exists!!! Choose a different name`);
}
else {
    try {
        // making directories
        console.log('creating the project folders...')
        fs.mkdirSync(folderName);
        fs.mkdirSync(`${folderName}/views`);
        fs.mkdirSync(`${folderName}/scripts`);

        // creating basic files
        fs.writeFileSync(`${folderName}/views/header.ejs`, '');
        fs.writeFileSync(`${folderName}/views/nav.ejs`, '');
        fs.writeFileSync(`${folderName}/views/footer.ejs`, '');
        fs.writeFileSync(`${folderName}/views/styles.css`, '');
        fs.writeFileSync(`${folderName}/scripts/app.js`, '');
        fs.writeFileSync(`${folderName}/index.js`, '');
        
        // // initializing project folder and installing dependencies
        console.log(`initializing project directory...${folderName}`)
        execSync('npm init -y', {cwd:folderName});
        console.log('project directory initialized')
        console.log('installing express...')
        execSync('npm i express', {cwd:folderName});
        console.log('installing mongoose...')
        execSync('npm i mongoose', {cwd:folderName});
        console.log('installing ejs...')
        execSync('npm i ejs', {cwd:folderName});

    } catch(err) {
        console.log('Error! - ', err); 
    }
}