import { useMemo, useState } from 'react';
import { Calendar } from 'react-native-calendars';
import {
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Colors, wp } from '../Theme';
import RNStyles from './RNStyles';

const RNCalendar = ({ visible, onClose, onDateSelect, isSingle }) => {
  const [range, setRange] = useState({
    start: null,
    end: null,
    singleDate: null,
  });

  const isWeekend = date => {
    const day = new Date(date).getDay();
    return day === 0 || day === 6; // 0 for Sunday, 6 for Saturday
  };

  const onDayPress = day => {
    const { dateString } = day;
    if (isWeekend(dateString)) return; // Ignore weekends

    if (isSingle) {
      setRange(p => ({ ...p, singleDate: dateString }));
      onDateSelect?.(new Date(dateString));
      return;
    }

    if (!range.start || (range.start && range.end)) {
      setRange({ start: dateString, end: null });
    } else {
      let start = new Date(range.start);
      let end = new Date(dateString);
      if (end < start) {
        [start, end] = [end, start];
      }
      setRange(prev => ({ ...prev, end, start }));
      onDateSelect?.({ start, end });
    }
  };

  const getDatesInRange = (start, end) => {
    const dates = [];
    const currentDate = new Date(start);
    const endDate = new Date(end);
    while (currentDate <= endDate) {
      dates.push(currentDate.toISOString().split('T')[0]);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const markedDates = useMemo(() => {
    const marked = {};

    // Disable weekends
    for (let i = 0; i < 365; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      const dateString = date.toISOString().split('T')[0];
      if (isWeekend(dateString)) {
        marked[dateString] = {
          disabled: true,
          disableTouchEvent: true,
        };
      }
    }
    if (isSingle) {
      return {
        [range.singleDate]: {
          selected: true,
          selectedColor: Colors.primary,
          textColor: Colors.white,
          customStyles: {
            container: {
              backgroundColor: Colors.primary,
              borderRadius: 16,
            },
            text: {
              color: Colors.white,
            },
          },
        },
      };
    }
    if (!range.start) return {};
    if (!range.end) {
      return {
        [range.start]: {
          startingDay: true,
          color: Colors.primary,
          textColor: Colors.white,
        },
      };
    }
    const dates = getDatesInRange(range.start, range.end);
    return dates.reduce((acc, date, idx) => {
      acc[date] = {
        color: Colors.primary,
        textColor: Colors.white,
        startingDay: idx === 0,
        endingDay: idx === dates.length - 1,
      };
      return acc;
    }, {});
  }, [range]);

  return (
    <Modal
      visible={visible}
      animationType={'fade'}
      onRequestClose={onClose}
      transparent={true}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableOpacity activeOpacity={1} style={styles.content}>
            <Calendar
              onDayPress={onDayPress}
              markedDates={markedDates}
              markingType={isSingle ? 'custom' : 'period'}
              style={styles.calendar}
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
const styles = StyleSheet.create({
  overlay: {
    ...RNStyles.container,
    ...RNStyles.center,
    backgroundColor: Colors.black + '40',
  },
  content: {
    width: '80%',
  },
  calendar: {
    borderRadius: wp(4),
    overflow: 'hidden',
  },
});

export default RNCalendar;
