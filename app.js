const commands = {
    'help': {
        'text': `$ <b>help</b><br>
        >&nbsp;Welcome to my CLI resume.<br>
        &nbsp;Available commands list is:<br>
        &nbsp;- help<br>
        &nbsp;- about<br>
        &nbsp;- projects<br>
        &nbsp;- contacts<br>
        &nbsp;- go to hell`
    },
    'about': {
        'text': `$ <b>about</b> <br>
        >&nbsp;Hello!<br>
        &nbsp;My name is Nikita and I'm a backend developer. <br>
        &nbsp;This simple CLI-like resume will guide you through projects I've made and tell you a bit about my experience. <br>
        &nbsp;My main skills are: <br>
        &nbsp;- Javascript <br>
        &nbsp;- Node.js    <br>
        &nbsp;- Express    <br>
        &nbsp;- Koa2       <br>
        &nbsp;- jQuery     <br>
        &nbsp;- Vue        <br>
        &nbsp;- Python     <br>
        &nbsp;- PHP(LAMP)  <br>
        &nbsp;- Watching funny cat videos in office <br>
        <br>
        &nbsp;You can find list of all available commands by typing "help" in console. <br>
        &nbsp;Written by @sylenien, 2018.`
    },
    'projects': {
        'text': `$ <b>projects</b> <br>
        >&nbsp;Here lies list of work and pet projects I made. <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ <br>
        &nbsp;&nbsp;Corporative/work projects: <br>
        <br>
        - Hubcoin: <br>
        &nbsp;&nbsp;position: PHP backend developer; <br>
        &nbsp;&nbsp;timePeriod: from jun 2017 to sept 2017; <br>
        <br>
        - BSMGroup:
        &nbsp;&nbsp;position: Node.js backend developer;<br>
        &nbsp;&nbsp;timePeriod: from jan 2018 to this day.<br>
        <br><br>
        Solo/pet projects: <br>
        - BIT transpiler: <br>
        &nbsp;&nbsp;description: JS app that can translate single string statement into BIT print statement, <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        beautify BIT code and also translate BIT print functions into valid strings.`
    },
    'contacts': {
        'text': `$ <b>contacts</b> <br>
        >&nbsp;You can contact me via email: <br>
        &nbsp;<b>sylenien@gmail.com</b>`
    },
    'error': {
        'text': '<br>>&nbsp;lost? Try writing "help" in console.'
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