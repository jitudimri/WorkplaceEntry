import { useState } from 'react';
import { Text, StyleSheet, SectionList, useColorScheme } from 'react-native';
import { fetchActivities } from '../../lib/activities';
import { Colors } from '../../constants/Colors';

import ThemedButton from '../../components/ThemedButton';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';

const Session = () => {
    const sessionActivities = fetchActivities();//replace this with react query
    const [selectedActivity, setSelectedActivity] = useState('');
    const [activityStarted, setActivityStarted] = useState('');

    const colorScheme = useColorScheme();
    const selectedColor = Colors[colorScheme]?.iconColor || Colors.light.iconColor;

    const handleActivityPress = (activity) => {
      if (selectedActivity === activity) {
        setSelectedActivity(''); // Deselect if already selected
        return;
      }
      setSelectedActivity(activity);
    }

    const handleStartActivity = () => {
        setActivityStarted(selectedActivity);
    }

  return (
    <ThemedView style={styles.stickyContent} >
        <ThemedButton onPress={handleStartActivity} style={ selectedActivity ? styles.startBtn : styles.startBtnDisabled}>
            <Text style={styles.startBtnText}>Start Activity</Text>
        </ThemedButton>
        
        {activityStarted && <ThemedText style={styles.activityLabel}>
            Activity '{activityStarted}' start posted...
        </ThemedText>}
        <Spacer height={20}/>

        <ThemedView style={styles.container} >
            <SectionList
                style={{ paddingTop: 1,}}
                sections={sessionActivities}
                keyExtractor={(item, index) => item.id}
                renderItem={({item, section: {activityGroup, color}}) => (
                <ThemedButton style={[ 
                    styles.item, 
                    color && {backgroundColor: color},
                    selectedActivity === item.name && 
                        {borderStyle: 'dashed', borderColor: selectedColor, opacity: 0.7}
                    ]} 
                    onPress={() => handleActivityPress(item.name)}>
                    <Text style={styles.title}>{item.name}</Text>
                </ThemedButton>
                )}
                stickySectionHeadersEnabled={true}
                renderSectionHeader={({section: {activityGroup}}) => (
                <ThemedText style={styles.header}>{activityGroup}</ThemedText>
                )}
            />
        </ThemedView>
        
        {/* The below is added just make sure the SectionList last entry is visible in screen*/}
        <Text ></Text>
    </ThemedView>
  );
}

export default Session;

const styles = StyleSheet.create({
  activityLabel: {
    color: 'green', 
    fontSize: 24, 
    marginLeft: 20, 
    marginTop: 10,
  },
  container: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: 16,
    marginTop: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    borderWidth: 4,
    borderRadius: 30,
    alignItems: 'left',
    borderStyle: 'solid',
  },
  header: {
    fontSize: 32,
  },
  listHeader: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  listHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  stickyContent: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 0,
  },
  startBtn: {
    backgroundColor: '#ebefa9ff',
  },
  startBtnText: {
    color: Colors.black, 
    fontSize: 24,
  },
  startBtnDisabled: {
    backgroundColor: Colors.light.iconColor,
  },
  title: {
    fontSize: 24,
  },
});
