import React from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    fontSize: 12,
    paddingTop: 30,
    paddingBottom: 60,
    paddingHorizontal: 50,
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  institutionContainer: {
    marginBottom: 20,
  },
  institutionText: {
    fontSize: 15,
    marginBottom: 2,
    marginRight: 4,
  },
  courseTable: {
    borderWidth: 1,
    borderStyle: 'solid',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#000000',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  tableHeader: {
    fontSize: 12,
    textAlign: 'center',
  },
  tableCell: {
    fontSize: 10,
    textAlign: 'left',
  },
  signatureContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  signatureBox: {
    width: '30%',
    height: 80,
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 10,
    padding: 5,
    textAlign: 'center',
  },
  signatureLabel: {
    fontSize: 10,
    marginBottom: 5,
  },
});


const LearningAgreement = (props) => {
  const { sendingInstitution, receivingInstitution, CourseInfo } = props;

  const student = JSON.parse(sessionStorage.getItem("student"));

  const CreateLearningAgreement = () => {
    const OLA = (
      <Document>
        <Page style={styles.page}>
          <Text style={styles.title}>Learning Agreement</Text>
          {/* User information section */}
          <View style={styles.section}>
            <Text style={styles.subtitle}>User Information</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Name:</Text>
                <Text style={styles.tableCell}>{student.firstname} {student.lastname} </Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Email:</Text>
                <Text style={styles.tableCell}>{student.email}</Text>
              </View>
              {/* Add any additional user information fields as necessary */}
            </View>
          </View>

          {/* Sending Institution section */}
          <View style={styles.section}>
            <Text style={styles.subtitle}>Sending Institution</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Name:</Text>
                <Text style={styles.tableCell}>{sendingInstitution.name}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Responsible Name:</Text>
                <Text style={styles.tableCell}>{sendingInstitution.responsibleName}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Contact Email:</Text>
                <Text style={styles.tableCell}>{sendingInstitution.contactEmail}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Department/Faculty:</Text>
                <Text style={styles.tableCell}>{sendingInstitution.department}</Text>
              </View>
            </View>
          </View>

          {/* Receiving Institution section */}
          <View style={styles.section}>
            <Text style={styles.subtitle}>Receiving Institution</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Name:</Text>
                <Text style={styles.tableCell}>{receivingInstitution.name}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Responsible Name:</Text>
                <Text style={styles.tableCell}>{receivingInstitution.responsibleName}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Contact Email:</Text>
                <Text style={styles.tableCell}>{receivingInstitution.contactEmail}</Text>
              </View>
              <View style={styles.tableRow}>
                <Text style={styles.tableCell}>Department/Faculty:</Text>
                <Text style={styles.tableCell}>{receivingInstitution.department}</Text>
              </View>
            </View>
          </View>

          {/* Courses section */}
          <View style={styles.section}>
            <Text style={styles.subtitle}>Courses</Text>
            <View style={styles.courseTable}>
              <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>Name of Course</Text>
                <Text style={styles.tableHeader}>Code of Course</Text>
                <Text style={styles.tableHeader}>ECTS</Text>
              </View>
              {CourseInfo.map((course, index) => (
                <View key={index} style={styles.tableRow}>
                  <Text style={styles.tableCell}>{course.name}</Text>
                  <Text style={styles.tableCell}>{course.code}</Text>
                  <Text style={styles.tableCell}>{course.credits}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Signature section */}
          <View style={styles.signatureContainer}>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLabel}>Student</Text>
              {/* Signature field for student */}
              {/* Add any additional fields or components as necessary */}
            </View>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLabel}>Sending Responsible</Text>
              {/* Signature field for sending responsible */}
              {/* Add any additional fields or components as necessary */}
            </View>
            <View style={styles.signatureBox}>
              <Text style={styles.signatureLabel}>Receiving Responsible</Text>
              {/* Signature field for receiving responsible */}
              {/* Add any additional fields or components as necessary */}
            </View>
          </View>
        </Page>
      </Document>
    );

    return (
      <PDFDownloadLink document={OLA} fileName="Learning Agreement.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading...' : 'Download')}
      </PDFDownloadLink>
    );
  };

  return (
    <div>
      {CreateLearningAgreement()}
    </div>
  );
};

export default LearningAgreement;
