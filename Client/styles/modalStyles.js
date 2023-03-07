import { StyleSheet } from "react-native";


/* Style sheet for Home page + many modals throughout app */
export const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  modalView: {
    height: 775,
    width: 380,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 1,
  },
  buttonAdd: {
    position: "absolute",
    borderRadius: 60,
    flex: 1,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "flex-end",
    bottom: 28,
    right: 30,
  },
  buttonAdd2: {
    top: 450,
    left: 170,
  },
  buttonClose: {
    position: "absolute",
    top: 690,
    right: 15,
    borderRadius: 5,
    width: 110,
    height: 40,
    backgroundColor: "#B72303",
    alignItems: "center",
    justifyContent: "center",
  },
  bClose: {
    borderRadius: 60,
    padding: 10,
    backgroundColor: "#E1E1E1",
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 740,
    left: 167,
  },
  close: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 31,
    height: 31,
    bottom: 732,
    left: 167,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 30,
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "left",
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    fontSize: 12,
    color: 'gray',
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderColor: 'gray',
    backgroundColor: '#E8EAED',
    borderRadius: 2,
    borderWidth: 0.5,
    width: 320,
    marginTop: 39,
  },
  field: {
    fontSize: 15,
    lineHeight: 60,
    textAlign: 'left',
    padding: 2,
  },
  fieldWrapper: {
    position: 'absolute',
    paddingTop: 64,
    paddingLeft: 5,
  },
  fieldStyle: {
    textAlign: 'left',
    width: 500,
  },
  add: {
    flex: 1,
  },
  searchBar: {
    fontSize: 18,
    color: 'gray',
    paddingVertical: 3,
    paddingHorizontal: 45,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 2,
    borderWidth: 0.5,
    width: 400,
    marginLeft: 2,
    marginBottom: 25,

  },
  patientFormButton: {
    position: "absolute",
    borderRadius: 60,
    width: 80,
    height: 80,
    paddingTop: 60,
    paddingLeft: 20,
  },
  sync: {
    position: "absolute",
    paddingHorizontal: 10,
  },
  searchButton: {
    right: 392,
    top: 6,
  },
});