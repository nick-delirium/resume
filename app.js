const commands = {
    'help': {
        'text': `$ <b>help</b><br>
        >&nbsp;Welcome to my CLI resume.<br>
        &nbsp;Available commands list is:<br>
        &nbsp;- help<br>
        &nbsp;- about<br>
        &nbsp;- projects<br>
        &nbsp;- contacts<br>
        &nbsp;- funfact`
    },
    'about': {
        'text': `$ <b>about</b> <br>
        >&nbsp;Hello!<br>
        <br>
        &nbsp;My name is Nikita and I'm a backend developer. <br>
        &nbsp;This simple CLI-like resume will guide you through projects I've made<br>
        &nbsp;and will tell you a bit about my experience. <br>
        <br>
        &nbsp;My main skills are: <br>
        &nbsp;- Javascript+Flow <br>
        &nbsp;- Node.js         <br>
        &nbsp;- Vue             <br>
        &nbsp;- Express         <br>
        &nbsp;- HTML/CSS/LESS   <br>
        &nbsp;- Koa2            <br>
        &nbsp;- jQuery          <br>
        &nbsp;- Python          <br>
        &nbsp;- PHP(LAMP)       <br>
        &nbsp;- Watching funny cat videos in the office <br>
        <br>
        &nbsp;You can find list of all available commands by typing "help" in console. <br>
        &nbsp;This thing is written without any JS libs with just pure javascript<br>
        &nbsp;by <a href='https://github.com/sylenien'>@sylenien</a>, 2018.`
    },
    'projects': {
        'text': `$ <b>projects</b> <br>
        >&nbsp;Here lies list of my work experience and pet projects I made. <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <br>
        &nbsp;&nbsp;Corporative/work projects: <br>
        <br>
        - Hubcoin: <br>
        &nbsp;&nbsp;position:&nbsp;&nbsp;&nbsp;PHP backend developer; <br>
        &nbsp;&nbsp;timePeriod: from jun 2017 to sept 2017. <br>
        <br>
        - BSMGroup:<br>
        &nbsp;&nbsp;position:&nbsp;&nbsp;&nbsp;Node.js backend developer;<br>
        &nbsp;&nbsp;timePeriod: from jan 2018 to this day.<br>
        <br><br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <br>
        &nbsp;&nbsp;Solo/pet projects:<br>
        <br>
        - <a href='https://github.com/sylenien/BIT-transcripter'>BIT transpiler:</a><br>
        &nbsp;&nbsp;description: JS app that can translate single string statement <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        into BIT print statement, beautify BIT code and <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        also translate BIT print functions into valid<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        strings.
        <br><br>
        - <a href='https://github.com/sylenien/node-simple-api'>Simple API example:</a><br>
        &nbsp;&nbsp;description: simple API built with node.js and express.
        <br><br>
        - <a href='https://github.com/sylenien/web-shop-php'>PHP online shop:</a> <br>
        &nbsp;&nbsp;description: Complete and ready-to-go online shop built on php<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        and mysql.`
    },
    'contacts': {
        'text': `$ <b>contacts</b> <br>
        >&nbsp;You can contact me via email: <br>
        &nbsp;<b>sylenien@gmail.com</b>`
    },
    'error': {
        'text': '<br>>&nbsp;lost? Try writing "help" in console.'
    },
    'funfact': {
        'text': `$ <b>funfact</b> 
        <br>> Did you know that you can destroy your Linux PC simply by typing 'sudo mv ~ /dev/null' in console? Try it out!`
    },
    'doge': {
        'text': `<p style='color:#333333'>
                ........▄..............▄<br>
                ........▌▒█...........▄▀▒▌<br>
                ....... ▌▒▒█........▄▀▒▒▒▐<br>
                .......▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐<br>
                .....▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐<br>
                ...▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌<br>
                ..▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌<br>
                ..▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐<br>
                .▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌<br>
                .▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌<br>
                ▌▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐<br>
                ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌<br>
                ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐<br>
                .▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌<br>
                .▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐<br>
                ..▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌<br>
                ....▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀<br>
                ......▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀<br>
                ........▒▒▒▒▒▒▒▒▒▒▀▀<br>
                </p>
        `
    }
} 
const $ = (cn) => {
    item = document.getElementById(cn);
    return item;
}

const handle = (e) => {
    console.log(e.keyCode)
    e.keyCode == 13 ? consInput('inp') : console.log('not ent');
}

/**
 * Takes input from text-field and pass it to handler if it matches any command from list.
 * @param {string} inp input from console
 */
const consInput = (inp) => {
    command = $(inp).value;
    error   = '$ '+command+commands.error.text;
    $(inp).value = '';
    $('text').innerHTML = (commands[command] ?  commands[command].text : error);
}

document.addEventListener('keypress', handle);