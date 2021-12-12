import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import CourseList from "./components/courseList";

const Banner = ({title}) => (
  <Text style={styles.bannerStyle}>{title}</Text>
)

export default function App() {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });

  const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';

  useEffect(() => {
    const fetchSchedule =  async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(json);
    }
    fetchSchedule();
  }, []);

  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>Welcome to my app!</Text>
        <Banner title={schedule.title} />
        <CourseList courses={schedule.courses} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  textStyle: {
    color: '#0a7633',
    fontSize: 32,
    marginBottom: 20,
  },
  bannerStyle: {
    color: '#888',
    fontSize: 32,
  }
});
