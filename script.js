
function show_menu1() {
    document.getElementById("nav_btns").style.bottom = '0';
}

function hide_menu() {
    document.getElementById("nav_btns").style.bottom = '-100%';
}

// function show_skill_data1() {
//     if ( document.getElementById('Skill_data_in1').style.display === 'none') {
//     document.getElementById('SKills_img21').style.transform = 'rotate(180deg)'
//     document.getElementById('Skill_data_in1').style.display = 'block';
// } else {
//     document.getElementById('SKills_img21').style.transform = 'rotate(0deg)'
//     document.getElementById('Skill_data_in1').style.display = 'none';
// }
// }
// function show_skill_data2() {
//     if ( document.getElementById('Skill_data_in2').style.display === 'none') {
//     document.getElementById('Skill_data_in2').style.display = 'block'; 
//     document.getElementById('SKills_img22').style.transform = 'rotate(180deg)'
// } else {
//     document.getElementById('Skill_data_in2').style.display = 'none';
//     document.getElementById('SKills_img22').style.transform = 'rotate(0deg)'
// }
// }
function show_skill_data1() {
    if ( document.getElementById('Skill_data_in1').style.left === '-300%') {
    document.getElementById('SKills_img21').style.transform = 'rotate(180deg)'
    document.getElementById('Skill_data_in1').style.left = '0';
    document.getElementById('Skills_data1').style.padding = '0 0 40px'
} else {
    document.getElementById('SKills_img21').style.transform = 'rotate(0deg)'
    document.getElementById('Skill_data_in1').style.left = '-300%';
    document.getElementById('Skills_data1').style.padding = '0';
}
}
function show_skill_data2() {
    if ( document.getElementById('Skill_data_in2').style.left === '-300%') {
    document.getElementById('Skill_data_in2').style.left = '0'; 
    document.getElementById('SKills_img22').style.transform = 'rotate(180deg)';
    document.getElementById('Skills_data2').style.paddingBottom = '260px';
} else {
    document.getElementById('Skill_data_in2').style.left = '-300%';
    document.getElementById('SKills_img22').style.transform = 'rotate(0deg)';
    document.getElementById('Skills_data2').style.paddingBottom = '0';
}
}

window.addEventListener("scroll",function(){
  hide_menu()
})