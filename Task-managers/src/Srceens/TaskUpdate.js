import Ionicons from "@expo/vector-icons/Ionicons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch } from "react-redux";
import { categories } from "../../data/Categories";
import { updateTask } from "../Redux/TaskManager";

const TaskUpdate = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const task = route.params?.task;

  const [title, setTitle] = useState(task?.title || "");
  const [details, setDetails] = useState(task?.details || "");
  const [requirement, setRequirement] = useState(task?.expectedResult || "");
  const [startDate, setStartDate] = useState(
    task?.startDate ? new Date(task.startDate) : new Date()
  );
  const [endDate, setEndDate] = useState(
    task?.endDate ? new Date(task.endDate) : new Date()
  );
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);
  const [time, setTime] = useState(
    task?.time ? new Date(`2000-01-01T${task.time}`) : new Date()
  );
  const [showTime, setShowTime] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    task?.categoryId || categories[0].id
  );
  const [showCategory, setShowCategory] = useState(false);

  const onChangeStart = (event, selectedDate) => {
    setShowStart(Platform.OS === "ios");
    if (selectedDate) setStartDate(selectedDate);
  };
  const onChangeEnd = (event, selectedDate) => {
    setShowEnd(Platform.OS === "ios");
    if (selectedDate) setEndDate(selectedDate);
  };
  const onChangeTime = (event, selectedTime) => {
    setShowTime(Platform.OS === "ios");
    if (selectedTime) setTime(selectedTime);
  };

  const handleUpdate = () => {
    if (!title.trim())
      return Alert.alert("Thông báo", "Vui lòng nhập tên công việc");

    const updatedTask = {
      id: task.id,
      title,
      details,
      expectedResult: requirement,
      startDate: startDate.toLocaleDateString("vi-VN"),
      endDate: endDate.toLocaleDateString("vi-VN"),
      time: time.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      categoryId: selectedCategory,
    };

    dispatch(updateTask(updatedTask));
    Alert.alert("Thông báo", "Cập nhật công việc thành công!");
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back-outline" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Chỉnh sửa công việc</Text>
        </View>

        <View style={styles.form}>
          {/* Tên công việc */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tên công việc</Text>
            <TextInput
              placeholder="Nhập tên công việc"
              style={styles.input}
              value={title}
              onChangeText={setTitle}
            />
          </View>

          {/* Chi tiết */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Chi tiết công việc</Text>
            <TextInput
              placeholder="Nhập chi tiết công việc"
              style={[styles.input, { height: 80, textAlignVertical: "top" }]}
              multiline
              value={details}
              onChangeText={setDetails}
            />
          </View>

          {/* Yêu cầu */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Yêu cầu công việc</Text>
            <TextInput
              placeholder="Nhập yêu cầu hoặc ghi chú thêm"
              style={[styles.input, { height: 60, textAlignVertical: "top" }]}
              multiline
              value={requirement}
              onChangeText={setRequirement}
            />
          </View>

          {/* Ngày bắt đầu */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ngày bắt đầu</Text>
            <View style={styles.rowInput}>
              <TextInput
                style={styles.rowTextInput}
                value={startDate.toLocaleDateString("vi-VN")}
                editable={false}
              />
              <TouchableOpacity
                style={styles.iconBtn}
                onPress={() => setShowStart(true)}
              >
                <Ionicons
                  name="calendar-clear-outline"
                  size={22}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            {showStart && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={onChangeStart}
              />
            )}
          </View>

          {/* Ngày kết thúc */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Ngày kết thúc</Text>
            <View style={styles.rowInput}>
              <TextInput
                style={styles.rowTextInput}
                value={endDate.toLocaleDateString("vi-VN")}
                editable={false}
              />
              <TouchableOpacity
                style={styles.iconBtn}
                onPress={() => setShowEnd(true)}
              >
                <Ionicons
                  name="calendar-clear-outline"
                  size={22}
                  color="gray"
                />
              </TouchableOpacity>
            </View>
            {showEnd && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={onChangeEnd}
              />
            )}
          </View>

          {/* Giờ bắt đầu */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Giờ bắt đầu</Text>
            <View style={styles.rowInput}>
              <TextInput
                style={styles.rowTextInput}
                value={time.toLocaleTimeString("vi-VN", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                editable={false}
              />
              <TouchableOpacity
                style={styles.iconBtn}
                onPress={() => setShowTime(true)}
              >
                <Ionicons name="time-outline" size={22} color="gray" />
              </TouchableOpacity>
            </View>

            {showTime && (
              <View style={styles.timePickerBox}>
                <View style={styles.timePickerHeader}>
                  <TouchableOpacity onPress={() => setShowTime(false)}>
                    <Text style={styles.doneText}>Xong</Text>
                  </TouchableOpacity>
                </View>

                <DateTimePicker
                  value={time}
                  mode="time"
                  is24Hour={true}
                  display={Platform.OS === "ios" ? "spinner" : "default"}
                  onChange={onChangeTime}
                />
              </View>
            )}
          </View>

          {/* Loại công việc */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Loại công việc</Text>
            <TouchableOpacity
              style={styles.rowInput}
              onPress={() => setShowCategory(!showCategory)}
            >
              <Text style={styles.rowTextInput}>
                {
                  categories.find((c) => c.id === Number(selectedCategory))
                    ?.name
                }
              </Text>
              <Ionicons
                name={
                  showCategory ? "chevron-up-outline" : "chevron-down-outline"
                }
                size={22}
                color="gray"
              />
            </TouchableOpacity>

            {showCategory && (
              <View style={styles.categoryBox}>
                <View style={styles.categoryHeader}>
                  <TouchableOpacity onPress={() => setShowCategory(false)}>
                    <Text style={styles.doneText}>Xong</Text>
                  </TouchableOpacity>
                </View>
                <Picker
                  selectedValue={selectedCategory}
                  onValueChange={setSelectedCategory}
                  style={styles.picker}
                >
                  {categories.map((c) => (
                    <Picker.Item key={c.id} label={c.name} value={c.id} />
                  ))}
                </Picker>
              </View>
            )}
          </View>
        </View>

        <TouchableOpacity style={styles.submitBtn} onPress={handleUpdate}>
          <Text style={styles.submitText}>Cập nhật công việc</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskUpdate;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    padding: 16,
  },
  backBtn: { backgroundColor: "#e5e7eb", padding: 8, borderRadius: 50 },
  headerTitle: { fontSize: 22, fontWeight: "bold", marginLeft: 12 },
  form: { flex: 1, paddingHorizontal: 16, gap: 16 },
  inputGroup: { gap: 6 },
  label: { fontSize: 16, fontWeight: "600", color: "#374151" },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingHorizontal: 12,
    height: 44,
    fontSize: 15,
    backgroundColor: "#fff",
  },
  rowInput: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#fff",
    paddingRight: 8,
  },
  rowTextInput: { flex: 1, height: 44, paddingHorizontal: 12, fontSize: 15 },
  iconBtn: { padding: 6 },
  timePickerBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginTop: 6,
  },
  timePickerHeader: {
    alignItems: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },
  categoryBox: {
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#d1d5db",
    marginTop: 6,
  },
  categoryHeader: {
    alignItems: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "#e5e7eb",
  },
  doneText: { fontSize: 16, fontWeight: "600", color: "#007AFF" },
  submitBtn: {
    backgroundColor: "#00BFFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    margin: 16,
  },
  submitText: { fontSize: 18, fontWeight: "700", color: "#fff" },
  picker: { backgroundColor: "#fff" },
});
