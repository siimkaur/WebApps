$(document).ready(function() {
    // disable sign-off btn:
    $('#signOffNote').prop('disabled', true);

    // And past note textarea...

    var patientNames = ['Anthony', 'Andy', 'Anna', 'Astra', 'Alexandra', 'Allen', 'Ahmed'];
    var list = document.getElementById('patient_name');

    patientNames.forEach(function (item) {
        var option = document.createElement('option');
        option.value = item;
        list.appendChild(option);
    });


    var healthRecords = {
        'Anthony': {
            name: 'Anthony',
            encounterNotes: [
                {
                    dateRecorded: new Date(2015, 10, 11),
                    note: 'CC: Abdominal pain INTERVAL HISTORY: Patient continues to complain of severe abdominal pain.,' +
                    'EXAM: In moderate distress. BP 144/84, HR 92, RR 22' +
                    'RESPIRATORY: Lungs CTA.' +
                    'CARDIOVASCULAR: Heart RRR.'


                },
                {
                    dateRecorded: new Date(2016, 2, 25),
                    note: ''


                },
                {
                    dateRecorded: new Date(2016, 5, 15),
                    note: ''


                }
            ]
        },
        'Anna': {
            name: 'Anna',
            encounterNotes: [
                {
                    dateRecorded: new Date(2015, 10, 11),
                    note: ''


                },
                {
                    dateRecorded: new Date(2016, 2, 25),
                    note: ''


                }
            ]
        },
        'Andy': {
            name: 'Andy',
            encounterNotes: [
                {
                    dateRecorded: new Date(2015, 10, 11),
                    note: ''


                },
                {
                    dateRecorded: new Date(2016, 2, 25),
                    note: ''


                },

            ]
        },
        'Astra': {
            name: 'Astra',
            encounterNotes: [
                {
                    dateRecorded: new Date(2015, 10, 11),
                    note: ''


                },
                {
                    dateRecorded: new Date(2016, 2, 25),
                    note: ''


                },
                {
                    dateRecorded: new Date(2016, 5, 15),
                    note: ''


                }
            ]
        },

    };

    var datalist = $('#patient_names');

    // Setup event handlers; first the keydown event:
    $('#patient_name').on('keydown', function() {
        // TODO: implement this
    });
    var currPatient = patientNames.value // get this from UI somehow
    var healthRec = healthRecords[currPatient];

    var currEncounterNotes = healthRec.encounterNotes;

    for (var i = 0; i < currEncounterNotes.length; i++) {
        var currNote = currEncounterNotes[i];

        // now from this currNote object you can access the
        // note and dateRecorded properties:

        currNote.note
        currNote.dateRecorded

        // etc..
    }
    // handle change event for patient_name input field

    // handle click event for signOffNote button
});
