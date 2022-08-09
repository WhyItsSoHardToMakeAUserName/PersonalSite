
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
    document.getElementById('Skills_data1').style.padding = '0 0 60px'
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

function show_edu_data() {
    document.getElementById('edu_data').style.visibility = 'visible'
    document.getElementById('work_data').style.visibility = 'hidden'
    document.getElementById('edu_line').style.opacity = '1'
    document.getElementById('work_line').style.opacity = '0'
}
function show_work_data() {
    document.getElementById('work_data').style.visibility = 'visible'
    document.getElementById('edu_data').style.visibility = 'hidden'
    document.getElementById('edu_line').style.opacity = '0'
    document.getElementById('work_line').style.opacity = '1'
}




window.addEventListener("scroll",function(){
  hide_menu()
})