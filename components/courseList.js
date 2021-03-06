import {StyleSheet, ScrollView, View} from "react-native";
import Course from "./course";
import TermSelector from "./termSelector";
import React, {useState} from "react";

const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const getCourseTerm = course => (
    termMap[course.id.charAt(0)]
);

const CourseList = ({courses}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

    return (
        <View>
            <TermSelector terms={terms} selectedTerms={selectedTerm} setSelectedTerm={setSelectedTerm}/>
            <ScrollView>
                <View style={styles.courseList}>
                    { termCourses.map(course => <Course key={course.id} course={course} />) }
                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    courseList: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
})

export default CourseList;
