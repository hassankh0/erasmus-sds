import { PDFDownloadLink, Document, Page, Text, View } from '@react-pdf/renderer';

//Export du composant
export default function ListOfUniversities() {


  //state

  //mock user
  const user = {
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    university: 'Université de Paris'
  };
  
  //mock course
  const courses = [
    { name: 'Introduction à la psychologie', code: 'PSY101', ects: 6 },
    { name: 'Histoire de l\'art', code: 'ART102', ects: 3 },
    { name: 'Sociologie de la communication', code: 'SOC205', ects: 6 }
  ];

  //comportement 

  const LearningAgreement = ({ user, courses }) => {
    // Créer un nouveau document PDF
    const OLA = (
      <Document>
        <Page>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: "center"}}>Learning Agreement</Text>
        {/* Section des informations utilisateur */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>User informations</Text>
            <View> 
              
              <View>
                <Text>
                  <Text style={{ fontSize: 15, marginBottom: 2, marginRight: 4 }}>Name : </Text>
                  <Text style={{ fontSize: 12}}> {user.name}</Text>
                </Text>
              </View>

              <View>
                <Text>
                  <Text style={{ fontSize: 15, marginBottom: 2, marginRight: 4 }}>Email : </Text>
                  <Text style={{ fontSize: 12}}>{user.email}</Text>
                </Text>
              </View>

              <View>
                <Text>
                  <Text style={{ fontSize: 15, marginBottom: 2, marginRight: 4 }}>University : </Text>
                  <Text style={{ fontSize: 12}} >{user.university}</Text>
                </Text>
              </View>
            </View>

          </View>
        
        
        {/* Section des cours choisis */}
        <View>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Courses</Text>
          <View style={{ borderWidth: 1, borderStyle:"solid" }}>

            <View style={{ backgroundColor: "#f2f2f2", borderBottomWidth: 1, borderStyle: "solid", borderBottomColor: "#000000", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{ fontSize:12, margin: 10, textAlign: "left" }}>Name of Course</Text>
                <Text style={{ fontSize:12, margin: 10, textAlign: "center"}}>Code of Course</Text>
                <Text style={{ fontSize:12, margin: 10, textAlign: "right"}} >ECTS</Text>
            </View>

            <View style={{ backgroundColor: "#f2f2f2", borderBottomWidth: 1, borderStyle: "solid", borderBottomColor: "#000000"}}></View>
              {courses.map((course, index) => (
                <View key={index} style={{flexDirection: "row", justifyContent: "flex-start"}}>
                  <Text style={{ fontSize:10, textAlign: "left", width: 300}}>{course.name}</Text>
                  <Text style={{ fontSize:10, textAlign: "left", width: 170}}>{course.code}</Text>
                  <Text style={{ fontSize:10, textAlign: "right", width: 100}}>{course.ects}</Text>
                </View>
              ))}
            
            </View>
          </View>
      </Page>

      </Document>
    );
    
    // Renvoyer le lien de téléchargement pour le PDF
    return (
      <PDFDownloadLink document={OLA} fileName="Learning Agreement.pdf">
        {({ blob, url, loading, error }) =>
          loading ? 'Loading...' : 'Download'
        }
      </PDFDownloadLink>
    );
    };
  
    //affichage
    return (
      <div>
        <LearningAgreement user={user} courses={courses} />
      </div>
    );
}
