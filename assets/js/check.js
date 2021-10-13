// check registration number
const course_name = document.getElementById('id_course')
const reg_holder = document.getElementById('id_registration_no')
const phd = new RegExp("\\b(2)\\d{3}(R|r)[a-zA-Z]{2}\\d{2}\\b") //2019RBT01,2019Rbt02 are accepted
const mtech = new RegExp("\\b(2)\\d{3}[a-zA-z]{2}\\d{2}\\b") // 2019CC01,2021BT02 are some examples
const msc = new RegExp("\\b(2)\\d{3}(MSC|msc)\\d{2}\\b") // 2019(msc/MSC)01,2020(msc/MSC)01 are some examples 
const mca = new RegExp("\\b(2)\\d{3}(ca|CA)\\d{2}\\b") //2019ca01,2021CA01 types are accepted
const btech = new RegExp("\\b(2)\\d{7}\\b"); // 20214188,20194156accepts all valid regno starting with 2 and of length 8
const reg_ex = [btech, mca, mtech, msc, phd]
let sel_course = course_name.options[course_name.options.selectedIndex]
let reg_no = "";
//checks Valid regNum
function checkForm() {
    const flag = isValidRegNum();
    if (!flag) {
        $('.toast').toast('show');
        // alert("Invalid Registration Number");
    }
    // return isValidRegNum();
    return flag;
}

function isValidRegNum() {
    reg_no = reg_holder.value;
    const course_val = course_name.options[course_name.options.selectedIndex].value
    if (course_val == 3) { // fixes : in mtech mca was getting accepted 
        return reg_ex[course_val - 1].test(reg_no) ^ reg_ex[course_val - 2].test(reg_no)
    }
    return (reg_ex[course_val - 1].test(reg_no))

}
// For visual implementation for Reg num box
reg_holder.onkeyup = () => {
        if (!isValidRegNum()) reg_holder.style.borderColor = 'Red'
        else reg_holder.style.borderColor = 'green'
    }
    // For visual implementation for Reg num box
course_name.onchange = () => {
    if (!isValidRegNum()) reg_holder.style.borderColor = 'Red'
    else reg_holder.style.borderColor = 'green'
}