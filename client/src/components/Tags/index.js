import React from "react";
import "./style.css";
import { FormControl, InputGroup, Dropdown, DropdownButton, Checkbox, Card } from 'react-bootstrap';





function TagSelection(props) {
    return (
        <div>
            {props.submittedTags}


            <DropdownButton id="dropdown-item-button" title="Dropdown button">
                {/* /this is something to do when this button is clicked */}
                <div className="dropdownDiv">
                    
                    <Dropdown.Item value="Health Conditions and Diseases" onClick={() => props.pushonArray("Health Conditions and Diseases")}>Health Conditions and Diseases</Dropdown.Item>
                    <Dropdown.Item value="Nutrition and Physical Activity" onClick={() => props.pushonArray("Nutrition and Physical Activity")}>Nutrition and Physical Activity</Dropdown.Item>
                    <Dropdown.Item value="Babies and Toddlers" onClick={() => props.pushonArray("Babies and Toddlers")}>Babies and Toddlers</Dropdown.Item>
                    <Dropdown.Item value="Breast and Ovarian" onClick={() => props.pushonArray("Breast and Ovarian")}>Breast and Ovarian</Dropdown.Item>
                    <Dropdown.Item value="Cancer" onClick={() => props.pushonArray("Cancer")}>Cancer</Dropdown.Item>
                    <Dropdown.Item value="Cervical" onClick={() => props.pushonArray("Cervical")}>Cervical</Dropdown.Item>
                    <Dropdown.Item value="Colorectal" onClick={() => props.pushonArray("Colorectal")}>Colorectal  </Dropdown.Item>
                    <Dropdown.Item value="Diabetes" onClick={() => props.pushonArray("Diabetes")}>Diabetes</Dropdown.Item>
                    <Dropdown.Item value="Doctor and Midwife Visits" onClick={() => props.pushonArray("Doctor and Midwife Visits")}>Doctor and Midwife Visits</Dropdown.Item>
                    <Dropdown.Item value="Doctor Visits" onClick={() => props.pushonArray("Doctor Visits")}>Doctor Visits</Dropdown.Item>
                    <Dropdown.Item value="Heart" onClick={() => props.pushonArray("Heart")}>Heart</Dropdown.Item>
                    <Dropdown.Item value="HIV and Other STDs" onClick={() => props.pushonArray("HIV and Other STDs")}>HIV and Other STDs</Dropdown.Item>
                    <Dropdown.Item value="Nutrition" onClick={() => props.pushonArray("Nutrition")}>Nutrition</Dropdown.Item>
                    <Dropdown.Item value="Nutrition and Physical Activity" onClick={() => props.pushonArray("Nutrition and Physical Activity")}>Nutrition and Physical Activity</Dropdown.Item>
                    <Dropdown.Item value="Obesity" onClick={() => props.pushonArray("Obesity")}>Obesity</Dropdown.Item>
                    <Dropdown.Item value="Older Adults" onClick={() => props.pushonArray("Older Adults")}>Older Adults</Dropdown.Item>
                    <Dropdown.Item value="Oral Health" onClick={() => props.pushonArray("Oral Health")}>Oral Health</Dropdown.Item>
                    <Dropdown.Item value="Osteoporosis" onClick={() => props.pushonArray("Osteoporosis")}>Osteoporosis</Dropdown.Item>
                    <Dropdown.Item value="Physical Activity" onClick={() => props.pushonArray("Physical Activity")}>Physical Activity</Dropdown.Item>
                    <Dropdown.Item value="Preeclampsia" onClick={() => props.pushonArray("Preeclampsia")}>Preeclampsia</Dropdown.Item>
                    <Dropdown.Item value="Pregnancy" onClick={() => props.pushonArray("Pregnancy")}>Pregnancy</Dropdown.Item>
                    <Dropdown.Item value="Questions for the Doctor" onClick={() => props.pushonArray("Questions for the Doctor")}>Questions for the Doctor</Dropdown.Item>
                    <Dropdown.Item value="Screening Tests" onClick={() => props.pushonArray("Screening Tests")}>Screening Tests</Dropdown.Item>
                    <Dropdown.Item value="Sexual Health" onClick={() => props.pushonArray("Sexual Health")}>Sexual Health</Dropdown.Item>
                    <Dropdown.Item value="Women" onClick={() => props.pushonArray("Women")}>Women</Dropdown.Item>
                </div>
           {/* Submitted Tags: {props.submittedTags.join(" ")} */}

            </DropdownButton>

        </div>
    )
}

export default TagSelection;
