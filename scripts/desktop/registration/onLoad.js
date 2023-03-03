function onLoad()
{
    document.getElementById('beta_program_image').style.width = '800px';
    document.getElementById('info_description').style.width = '800px';
    document.getElementById('info_description').style.textAlign = 'justify';
    document.getElementById('info_focus_topics').style.width = '800px';
    document.getElementById('info_focus_topics').style.textAlign = 'justify';
    
    checkUsername();
}

function checkUsername()
{
    var username = jr_get_value('user');
    if (username.includes('Webuser')) {
        jr_set_value('user', '');
        jr_set_value('prename', '');
        jr_set_value('lastname', '');
        jr_set_value('mail_address', '');
    }
}