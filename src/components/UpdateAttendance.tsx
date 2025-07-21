import React, { useState } from "react";
import axios from "axios";

const UpdateAttendance = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [inTime, setInTime] = useState("");
  const [outTime, setOutTime] = useState("");
  const [hoursWorked, setHoursWorked] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("/update_attendance", {
        employee_id: employeeId,
        date,
        status,
        in_time: inTime,
        out_time: outTime,
        hours_worked: hoursWorked || undefined,
      });
      alert(response.data.message || "Attendance updated successfully!");
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        alert(`Error updating attendance: ${error.response.data}`);
      } else {
        alert(`Error updating attendance: ${error.message || "An unknown error occurred"}`);
      }
      console.error("Error details:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
      <h1 style={styles.heading as React.CSSProperties}>Update Attendance</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.field}>
            <label style={styles.label}>Employee ID:</label>
            <input
              type="text"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
              style={styles.input}
            >
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Late">Late</option>
            </select>
          </div>
          <div style={styles.field}>
            <label style={styles.label}>In Time (HH:MM):</label>
            <input
              type="time"
              value={inTime}
              onChange={(e) => setInTime(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Out Time (HH:MM):</label>
            <input
              type="time"
              value={outTime}
              onChange={(e) => setOutTime(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Hours Worked (optional):</label>
            <input
              type="number"
              step="0.01"
              value={hoursWorked}
              onChange={(e) => setHoursWorked(e.target.value)}
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.button}>
            Update Attendance
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f4f4f9",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    maxWidth: "400px",
    width: "100%",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "24px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column" as "column",
    gap: "15px",
  },
  field: {
    display: "flex",
    flexDirection: "column" as "column",
  },
  label: {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    textAlign: "center" as "center",
  },
};

export default UpdateAttendance;
