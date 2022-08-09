
function show_menu1() {
    document.getElementById("nav_btns").style.bottom = '0';
}

function hide_menu() {
    document.getElementById("nav_btns").style.bottom = '-100%';
}

function show_skill_data1() {
    if ( document.getElementById('Skill_data_in1').style.display === 'none') {
    document.getElementById('SKills_img21').style.transform = 'rotate(180deg)'
    document.getElementById('Skill_data_in1').style.display = 'block';
} else {
    document.getElementById('SKills_img21').style.transform = 'rotate(0deg)'
    document.getElementById('Skill_data_in1').style.display = 'none';
}
}
function show_skill_data2() {
    if ( document.getElementById('Skill_data_in2').style.display === 'none') {
    document.getElementById('Skill_data_in2').style.display = 'block'; 
    document.getElementById('SKills_img22').style.transform = 'rotate(180deg)'
} else {
    document.getElementById('Skill_data_in2').style.display = 'none';
    document.getElementById('SKills_img22').style.transform = 'rotate(0deg)'
}
}


window.addEventListener("scroll",function(){
  hide_menu()
})